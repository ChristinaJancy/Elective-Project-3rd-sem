<template>
  <section class="about">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyellow-flower.jpg?alt=media&token=14d019d8-9ad6-4fdf-b19a-caa08252632b"
      cover
    >
        <v-container>
          <v-row>
            <v-col offset-md="2" md="8" sm="12" xs="12">
              <h1>All Items</h1>
              <div class="pa-2" id="info">
                <v-simple-table id="product-table" light>
                  <thead>
                    <v-btn small text to="/addnew">
                      <v-icon color="iconcolor">mdi-plus</v-icon>
                      <span style="padding:0 10px;">Add Item</span>
                    </v-btn>
                    <tr>
                      <th class="text-left">Product</th>
                      <th class="text-left">Info</th>
                      <th class="text-left">Price</th>
                      <th class="text-left">Edit</th>
                      <th class="text-left">Remove</th>
                      <th class="text-left">Add to basket</th>
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
                         <span id="product_description">{{item.description}}</span>
                         <br>
                         <br>
                      <b>Sizes:</b> <span v-for="(size, index) in item.size" :key="index"> {{ size + ', ' }}</span>
                        <br>
                      <b>Colors:</b> <span v-for="(color, index) in item.color" :key="index"> {{ color }}</span>
                        <br>
                      <b>Types:</b> <span v-for="(type, index) in item.type" :key="index">{{ type + ', '}}</span>
                        <br>
                        <b>Categories:</b> <span v-for="(category, index) in item.category" :key="index">{{ category + ', ' }}</span>
                      <br>
                      <b>Seasons:</b> <span v-for="(season, index) in item.season" :key="index">{{ season + ', '}}</span>
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
                      <td>
                      <v-btn @click="addToBasket(item)" depressed text small>
                          <v-icon color="iconcolor">mdi-plus</v-icon>
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
                <v-row class="pa-2">
                  <p class="mb-2">Sizes:</p>
                  <v-checkbox v-model="item.size" label="XS" value="XS"></v-checkbox>
                  <v-checkbox v-model="item.size" label="S" value="S"></v-checkbox>
                  <v-checkbox v-model="item.size" label="M" value="M"></v-checkbox>
                  <v-checkbox v-model="item.size" label="L" value="L"></v-checkbox>
                  <v-checkbox v-model="item.size" label="XL" value="XL"></v-checkbox>
                  <v-checkbox v-model="item.size" label="37" value="37"></v-checkbox>
                  <v-checkbox v-model="item.size" label="38" value="38"></v-checkbox>
                  <v-checkbox v-model="item.size" label="39" value="39"></v-checkbox>
                  <v-checkbox v-model="item.size" label="40" value="40"></v-checkbox>
                  <v-checkbox v-model="item.size" label="41" value="41"></v-checkbox>
                  <v-checkbox v-model="item.size" label="42" value="42"></v-checkbox>
                  <v-checkbox v-model="item.size" label="43" value="43"></v-checkbox>
                  <v-checkbox v-model="item.size" label="44" value="44"></v-checkbox>
                  <v-checkbox v-model="item.size" label="45" value="45"></v-checkbox>
                </v-row>
                <v-row class="pa-2">
                  <p class="mb-2">Colors:</p>
                  <v-checkbox v-model="item.color" label="Blue" value="Blue"></v-checkbox>
                  <v-checkbox v-model="item.color" label="Black" value="Black"></v-checkbox>
                  <v-checkbox v-model="item.color" label="White" value="White"></v-checkbox>
                  <v-checkbox v-model="item.color" label="Brown" value="Brown"></v-checkbox>
                  <v-checkbox v-model="item.color" label="Red" value="Red"></v-checkbox>
                  <v-checkbox v-model="item.color" label="Green" value="Green"></v-checkbox>
                  <v-checkbox v-model="item.color" label="Yellow" value="Yellow"></v-checkbox>
                </v-row>
                <v-row class="pa-2">
                  <p class="mb-2">Type:</p>
                  <v-checkbox v-model="item.type" label="Shoe" value="Shoe"></v-checkbox>
                  <v-checkbox v-model="item.type" label="Short-sleeved" value="Short-sleeved"></v-checkbox>
                  <v-checkbox v-model="item.type" label="Pants" value="Pants"></v-checkbox>
                  <v-checkbox v-model="item.type" label="Long-sleeved" value="Long-sleeved"></v-checkbox>
                </v-row>
                 <v-row class="pa-2">
                  <p class="mb-2">Categories:</p>
                  <v-checkbox v-model="item.category" label="Sporty" value="Sporty"></v-checkbox>
                  <v-checkbox v-model="item.category" label="Chill" value="Chill"></v-checkbox>
                  <v-checkbox v-model="item.category" label="Outdoor" value="Outdoor"></v-checkbox>
                </v-row>
                 <v-row class="pa-2">
                  <p class="mb-2">Seasons:</p>
                  <v-checkbox v-model="item.season" label="Summer" value="Summer"></v-checkbox>
                  <v-checkbox v-model="item.season" label="Winter" value="Winter"></v-checkbox>
                  <v-checkbox v-model="item.season" label="Autumn" value="Autumn"></v-checkbox>
                  <v-checkbox v-model="item.season" label="Spring" value="Spring"></v-checkbox>
                </v-row>


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
      basketDump: [],
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
    addCheckoutItem(){
    this.$store.dispatch('setCheckoutItem')
    },
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
    // addToBasket(item) {
    //   if (this.basket.find((itemInArray) => item.name === itemInArray.name)) {
    //     item = this.basket.find(
    //       (itemInArray) => item.name === itemInArray.name
    //     );
    //     this.increaseQnt(item);
    //   } else {
    //     this.basket.push({
    //       name: item.name,
    //       size: item.size,
    //       type: item.type,
    //       category: item.category,
    //       season: item.season,
    //       price: item.price,
    //       quantity: 1,
    //     });
    //   }
    // },
        addToBasket(item) {
       this.basketDump.push({
          name: item.name,
          size: item.size,
          color: item.color,
          price: item.price,
         image: this.image,
          quantity: 1,
        });
        this.$store.commit('addBasketItems', this.basketDump);
        // console.log("what is this", this.basketDump);
        this.basketDump = [];
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

