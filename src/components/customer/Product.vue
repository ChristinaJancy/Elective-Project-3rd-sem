<template>
  <section class="singleProduct">
    <v-snackbar top v-model="favSnackbar" :multi-line="multiLine">
      {{ favAdded }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="favSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!-- Product name -->
    <br /><br />
    <div align="center" class="header-title nolabelgreen pb-3">
      <div v-scrollanimation>
        <h1
          class="font-weight-black white--text"
          >{{ item.name }}</h1
        >
      </div>
    </div>
    <br /><br /><br />
    <!-- Product Images -->
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0" cols="12" lg="6" xs="6">
        <v-img
          id="imgMain"
          aspect-ratio="1"
          contain
          v-bind:src="item.image"
        ></v-img>
      </v-col>
      <!-- Product Description -->
      <v-col
        cols="12"
        class="ma-0 pa-4 white--text"
        lg="3"
        md="12"
        xs="12"
        align-self="center"
        justify="center"
      >
        <p>Name: {{ item.name }}</p>
        <p>Price: {{ item.price }}</p>
        <hr />
        <br />
        <p>Description: {{ item.description }}</p>
        <hr />
        <br />
        <!-- Add to Basket -->
        <v-btn
          id="productDisplayContainer"
          @click="addToBasket(item)"
          depressed
          text
          small
        >
          <v-icon color="white">mdi-basket</v-icon>
        </v-btn>
        <!-- Add to Favorites -->
        <v-btn
          id="productDisplayContainer"
          @click="addToFavourite(item)"
          depressed
          text
          small
        >
          <v-icon color="white">mdi-heart</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <br />
    <!-- Additional Products Display -->
    <v-row class="pa-0 ma-0">
      <br />
      <v-sheet class="mx-auto" elevation="8" max-width="100%">
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
          <v-slide-item
            v-for="item in products"
            :key="item.name"
            v-slot="{ active, toggle }"
          >
            <v-card
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="150"
            >
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <router-link
                    :to="{
                      name: 'product',
                      params: {
                        id: item.name,
                        name: item.name,
                        size: item.size,
                        color: item.color,
                        price: item.price,
                        image: item.image,
                      },
                    }"
                  >
                    <!-- Product Images **Add router method for @click="toggle" -->
                    <v-img
                      id="productImageDisplay"
                      contain
                      height="25vh"
                      v-bind:src="item.image"
                      @click="toggle"
                    ></v-img>
                  </router-link>
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    var item = this.$route.params;
    return {
      show: false,
      item: {
        id: item.name,
        name: item.name,
        size: item.size,
        color: item.color,
        price: item.price,
        image: item.image,
        description: item.description,
      },
      drawer: false,
      basketDump: [],
      favouriteDump: [],
      dialog: false,
      activeEditItem: null,
      multiLine: true,
      snackbar: false,
      updatedText: "Product has been updated",
      size: [],
      color: [],
      type: [],
      category: [],
      season: [],
      // slide show
      model: null,
      favAdded: 'Product added to your favourites.',
      favSnackbar: false,
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
/* ---------- Title Heading ---------------- */
/* ---------- Buttons ---------------- */
#productDisplayContainer {
  color: #ffffff;
  width: 75px;
  height: 75px;
  background-color: #04191b;
}
#productDisplayContainer:hover {
  transform: translateY(-5px);
  color: white;
  background-color: #0b5d64;
}
/* ---------- Image Control System ---------------- */
#imgMain {
  height: 80vh;
}
#imgSide {
  height: 40vh;
}
/* ---------- Font Size ---------------- */
span {
  font-size: 12px;
}
b {
  font-size: 15px;
}

/* -------------------------- */
@media only screen and (max-width: 600px) {
  #imgMain {
    height: 80vh;
  }
}
</style>