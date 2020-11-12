<template>
  <v-app id="app"> 
    <!-- <PageLoader /> -->
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
// import PageLoader from '@/components/PageLoader.vue'


export default {
  name: "App",

  components: {
    Navigation,
    MobileNavigation,
    // PageLoader
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

// fonts
h1,
.h1,
h2,
h3,
h4,
h5
  {
    font-family: 'Amatic SC', cursive;
    margin: 0 0 0.5rem;
}

p, .p {
  margin: 0 0 0.5rem;
   padding: 5px 10px;
  font-family: 'Ubuntu', sans-serif;
}

h1, .h1 {
	font-size: 4rem;
}

h2 {
	font-size: 2rem;
}

h3 {
	font-size: 1.6rem;
}

h4 {
	font-size: 1.4rem;
}

h5 {
	font-size: 1.2rem;
}

p {
	line-height: 1.5;
}


* {
	font-family: 'Open Sans', sans-serif;
	box-sizing: border-box;
	transition: 0.15s;

	&:focus {
		outline: none;
	}
}


</style>

