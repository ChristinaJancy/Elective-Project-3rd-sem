<template>
  <section class="Basket">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyellow-flower.jpg?alt=media&token=14d019d8-9ad6-4fdf-b19a-caa08252632b"
      cover
    >
        <v-container>
          <v-row>
            <v-col offset-md="2" md="8" sm="12" xs="12">
              <h1>Basket</h1>
              <div class="pa-2" id="info">
                <v-simple-table id="product-table" light>
                  <thead>
                    <tr>
                      <th class="text-left">Product</th>
                       <th class="text-left">Info</th>
                      <th class="text-left">Price</th>
                      <th class="text-left">Remove product</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in products" :key="item.name">
                     <td id="id_product_img" style="text-align:center;">
                        <span id="td_name" >{{item.name}}</span>
                        <v-img v-bind:src="item.image"></v-img>
                        <br />
                       
                      </td>

                      <td> 
                      <b>Size</b> <span v-for="(size, index) in item.size" :key="index"> {{ size + ', ' }}</span>
                        <br>
                      <b>Color</b> <span v-for="(color, index) in item.color" :key="index"> {{ color }}</span>
                        <br>
                      <b>Types:</b> <span v-for="(type, index) in item.type" :key="index">{{ type + ', '}}</span>
                        <br>
                        <b>Categories:</b> <span v-for="(category, index) in item.category" :key="index">{{ category + ', ' }}</span>
                      <br>
                      <b>Seasons:</b> <span v-for="(season, index) in item.season" :key="index">{{ season + ', '}}</span>
                    </td>
                      <td>{{ item.price }} DKK</td>
                      <td>
                        <v-btn @click="deleteItem(item.id)" depressed text small>
                          <v-icon color="iconcolor">mdi-delete</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-col>
          </v-row>
        </v-container>
    </v-img>
  </section>
</template>

<script scoped>
import { dbProductAdd } from "../firebase.js";
// import { dbProductAdd } from "../../firebase.js";

export default {
  data() {
    return {
      basket: [],
      dialog: false,
      item: [],
      activeEditItem: null,
      multiLine: true,
      snackbar: false,
      updatedText: "Product has been updated",
      size: [],
      color: [],
      type: [],
      category: [],
      season: [],
    };
  },
  beforeCreate() {
    this.$store.dispatch("setProducts");
  },

  methods: {
    editItem(item) {
      this.item = item;
      this.activeEditItem = item.id;
    },
    updateItem() {
      dbProductAdd
        .doc(this.activeEditItem)
        .update(this.item)
        .then(() => {
          this.snackbar = true;
          console.log("it works!");
        })
        .catch(function (error) {
          console.error("oh no, I got an error", error);
        });
    },
    deleteItem(id) {
      //we want to target/grab the id
      dbProductAdd
        .doc(id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
    addToBasket(item) {
      if (this.basket.find((itemInArray) => item.name === itemInArray.name)) {
        item = this.basket.find(
          (itemInArray) => item.name === itemInArray.name
        );
        this.increaseQnt(item);
      } else {
        this.basket.push({
          name: item.name,
          size: item.size,
          type: item.type,
          category: item.category,
          season: item.season,
          price: item.price,
          quantity: 1,
        });
      }
    },
    increaseQnt(item) {
      item.quantity++;
    },
    decreaseQnt(item) {
      item.quantity--;

      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1);
      }
    },
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    subTotal() {
      var subCost = 0;
      for (var items in this.basket) {
        var individualItem = this.basket[items];
        subCost += individualItem.quantity * individualItem.price;
      }
      return subCost;
    },
    total() {
      var deliveryPrice = 10;
      var totalCost = this.subTotal;
      return totalCost + deliveryPrice;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin infobox_mixin(
  $border-radius,
  $border-color,
  $padding,
  $margin-bottom,
  $color
) {
  border: $border-radius solid $border-color;
  padding: $padding;
  margin-bottom: $margin-bottom;
  color: $color;
}

h1 {
  @include infobox_mixin(
    5px,
    map-get($colorz, white),
    10px,
    5px,
    map-get($colorz, white)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
}

// Starts here:
#info {
  background-color: rgb(255, 255, 255);
}

tr th {
  font-weight: bold;
}

#id_product_img{
  max-width:40px;
  max-height:40px;
  padding:0;
}

#td_name {
  font-weight: bold;
}
#product_description {
  font-style: italic;
  font-weight: 300;
  color: black;
  font-size: 13px;
}

.col h1 {
  text-align: right;
}

.col:last-child h1 {
  text-align: left;
}

#basket-checkout {
  font-size: 13px;
}

#basket-checkout {
  line-height: 2px;
}
</style>

