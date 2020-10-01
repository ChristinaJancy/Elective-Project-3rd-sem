<template>
  <v-app id="App">
    <Search></Search>
    <v-content>
      <v-container fluid class="pa-0 ma-0">
        <router-view />
      </v-container>
    </v-content>

    <Navigation></Navigation>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Navigation from "@/components/Navigation";
import Search from '@/components/Search.vue';

export default {
  name: "App",

  components: {
    Navigation,
    Search
  },

  data: () => ({}),
  created() {
    this.$vuetify.theme.light = true;
  },
  computed: {
    ...mapState(["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    },
  },
};
</script>

<style lang="scss">
#App {
  color: white;
  background-color: #0a292c;
}
</style>
