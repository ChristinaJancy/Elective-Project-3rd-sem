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

import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CSSRulePlugin, Draggable, EaselPlugin, MotionPathPlugin, PixiPlugin, TextPlugin, ScrollToPlugin, ScrollTrigger);

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

</style>

