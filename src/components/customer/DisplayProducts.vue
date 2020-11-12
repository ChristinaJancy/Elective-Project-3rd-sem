<template>
  <section id="displayProducts">
    <section class="product-header white">
      <div align="center" class="header-title nolabelgreen pb-3">
        <div v-scrollanimation>
          <h1 class="font-weight-black white--text">All Products</h1>
        </div>
      </div>
    </section>
    <section class="pt-4 pb-4" style="max-width:70%;">
    <v-row class="pa-0 ma-0" dense>
    
        <!-- Filter CLothing sizes -->
         <v-col align="center">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" v-bind="attrs" v-on="on">
              Clothing sizes
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list class="nolabelgreen pa-2">
            <div
              v-for="(size, index) in clothingSizes"
              :key="index"
            >
              <v-checkbox
                v-model="filteredSizes"
                :label="size"
                :value="size"
                dark
                class="pa-0 ma-0"
              >
              </v-checkbox>
            </div>
          </v-list>
        </v-menu>
      </v-col>

      <!-- Filter Seasons -->
      <v-col align="center">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn  text color="white" v-bind="attrs" v-on="on">
              Seasons
               <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list class="nolabelgreen pa-2">
            <div
              v-for="(season, index2) in clothingSeason"
              :key="index2"
            >
              <v-checkbox
                v-model="filteredSeason"
                :label="season"
                :value="season"
                dark
                class="pa-0 ma-0"
              >
              </v-checkbox>
            </div>
          </v-list>
        </v-menu>
      </v-col>
      <!-- Filter Colors -->
      <v-col align="center">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn  text color="white" 
             v-bind="attrs" v-on="on"> Colors 
              <v-icon>mdi-chevron-down</v-icon>
             </v-btn>
          </template>
          <v-list class="nolabelgreen pa-2">
            <div
              v-for="(color, index3) in clothingColor"
              :key="index3"
            >
              <v-checkbox
                v-model="filteredColor"
                :label="color"
                :value="color"
                dark
                class="pa-0 ma-0"
              >
              </v-checkbox>
            </div>
          </v-list>
        </v-menu>
      </v-col>
      <!--  Filter Category -->
      <v-col align="center">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn  text color="white"   v-bind="attrs" v-on="on">
              Categories
               <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list class="nolabelgreen pa-2">
            <div
              v-for="(category, index4) in clothingCategory"
              :key="index4"
            >
              <v-checkbox
                v-model="filteredCategory"
                :label="category"
                :value="category"
                dark
                class="pa-0 ma-0"
              >
              </v-checkbox>
            </div>
          </v-list>
        </v-menu>
      </v-col>
      <!-- Filter Type -->
      <v-col align="center">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn  text color="white" 
              v-bind="attrs" v-on="on"> Types 
               <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
          </template>
          <v-list class="nolabelgreen pa-2">
            <div
              v-for="(type, index5) in clothingType"
              :key="index5"
              
            >
              <v-checkbox
                v-model="filteredType"
                :label="type"
                :value="type"
                dark
                class="pa-0 ma-0"
              >
              </v-checkbox>
            </div>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    </section>
    <!-- -------------------------------------------------------------------------------------------------------- -->
    <!-- Product Display Area -->
    <v-row class="pa-0 ma-0">
      <v-col
        cols="6"
        lg="3"
        xs="3"
        class="pa-4 ma-0"
        v-for="item in filterType"
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
                {{ color + ", " }}
              </span>
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
        "Red",
      ],
      filteredColor: " ",
      // Category Filter
      clothingCategory: [" ", "Chill", "Outdoor", "Sporty"],
      filteredCategory: " ",
      // Type Filter
      clothingType: [
        " ",
        "Shoe",
        "Pants",
        "Short-sleeved",
        "Long-sleeved",
        "T-shirt",
      ],
      filteredType: " ",
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
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    // Filters
    filterSizes() {
      return this.products.filter((item) =>
        item.size.includes(this.filteredSizes)
      );
    },
    filterSeason() {
      return this.filterSizes.filter((item2) =>
        item2.season.includes(this.filteredSeason)
      );
    },
    filterColor() {
      return this.filterSeason.filter((item3) =>
        item3.color.includes(this.filteredColor)
      );
    },
    filterCategory() {
      return this.filterColor.filter((item4) =>
        item4.category.includes(this.filteredCategory)
      );
    },
    filterType() {
      return this.filterCategory.filter((item5) =>
        item5.type.includes(this.filteredType)
      );
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