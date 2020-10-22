<template>
  <div id="displayProducts">
    <v-row class="pa-0 ma-0">
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
        md="12"
        sm="12"
        class="pa-0 ma-0"
        v-for="(product, i) in products"
        :key="i"
      >
        <div id="productDisplayBox">
          <img :src="product.productImage" alt="" height="120px" />
          <div id="ImageContentBox">
            <p>{{ product.productName }}</p>
            <p>{{ product.productPrice }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
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
    };
  },
};
</script>

<style lang="scss" scoped>
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
  color: white;
  background-color: #053135;
}

#productBackground {
  background-color: white;
}
</style>
