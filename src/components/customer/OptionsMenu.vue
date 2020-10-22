<template>
  <div class="optionsMenu">
    <!-- Options Menu that displays on the left on Products Page -->
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0">
        <h4>Categories</h4>
      </v-col>
    </v-row>
    <hr />
    <br />
    <v-row class="pa-0 ma-0">
      <v-col lg="12" class="pa-0 ma-0">
        <p>Shop by Product</p>
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
            class="pa-0 ma-0"
          >
          </v-checkbox>
        </div>
      </v-col>
    </v-row>
    <hr />
    <br />
    <v-row class="pa-0 ma-0">
      <v-col lg="12" class="pa-0 ma-0">
        <p>Sizes</p>
        <br />
        <!-- Error: Weird issue going on here with the selection on checkbox, the product category seems to work fine -->
        <div id="categoryBox" v-for="(menuOption, i) in menuOptions" :key="i">
          <v-checkbox
            v-model="menuOption.size"
            :label="menuOption.size"
            value="white"
            dark
            class="pa-0 ma-0"
          >
          </v-checkbox>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.optionsMenu {
  padding-left: 5vh;
}

#categoryBox {
  color: white;
}
</style>
