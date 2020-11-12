<template>
  <section id="displayProducts">
     <v-snackbar top v-model="favSnackbar" :multi-line="multiLine">
    {{ favAdded }}

    <template v-slot:action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="favSnackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
    <section class="product-header white">
      <div align="center" class="header-title nolabelgreen pb-3">
        <div v-scrollanimation>
            <!-- :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']" -->
          <h1
            class="font-weight-black white--text"
            >All products.</h1
          >
        </div>
      </div>
    </section>
    <v-row class="pa-0 ma-0">
      <v-col
        cols="6"
        lg="3"
        xs="3"
        class="pa-4 ma-0"
        v-for="item in products"
        :key="item.name"
        id="productDisplayBox"
      >
        <v-row class="pa-0 ma-0">
          <v-col
            class="pa-0 ma-0"
            cols="12"
            lg="12"
            xs="6"
            align-self="center"
            justify="center"
          >
            <router-link
              :to="{
                name: 'Product',
                params: {
                  id: item.name,
                  name: item.name,
                  size: item.size,
                  color: item.color,
                  price: item.price,
                  image: item.image,
                  description: item.description,
                },
              }"
            >
              <!-- Product Images -->
              <v-img
                id="productImageDisplay"
                contain
                v-bind:src="item.image"
              ></v-img>
            </router-link>
          </v-col>
          <v-col class="pa-0 ma-0" cols="12" lg="9" xs="6">
            <!-- Product Description -->
            <div id="productDescription" class="white--text">
              <b>{{ item.name }}</b>
              <p>Price: {{ item.price }} kr</p>
              <span v-for="(size, index) in item.size" :key="index">
                {{ size + ", " }}</span
              >
              <br />
              <b>Colors:</b>
              <span v-for="(color, i) in item.color" :key="'A' + i">
                {{ color + "" }}</span
              >
            </div>
          </v-col>
          <v-col class="pa-0 ma-0" cols="12" lg="3" xs="6">
            <!-- Add to Basket -->
            <v-btn @click="addToBasket(item)" depressed text small>
              <v-icon color="white">mdi-basket</v-icon>
            </v-btn>
            <!-- Add to Favorites -->
            <v-btn @click="addToFavourite(item)" depressed text small>
              <v-icon color="white">mdi-heart</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  components:{
  },
  data() {
    return {
      drawer: false,
      basketDump: [],
      favouriteDump: [],
      dialog: false,
      item: [],
      activeEditItem: null,
      multiLine: true,
      snackbar: false,
      favSnackbar: false,
      updatedText: "Product has been updated",
      size: [],
      color: [],
      type: [],
      category: [],
      season: [],
      favAdded: 'Product added to your favourites.'
    };
  },
  beforeCreate() {
    this.$store.dispatch("setProducts");
  },
  methods: {
    greet: function (event) {
      // `this` inside methods point to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      alert(event.target.tagName);
    },
    addToBasket(item) {
      this.basketDump.push({
        name: item.name,
        size: item.size,
        color: item.color,
        price: item.price,
        image: item.image,
        quantity: 1,
      });
      this.$store.commit("addBasketItems", this.basketDump);
      // console.log("what is this", this.basketDump);
      this.basketDump = [];
    },
    addToFavourite(item) {
      this.favSnackbar = true;
      this.favouriteDump.push({
        name: item.name,
        size: item.size,
        color: item.color,
        price: item.price,
        image: item.image,
        quantity: 1,
      });
      this.$store.commit("addFavouriteItems", this.favouriteDump);
      // console.log("what is this", this.favouriteDump);
      this.favouriteDump = [];
    },
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
/* Product Box Control Section */
#allProductsTitle {
  display: table;
  margin: auto;
}
#productImageDisplay {
  height: 60vh;
}
#productDisplayBox:hover {
  background-color: rgb(4, 31, 31);
}
#productDescription {
  padding-left: 2vw;
}
#productBackground {
  background-color: white;
}
/* ---------- Font Size ---------------- */
span {
  font-size: 12px;
}
b {
  font-size: 12px;
}
p {
  font-size: 12px;
}
/* -------------------------- */
@media only screen and (max-width: 600px) {
  #productImageDisplay {
    height: 35vh;
  }
}
</style>