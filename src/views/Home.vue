<template>
  <div>
    <section class="about-header">
      <div align="center" class="header-title">
        <div v-scrollanimation>
          <v-img width="500" src="../assets/nolabel-logo-white.png"></v-img>
        </div>
      </div>
      <div class="header-box" align="center">
        <h2 class="pb-4">We don't believe in labels.</h2>

        <v-btn
          color="white"
          outlined
          icon
          rounded
          @click="$vuetify.goTo('.homesection1')"
        >
          <v-icon color="icons">mdi-chevron-double-down</v-icon>
        </v-btn>
      </div>
    </section>
    <section class="homesection1">
      <div align="center" class="nolabelgreen pt-10 pb-16">
        <div>
          <span
            class="h1 font-weight-black white--text"
            >New collection!</span>
        </div>
      </div>
      <v-row>
        <v-col cols="12" md="6" xs="12" style="background-color: #e8e7e4">
          <v-card
            class="pt-15 pb-5"
            elevation="24"
            max-width="444"
            align="center"
            color="transparent"
          >
            <v-carousel
              hide-delimiters
              cycle
              continuous
              height="500"
              show-arrows-on-hover
              touch
            >
            
              <v-carousel-item
                v-for="item in products"
                :key="item.name"
                v-bind:src="item.image"
                align="center"
                contain
                reverse-transition
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" xs="12" style="background-color: #e8e7e4"> 
          <h2 align="center" class="black--text">You define you.</h2>
          <p align="center" class="black--text my-12">We exist to give you the confidence to be whoever you want to be.</p>
        </v-col>
      </v-row>
      <br />
      <br /><br /><br /><br />
    </section>
  </div>
</template>


<script scoped>
export default {
  name: "About",

  data() {
    return {
      logos: [],
      model: null,
    };
  },
  methods: {},
  beforeCreate() {
    this.$store.dispatch("setProducts");
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>



<style lang="scss" scoped>

//text:
* {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 auto;
}

.description {
  position: relative;
  width: 100%;
  min-height: 100vh;
  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
  div {
    font-size: 1.2rem;
  }
}
.header-title {
  padding-top: 200px;
  .before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s cubic-bezier(0.41, 0.01, 0.57, 1.61);
  }
  .enter {
    opacity: 1;
    transform: translate(0px);
  }
}

.about-header {
  position: relative;
  width: 100%;
  min-height: 100vh;
  // background-image: url("https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyosemite1.jpg?alt=media&token=c055750c-044c-4842-8f48-0989b79958eb");
  background-image: url("https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyellow-flower.jpg?alt=media&token=14d019d8-9ad6-4fdf-b19a-caa08252632b");
  background-position: center;
  background-size: cover;
  overflow: hidden;
}

.header-box {
  position: absolute;
  width: 100%;
  height: 350px;
  padding: 20px;
  bottom: 0;
  color: #efefef;
  background: linear-gradient(
    to bottom,
    rgba($color: #000, $alpha: 0),
    rgba($color: #000, $alpha: 0.7),
    rgba($color: #000, $alpha: 0.9)
  );
  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
}

// images:
.images {
  .before-enter {
    opacity: 0;
    transform: scale(0.5) rotateZ(-25deg);
    transition: all 1s ease-out;
  }
  .enter {
    opacity: 1;
    transform: scale(1) rotateZ(0deg);
  }
}

.images {
  position: relative;
  width: 100%;

  img {
    float: left;
    width: 50%;
    height: auto;
  }
}
</style>

