<template>
  <!-- <section class="home ma-0 pa-0">
    <v-row no-gutters class="ma-0 pa-0">
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyosemite1.jpg?alt=media&token=c055750c-044c-4842-8f48-0989b79958eb"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="white--text mx-auto" justify="center">
              <v-col class="white--text text-center" cols="12" tag="h1">
                <v-img
                  :src="require('../assets/fox/fox-leaf.png')"
                  class="my-3 fox"
                  contain
                  height="auto"
                  max-height="200"
                />

                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  class="font-weight-light black--text"
                >Welcome to</span>
                <br />
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-3']"
                  class="font-weight-black black--text"
                >PWA Mandatory project</span>

                <br />
                <br />
                <v-btn color="white" @click="$vuetify.goTo('.pizza')" icon x-large>

                  <v-icon color="black">mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
    <v-row class="text-center ma-0 pa-0">
      <v-col cols="12">
        <v-img :src="require('../assets/fox/fox-fullback.png')" class="my-3 pizza" contain height="500" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to PWA elective project</h1>

        <p class="subheading font-weight-regular">Buy stuff thank you or not that's fine</p>
      </v-col>

 
    </v-row>
    <v-parallax :height="$vuetify.breakpoint.smAndDown ? 300 : 300" src="https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyosemite1.jpg?alt=media&token=c055750c-044c-4842-8f48-0989b79958eb"></v-parallax>
  </section> -->
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
import OptionsMenu from "../components/customer/OptionsMenu.vue";

export default {
  name: "Home",
  show: true,
    components: {
    DisplayProducts,
    OptionsMenu,
  },

  data() {
    return {
      importantLinks: [
        {
          text: "Documentation",
          href: "https://vuetifyjs.com",
        },
        {
          text: "Chat",
          href: "https://community.vuetifyjs.com",
        },
        {
          text: "Made with Vuetify",
          href: "https://madewithvuejs.com/vuetify",
        },
        {
          text: "Twitter",
          href: "https://twitter.com/vuetifyjs",
        },
        {
          text: "Articles",
          href: "https://medium.com/vuetify",
        },
      ],
    };
  },
  mounted() {
    this.show = true; // might need this.$nextTick
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>