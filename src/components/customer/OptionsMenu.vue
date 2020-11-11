<template>
  <div class="optionsMenu">
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0">
        <h4 class="white--text">Categories</h4>
      </v-col>
    </v-row>
    <hr />
    <br />
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0 white--text" >
        <p >Shop by Product</p>
        <br />
        <div
          id="categoryBox"
          v-for="(productCategorie, i) in productCategories"
          :key="i"
        >
          <v-checkbox
            v-model="productCategorie.catergory"
            :label="productCategorie.category"
            :value="productCategorie.category"
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
      <v-col class="pa-0 ma-0 white--text">
        <div class="sizeOptions">
          <p>Sizes</p>
          <div
            id="productSizes"
            v-for="(menuOption, index) in menuOptions"
            :key="index"
          >
            <v-checkbox
              v-model="menuOption.size"
              :label="menuOption.size"
              :value="menuOption.size"
              dark
              class="pa-0 ma-0"
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
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.optionsMenu {
  padding-left: 5vh;
  padding-top: 2vh;
}
#sizeButtons {
  margin-bottom: 2vh;
}
.sizeOptions {
  display: grid;
}
</style>