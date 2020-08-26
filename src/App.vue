<template>
  <v-app>
    <Navigation></Navigation>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "App",

  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
    created () {
      this.$vuetify.theme.light = true
    },
};
</script>


<style lang="scss">
main{
  background-image: url("")
}
</style>

