<template>
  <section id="outFitGenerator">
    <section class="product-header white">
      <div align="center" class="header-title nolabelgreen pb-3">
        <div v-scrollanimation>
          <h1>Out Fit Generator</h1>
          <small>Work-in-progress</small>
        </div>
      </div>
    </section>
    <hr />
    <!-- -------------------------------------------------------------------------------------------------------- -->
    <!-- Shirts -->
    <v-row class="pa-0 ma-0">
      <v-col cols="12" lg="3" class="pa-4 ma-0">
        <h2>Shirts</h2>
        <v-card color="transparent" flat width="500">
          <v-carousel
            hide-delimiters
            continuous
            height="200"
            show-arrows-on-hover
            touch
          >
            <v-carousel-item
              v-for="item in filterShirt"
              :key="item.name"
              v-bind:src="item.image"
              align="center"
              contain
              reverse-transition
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
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
    <hr />
    <!-- -------------------------------------------------------------------------------------------------------- -->
    <!-- Pants -->
    <v-row class="pa-0 ma-0">
      <v-col cols="12" lg="3" class="pa-4 ma-0">
        <h2>Pants</h2>
        <br />
        <v-card color="transparent" flat width="500">
          <v-carousel
            hide-delimiters
            continuous
            height="150"
            show-arrows-on-hover
            touch
          >
            <v-carousel-item
              v-for="item in filterPant"
              :key="item.name"
              v-bind:src="item.image"
              align="center"
              contain
              reverse-transition
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
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
    <hr />
    <!-- -------------------------------------------------------------------------------------------------------- -->
    <!-- Shoe -->
    <v-row class="pa-0 ma-0">
      <v-col cols="12" lg="3" class="pa-4 ma-0">
        <h2>Shoes</h2>
        <v-card color="transparent" flat width="500">
          <v-carousel
            hide-delimiters
            continuous
            height="150"
            show-arrows-on-hover
            touch
          >
            <v-carousel-item
              v-for="item in filterShoe"
              :key="item.name"
              v-bind:src="item.image"
              align="center"
              contain
              reverse-transition
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
            </v-carousel-item>
          </v-carousel>
        </v-card>
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
      // Size Filter
      clothingSizes: [" ", "XS", "S", "M", "L", "XL"],
      filteredSizes: " ",
      // Season Filter
      clothingSeason: [" ", "Summer", "Spring", "Winter", "Autumn"],
      filteredSeason: " ",
      // Color Filter
      clothingColor: [
        " ",
        "Brown",
        "White",
        "Black",
        "Blue",
        "Green",
        "Yellow",
        "Pink",
        "Purple",
        "Maroon",
      ],
      filteredColor: " ",
      // Category Filter
      clothingCatergory: [" ", "Chill", "Outdoor", "Sporty"],
      filteredCatergory: " ",
      // Type Filter
      clothingType: [
        " ",
        "Shoe",
        "Pants",
        "Sweater",
        "Short-sleeved",
        "Long-sleeved",
        "T-shirt",
      ],
      filteredType: " ",
      // Filtered Shirt
      filteredPants: "Pants",
      filteredShirts: "T-shirt",
      filteredShoes: "Shoe",
      color: [],
      type: [],
      category: [],
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

    // Test multiselection Methods
    testButton: function () {
      return this.test1, this.test2, this.test3;
    },
    testButton2: function () {
      return this.test2, this.test3, this.test1;
    },
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    // Filter Pants
    filterPant() {
      return this.products.filter((item) =>
        item.type.includes(this.filteredPants)
      );
    },
    // Filter Shirts
    filterShirt() {
      return this.products.filter((item2) =>
        item2.type.includes(this.filteredShirts)
      );
    },
    // Filter Shoes
    filterShoe() {
      return this.products.filter((item3) =>
        item3.type.includes(this.filteredShoes)
      );
    },
    filterColor() {
      return this.filterShoe.filter((item8) =>
        item8.color.includes(this.filteredColor)
      );
    },

    test1() {
      return console.log("test1 and ");
    },
    test2() {
      return console.log("test2 and ");
    },
    test3() {
      return console.log("test3 and");
    },
  },
};
</script>

<style lang="scss" scoped>
#outFitGenerator {
  color: white;
}
</style>