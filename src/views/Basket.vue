<template>
  <section class="Basket">
    <v-img
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyellow-flower.jpg?alt=media&token=14d019d8-9ad6-4fdf-b19a-caa08252632b"
      cover
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="6" sm="12" xs="12">
            <h1 class="title text-center">Basket</h1>
            <div class="pa-2" id="info">
              <v-simple-table v-if="basket.length > 0">
                <thead>
                  <tr>
                    <th class="text-left">Product</th>
                    <th class="text-left">Info</th>
                    <th class="text-left">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in basket" :key="item.name">
                    <td id="id_product_img" style="text-align: center">
                      <v-img v-bind:src="item.image"></v-img>
                    </td>

                    <td>
                      <span id="td_name">{{ item.name }}</span>
                      <br />
                      {{ item.price }} Dkk <br /><br />
                      <small
                        >Size:<span
                          v-for="(size, index) in item.size"
                          :key="index"
                        >
                          {{ size + ", " }}</span
                        ></small
                      >
                      <br />
                      <small>
                        Color:<span
                          v-for="(color, index) in item.color"
                          :key="index"
                        >
                          {{ color }}</span
                        >
                      </small>
                      <br />
                    </td>

                    <td>
                      <v-icon small color="iconcolor" @click="increaseQnt(item)"
                        >mdi-plus</v-icon
                      >
                      {{ item.quantity }}
                      <v-icon small color="iconcolor" @click="decreaseQnt(item)"
                        >mdi-minus</v-icon
                      >
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
              <v-simple-table light v-else>
                <h4>The basket is empty</h4>
              </v-simple-table>
            </div>
          </v-col>

          <v-col cols="12" md="6" sm="12" xs="12">
            <h1 class="title text-center">Checkout</h1>
            <div class="pa-2" id="info">
              <v-row id="basket-checkout" class="mt-12" style="margin: 0">
                <v-col>
                  <p>Subtotal:</p>
                  <p>Delivery</p>
                  <p>
                    <strong>Total amount:</strong>
                  </p>
                </v-col>

                <v-col class="text-right">
                  <p>{{ subTotal }} DKK</p>
                  <p>10 DKK</p>
                  <p>
                    <strong>{{ total }} DKK</strong>
                  </p>
                </v-col>
              </v-row>
              <v-row style="margin: 0">
                <v-spacer></v-spacer>
                <v-btn dark class="orangebtn" @click="addCheckoutItem"
                  >Checkout</v-btn
                >
              </v-row>
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
      basketDump: [],
      dialog: false,
      item: [],
      activeEditItem: null,
      multiLine: true,
      snackbar: false,
      updatedText: "Product has been updated",
      size: [],
      image: null,
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
          color: item.color,
          type: item.type,
          category: item.category,
          image: item.image,
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
    basket() {
      //for vuex
      // return this.$store.state.basketItems //we want to contact state in our vuex store
      return this.$store.getters.getBasketItems;
    },
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

#id_product_img {
  max-width: 40px;
  max-height: 40px;
  padding: 0;
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

