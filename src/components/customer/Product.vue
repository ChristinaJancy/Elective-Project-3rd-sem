<template>
  <section class="singleProduct">
    <v-row class="pa-0 ma-0"
      ><v-col class="d-flex justify-center mb-6"
        ><h1>{{ item.name }}</h1>
      </v-col>
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-spacer></v-spacer>
      <v-col class="pa-0 ma-0" lg="4">
        <v-img
          id="imgHover"
          height="80vh"
          aspect-ratio="1"
          contain
          v-bind:src="item.image"
        ></v-img>
      </v-col>
      <v-col class="pa-0 ma-0" lg="3">
        <v-img
          id="imgHover"
          height="40vh"
          aspect-ratio="1"
          contain
          v-bind:src="item.image"
        ></v-img>
        <v-img
          id="imgHover"
          height="40vh"
          aspect-ratio="1"
          contain
          v-bind:src="item.image"
        ></v-img>
      </v-col>
      <v-col class="ma-0 pa-0" lg="3" xs="12" md="12">
        <div id="productDisplayContainer">
          <div id="productContentBox">
            <p>{{ item.name }}</p>
            <p>{{ item.price }}</p>
            <hr />
            <p>A description can come here</p>
          </div>
        </div>

        <v-btn
          id="productDisplayContainer"
          @click="addToBasket(item)"
          depressed
          text
          small
        >
          <v-icon color="white">mdi-basket</v-icon>
          <p>Add to Cart</p>
        </v-btn>

        <div id="otherProductsContainer">
          <h4>Other Products</h4>
          <p>Slide Show of other products</p>
          <p>Carousel</p>
        </div>
      </v-col>
      <v-spacer></v-spacer>
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
    };
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
#productDisplayContainer {
  color: #ffffff;
  align-items: center;
  justify-content: center;
  height: 20vh;
  display: flex;
  padding: 0.5vh;
  width: 100%;
}
#productDisplayContainer:hover {
  transform: translateY(-20px);
  color: white;
  background-color: #0b5d64;
}
#imgHover:hover {
  transform: translateX(-50px);
}
</style>