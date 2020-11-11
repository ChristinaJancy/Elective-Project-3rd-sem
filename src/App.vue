<template>
  <v-app id="app">
    <Navigation></Navigation>

    <v-main>
      <router-view />
    </v-main>
      <MobileNavigation></MobileNavigation>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";


export default {
  name: "App",

  components: {
    Navigation,
    MobileNavigation
  },

  data: () => ({

  }),
    created () {
      this.$vuetify.theme.light = true
    },
     computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  }
};
</script>


<style lang="scss">
#app{
 background: #102021;
}
</style>

