<template>
  <v-app id="app">
    <Navigation></Navigation>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from "@/components/Navigation";


export default {
  name: "App",

  components: {
    Navigation,
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
 background: #28575b;
}
</style>

