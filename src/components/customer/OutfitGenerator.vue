<template>
  <section id="randomOutfit">
    <v-row class="pa-0 ma-0">
      <v-col
        cols="12"
        class="pa-0 ma-0"
        lg="12"
        md="12"
        sm="12"
        xs="12"
        align-self="center"
        justify="center"
      >
        <div id="allProductsTitle">
          <h1 class="white--text">Generate Custom Fit</h1>
          <!-- We can make this dynamic depending on the filter set on Categories-->
        </div>
      </v-col>
    </v-row>
    <hr />
    <br />
    <v-row class="pa-0 ma-0" id="productBackground">
      <v-col
        cols="12"
        lg="2"
        md="12"
        sm="12"
        xs="12"
        class="pa-5 ma-0"
        v-for="item in products"
        :key="item.name"
      >
        <div id="productDisplayBox">
          <v-img
            id="productImageDisplay"
            width="15vw"
            contain
            v-bind:src="item.image"
          ></v-img>
        </div>
        <v-btn>Random {{ item.name }}</v-btn>
      </v-col>
    </v-row>
    <br />
    <hr />

    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0" lg="12">
        <p>
          Customer is able to scroll left and right through different items
          sections or click on random generate to make a bombination
        </p>
      </v-col>
    </v-row>
    <hr />
    <v-row class="pa-0 ma-0" id="productBackground">
      <v-col
        lg="2"
        md="12"
        sm="12"
        xs="12"
        class="pa-0 ma-0"
        v-for="item in products"
        :key="item.name"
      >
        <div id="productDisplayBox">
          <v-img
            id="productImageDisplay"
            width="25vw"
            contain
            v-bind:src="item.image"
          ></v-img>
        </div>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0" lg="12">
        <v-btn> Generate Outfit </v-btn>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
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
    // Random Generate
    randomProducts() {
      return Math.floor(Math.random() * 10);
    },
  },
};
</script>

<style lang="scss" scoped>
#randomOutfit {
  padding-top: 2vh;
}
/* Product Box Control Section */
#allProductsTitle {
  display: table;
  margin: auto;
}
#productDisplayBox {
  color: #053135;
  height: 100%;
  display: flex;
  padding: 0.5vh;
  width: 100%;
}
#productDisplayBox:hover {
  transform: translateY(-10px);
  box-shadow: 5px 5px 5px #053135;
  color: white;
  background-color: #053135;
}
#productDescription {
  margin-left: 1vw;
}
#productBackground {
  background-color: white;
}
p {
  font-size: 15px;
}
/* Image Control Section */
#productImageDisplay:hover {
  transform: scale(1.1); /* 
  box-shadow: 5px 5px 5px #000000; */
}
</style>