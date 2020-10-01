<template>
  <div id="homePage">
    <v-row class="pa-0 ma-0 ">
      <v-col class="pa-0 ma-0 d-none d-lg-block" cols="3">
        <div class="optionsMenuBox">
          <OptionsMenu></OptionsMenu>
        </div>
      </v-col>
      <v-col class="pa-0 ma-0" cols="9">
        <div class="displayProductsBox">
          <DisplayProducts></DisplayProducts>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DisplayProducts from "../components/customer/DisplayProducts.vue";
import OptionsMenu from "@/components/customer/OptionsMenu.vue";
export default {
  name: "Home",
  show: true,
  components: {
    DisplayProducts,
    OptionsMenu,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
