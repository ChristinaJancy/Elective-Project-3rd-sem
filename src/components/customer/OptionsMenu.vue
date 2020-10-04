<template>
  <div class="optionsMenu">
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0">
        <h3>All Products</h3>
        <br />
        <h1>Categories</h1>
      </v-col>
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0">
        <h2>Shop by Product</h2>
        <br />
        <p v-for="(productCategorie, i) in productCategories" :key="i">
          <span>{{ productCategorie.category }}</span>
        </p>
      </v-col>
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0">
        <div class="sizeOptions">
          <h2>Sizes</h2>
          <br />
          <v-btn id="sizeButtons" small tile width="50px" v-for="(menuOption, i) in menuOptions" :key="i">
            <span>{{ menuOption.name }}</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productCategories: [
        { category: "Shirt" },
        { category: "Pants" },
        { category: "Shoes" },
        { category: "Hats" },
      ],
      menuOptions: [
        { name: "XS" },
        { name: "S" },
        { name: "M" },
        { name: "L" },
        { name: "XL" },
        { name: "XXL" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.optionsMenu {
  padding-left: 5vh;
  padding-top: 5vh;
}

#sizeButtons {
  margin-bottom: 2vh;
}

.sizeOptions {
  display: grid;
}
</style>
