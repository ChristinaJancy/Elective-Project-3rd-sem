<template>
  <section id="displayProducts">
    <v-row class="pa-0 ma-0">
<<<<<<< Updated upstream
      <v-col class="pa-0 ma-0" lg="3" md="12" sm="12">
        <p>All Products</p>
      </v-col>
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-col
        v-for="(productCategory, i) in productCategories"
        :key="i"
        class="pa-0 ma-0"
        lg="3"
        md="12"
        sm="12"
      >
        <p>{{ productCategory.category }}</p>
      </v-col>
    </v-row>
    <v-row class="pa-0 ma-0" id="productBackground">
      <v-col
        lg="3"
=======
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
>>>>>>> Stashed changes
        md="12"
        sm="12"
        xs="12"
        class="pa-0 ma-0"
        v-for="item in products"
        :key="item.name"
      >
        <div id="productDisplayBox">
<<<<<<< Updated upstream
          <img :src="product.productImage" alt="" height="120px" />
          <div id="ImageContentBox">
            <p>{{ product.productName }}</p>
            <p>{{ product.productPrice }}</p>
          </div>
=======
          <v-row class="pa-0 ma-0">
            <v-col lg="8" xs="6" class="pa-0 ma-0">
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      productCategories: [
        { category: "Shirt" },
        { category: "Pants" },
        { category: "Shoes" },
        { category: "Hats" },
      ],
      products: [
        {
          productName: "Long Sleeve Shirt 001",
          productImage:
            "https://cdn09.nnnow.com/web-images/medium/styles/N6I2NVHN9JT/1563454009563/1.jpg",
          productPrice: "42,000",
          productColor: "red",
        },
        {
          productName: "Baige Baggy Pants 001",
          productImage:
            "https://ae01.alicdn.com/kf/HTB1gw_zLXXXXXXSXFXXq6xXFXXXj/Fashion-Trousers-For-Women-Sashes-Plus-Size-Elegant-Women-s-Pants-Trousers-Mid-Wasit-Wide-Leg.jpg",
          productPrice: "22,000",
          productColor: "baige",
        },
        {
          productName: "Running Pants 004",
          productImage:
            "https://www.footasylum.com/images/products/medium/4025846.jpg",
          productPrice: "67,000",
          productColor: "black",
        },
        {
          productName: "Chillout Outfit",
          productImage:
            "https://www.scotch-soda.com/dw/image/v2/AANA_PRD/on/demandware.static/-/Sites-scotch-master-catalog-FW20/default/dw477ce65a/images/xlarge-0D0C8366-0AEE-4D9A-BC1DFD3B58657EBC.png?sw=500&strip=false&bgcolor=EDEEE5",
          productPrice: "102,000",
          productColor: "Baige",
        },
        {
          productName: "Wood Shirt 006",
          productImage:
            "https://images.allsaints.com/products/600/MS001J/6135/MS001J-6135-1.jpg",
          productPrice: "12,000",
          productColor: "Tree Green",
        },
        {
          productName: "Free Spirit Shirt 007",
          productImage:
            "https://s1.thcdn.com//productimg/1600/1600/11859687-5154726106687607.jpg",
          productPrice: "93,000",
          productColor: "black",
        },
        {
          productName: "Work From Home 1023",
          productImage:
            "https://www.banana-moon-clothing.co.uk/images/h551-d08e0b7b4b98e795ba7a86a9ca823a8c.jpg?width=356&height=398",
          productPrice: "75,000",
          productColor: "white",
        },
        {
          productName: "Long Sleeve Shirt 001",
          productImage:
            "https://cdn09.nnnow.com/web-images/medium/styles/N6I2NVHN9JT/1563454009563/1.jpg",
          productPrice: "42,000",
          productColor: "red",
        },
        {
          productName: "Baige Baggy Pants 001",
          productImage:
            "https://ae01.alicdn.com/kf/HTB1gw_zLXXXXXXSXFXXq6xXFXXXj/Fashion-Trousers-For-Women-Sashes-Plus-Size-Elegant-Women-s-Pants-Trousers-Mid-Wasit-Wide-Leg.jpg",
          productPrice: "22,000",
          productColor: "baige",
        },
        {
          productName: "Running Pants 004",
          productImage:
            "https://www.footasylum.com/images/products/medium/4025846.jpg",
          productPrice: "67,000",
          productColor: "black",
        },
        {
          productName: "Chillout Outfit",
          productImage:
            "https://www.scotch-soda.com/dw/image/v2/AANA_PRD/on/demandware.static/-/Sites-scotch-master-catalog-FW20/default/dw477ce65a/images/xlarge-0D0C8366-0AEE-4D9A-BC1DFD3B58657EBC.png?sw=500&strip=false&bgcolor=EDEEE5",
          productPrice: "102,000",
          productColor: "Baige",
        },
        {
          productName: "Wood Shirt 006",
          productImage:
            "https://images.allsaints.com/products/600/MS001J/6135/MS001J-6135-1.jpg",
          productPrice: "12,000",
          productColor: "Tree Green",
        },
        {
          productName: "Free Spirit Shirt 007",
          productImage:
            "https://s1.thcdn.com//productimg/1600/1600/11859687-5154726106687607.jpg",
          productPrice: "93,000",
          productColor: "black",
        },
        {
          productName: "Work From Home 1023",
          productImage:
            "https://www.banana-moon-clothing.co.uk/images/h551-d08e0b7b4b98e795ba7a86a9ca823a8c.jpg?width=356&height=398",
          productPrice: "75,000",
          productColor: "white",
        },
      ],
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
#productDisplayBox {
  color: #053135;
  height: 100%;
  display: grid;
  justify-content: center;
  padding: 0.5vh;
  width: 100%;
  margin-bottom: 20px;
}

#productDisplayBox:hover {
=======
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
>>>>>>> Stashed changes
  color: white;
  background-color: #053135;
}

<<<<<<< Updated upstream
#productBackground {
  background-color: white;
=======
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
>>>>>>> Stashed changes
}
</style>
