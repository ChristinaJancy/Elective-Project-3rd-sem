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
        <div
          id="categoryBox"
          v-for="(productCategorie, i) in productCategories"
          :key="i"
        >
          <v-checkbox
            v-model="productCategorie.catergory"
            :label="productCategorie.category"
            value="white"
            dark
          >
          </v-checkbox>
        </div>
      </v-col>
    </v-row>
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0">
        <div class="sizeOptions">
          <h2>Sizes</h2>
          <br />
          <div
            id="productSizes"
            v-for="(menuOption, i) in menuOptions"
            :key="i"
          >
            <v-checkbox
              v-model="menuOption.size"
              :label="menuOption.size"
              value="white"
              dark
            >
            </v-checkbox>
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
      productCategories: [
        { category: "Shirt" },
        { category: "Pants" },
        { category: "Shoes" },
        { category: "Hats" },
      ],
      menuOptions: [
        { size: "XS" },
        { size: "S" },
        { size: "M" },
        { size: "L" },
        { size: "XL" },
        { size: "XXL" },
      ],
      ex4: [
        "red",
        "indigo",
        "orange",
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "red darken-3",
        "indigo darken-3",
        "orange darken-3",
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
