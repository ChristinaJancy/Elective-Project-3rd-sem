<template>
  <section id="displayProducts">
    <v-row class="pa-0 ma-0">
      <v-col
        class="pa-0 ma-0"
        lg="12"
        md="12"
        sm="12"
        xs="12"
        align-self="center"
        justify="center"
      >
        <div id="allProductsTitle">
          <h4>All Products</h4>
          <!-- We can make this dynamic depending on the filter set on Categories-->
        </div>
      </v-col>
    </v-row>
    <hr />
    <br />
    <v-row class="pa-0 ma-0" id="productBackground">
      <v-col
        lg="4"
        md="12"
        sm="12"
        xs="12"
        class="pa-0 ma-0"
        v-for="item in products"
        :key="item.name"
      >
        <div id="productDisplayBox">
          <v-row class="pa-0 ma-0">
            <v-col lg="8" xs="6" class="pa-0 ma-0">
              <router-link
                v-bind:to="{
                  name: 'Product',
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
                <v-img
                  id="productImageDisplay"
                  width="15vw"
                  contain
                  v-bind:src="item.image"
                ></v-img>
              </router-link>
            </v-col>
            <v-col lg="4" xs="2" class="pa-0 ma-0">
              <br />
              <p>{{ item.name }}</p>
              <br />
              <br />
              <p>Price: {{ item.price }} kr</p>
              <span v-for="(size, index) in item.size" :key="index">
                {{ size + ", " }}</span
              ><br />
              <hr />
              <br />
              <b>Colors:</b>
              <span v-for="(color, i) in item.color" :key="'A' + i">
                {{ color + ", " }}</span
              >
              <br />
              <b>Types: </b>
              <span v-for="(type, i) in item.type" :key="'B' + i">{{
                type
              }}</span>
              <br />
              <b>Categories: </b>
              <span v-for="(category, i) in item.category" :key="'C' + i">{{
                category
              }}</span>
              <br />
              <b>Seasons: </b>
              <span v-for="(season, i) in item.season" :key="'D' + i">{{
                season + ", "
              }}</span>
              <br />
              <br />
              <hr />
              <br />
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
        </div>
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
  },
};
</script>

<style lang="scss" scoped>
#displayProducts {
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
  transform: translateY(-20px);
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