<template>
  <section class="about">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="../assets/home/home.jpg"
      cover
    >
        <v-container>
          <v-row>
            <v-col offset-md="3" md="6">
              <h1>All Items</h1>
              <div class="pa-2" id="info">
                <v-simple-table id="product-table" light>
                  <thead>
                    <v-btn small text to="/addnew">
                      <v-icon color="iconcolor">mdi-plus</v-icon>
                      <span style="padding:0 10px;">Add Item</span>
                    </v-btn>
                    <tr>
                      <th></th>
                      <th class="text-left" style="width:70%;">Name</th>
                      <th class="text-left" style="width=100px">Price</th>
                      <th class="text-left" style="width=100px">Edit</th>
                      <th class="text-left" style="width=100px">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in products" :key="item.name">
                     <td id="id_product_img">
                        <v-img v-bind:src="item.image"></v-img>
                      </td>
                      <td>
                        <span id="td_name">{{item.name}}</span>
                        <br />
                        <span id="product_description">{{item.description}}</span>
                      </td>
                      <td>{{ item.price }}</td>

                      <td>
                        <v-btn
                          depressed
                          text
                          small
                          @click.stop="dialog = true"
                          @click="editItem(item)"
                        >
                          <v-icon color="iconcolor">mdi-pen</v-icon>
                        </v-btn>
                      </td>
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
          <v-row>
            <v-dialog v-model="dialog" max-width="400">
              <v-card>
                <v-row class="ma-0 pa-0">
                  <v-col cols="12">
                    <h1 class="black--text" style="text-align:center;">Edit item</h1>

                    <div class="pa-2" id="info">
                      <v-text-field label="Name" v-model="item.name" style="width=70%;"></v-text-field>
                      <v-text-field label="Description" v-model="item.description" style="width=100%;"></v-text-field>
                      <v-text-field label="price" v-model="item.price" style="width=100%;"></v-text-field>

                      <v-row class="ma-0 pa-0">
                        <v-col cols="6" align="left">
                          <v-btn
                            color="success"
                            class="black--text"
                            depressed
                            v-on:click="updateItem()"
                            @click.stop="dialog = false"
                          >Edit Item</v-btn>
                        </v-col>

                        <v-col cols="6" align="right">
                          <v-btn
                            color="error"
                            class="black--text"
                            @click.stop="dialog = false"
                            depressed
                          >Close</v-btn>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-dialog>
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

