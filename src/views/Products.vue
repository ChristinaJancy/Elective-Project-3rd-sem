<template>
  <div class="ProductsPage">
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0 d-none d-lg-block" lg="3" xs="0">
        <div class="optionsMenuBox">
          <OptionsMenu></OptionsMenu>
        </div>
      </v-col>
      <v-col class="pa-0 ma-0" lg="9" xs="12">
        <div class="displayProductsBox">
          <DisplayProducts></DisplayProducts>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DisplayProducts from "../components/customer/DisplayProducts.vue";
import OptionsMenu from "../components/customer/OptionsMenu.vue";

export default {
  components: {
    DisplayProducts,
    OptionsMenu,
  },
};
</script>

<style lang="scss" scoped>
</style>