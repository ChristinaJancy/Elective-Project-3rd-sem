<template>
  <section class="ProductsPage pt-12">
    <v-row class="pa-0 ma-0">
      <v-col class="pa-0 ma-0" lg="12" xs="12">
        <DisplayProducts></DisplayProducts>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import DisplayProducts from "../components/customer/DisplayProducts.vue";
export default {
  components: {
    DisplayProducts,
  },
};
</script>

<style lang="scss" scoped>
// Products Page Margin Bot
/* -------------------------- */
@media only screen and (max-width: 600px) {
  .ProductsPage {
    margin-bottom: 2vh;
  }
}
</style>