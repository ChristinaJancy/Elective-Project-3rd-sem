<template>
  <div class="about">
    <!-- Section about the creators of NoLabel, including our githubs. -->
    <section class="about-header white">
      <div align="center" class="header-title nolabelgreen pb-3">
        <div v-scrollanimation>
          <span
            class="h1 font-weight-black white--text"
            >Who we are.</span
          >
        </div>
      </div>
      <v-row class="pt-12 ma-0">
        <v-col cols="12" md="4" offset-md="1" sm="12">
          <div id="developerSection" align="right">
            <img
              v-scrollanimation
              src="https://scontent.faal1-1.fna.fbcdn.net/v/t1.0-9/120096874_10217602732286849_951694977245750817_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=C5yPCRwW1DgAX8frBJT&_nc_ht=scontent.faal1-1.fna&oh=73d520701795b9622ebb1e459cf90caa&oe=5FB708BC"
              alt
              height="160vh"
            />
            <p v-scrollanimation><b>Christina Jancy</b></p>
            <p v-scrollanimation style="margin-top: -30px">
              <a href="https://github.com/ChristinaJancy" target="_blank"><b>Github</b></a>
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <div id="developerSection">
            <img
              v-scrollanimation
              src="https://i.imgur.com/AFD34PF.jpg"
              alt
              height="160vh"
            />
            <p v-scrollanimation><b>Penda Svane</b></p>
            <p v-scrollanimation style="margin-top: -30px">
              <a href="https://github.com/TheSvaneMan" target="_blank"><b> Github</b></a>
            </p>
          </div>
        </v-col>
      </v-row>

      <div id="copyrightSection" v-scrollanimation style="margin-bottom: px">
        MMD 3rd Semester Project 2020 - BASW (Esbjerg, Denmark)
      </div>
    </section>
    <!--Short section about what we believe in as a company - some cheasy text incoming-->
    <section class="about-header white pb-5">
      <div align="center" class="header-title nolabelgreen pb-3">
        <div v-scrollanimation>
          <span
            class="h1 font-weight-black white--text"
            >What we believe in.</span
          >
        </div>
      </div>
      <div class="pt-5" align="center">
        <v-row class="ma-0">
          <v-col cols="12" sm="8" md="6" offset-md="3">
            <div align="left">
              <p class="black--text">
             {{ believeText}}
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    
    <section class="img">
      <v-img v-scrollanimation
        id="pc-version"
        width="800"
        src="https://content.asos-media.com/-/media/hubs/about-us/who-we-are/peak/who_we_are_peak_in_page_who_we_are.jpg"
      ></v-img>
      <v-img v-scrollanimation
        id="mobile-version"
        width="500"
        src="https://content.asos-media.com/-/media/hubs/about-us/who-we-are/peak/who_we_are_peak_02.jpg"
      ></v-img>
    </section>
      <v-row class="about-choice">
        <v-col cols="12" sm="8" md="6" offset-md="3" v-scrollanimation>
          <div class="nolabelgreen pa-5" style="margin-top:-40px;">
          <h2 align="center" class="nolabelgreen white--text">Choice for all</h2>
          <div align="left">
            <p class="white--text">
             {{choiceText}}
            </p>
          </div>
          </div>
        </v-col>
      </v-row>
      <section class="img">
      <v-img v-scrollanimation
        id="pc-version"
        class="images"
        width="800"
        src="https://content.asos-media.com/-/media/hubs/about-us/who-we-are/who-we-are-2.jpg"
      ></v-img>
      <v-img v-scrollanimation
        class="images"
        id="mobile-version"
        width="500"
        src="https://content.asos-media.com/-/media/hubs/about-us/who-we-are/mobile/who-we-are-mobile-2.jpg"
      ></v-img>
      </section>
      <v-row class="about-planet">
        <v-col cols="12" sm="8" md="6" offset-md="3" v-scrollanimation>
         <div class="nolabelgreen pa-5" style="margin-top:-40px;">
          <h2 align="center" class="nolabelgreen white--text">Planet.</h2>
          <div align="left">
            <p class="white--text">
            {{planetText}} </p>
          </div>
        </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script scoped>
export default {
  name: "About",
  data() {
    return {
      logos: [],
      believeText: "We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.",
      choiceText: " The clothes YOU wear should make YOU feel great, should fill YOU with confidence and fit YOUR body as well as fitting YOUR ideal sense of self.",
      planetText: "We believe great fashion shouldn’t come with a compromise, be that style, price or impact. We have set ourselves challenging targets to reduce the impact of our product, business and logistics, and we’re always looking for new ways to drive sustainability forward.",    
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.about-choice {
  .before-enter {
      opacity: 0;
      transform: translateY(100px);
      transition: all 1s cubic-bezier(0.41, 0.01, 0.57, 1.61);
    }
    .enter {
      opacity: 1;
      transform: translate(0px);
    }
}

.about-planet {
  .before-enter {
      opacity: 0;
      transform: translateY(100px);
      transition: all 1s cubic-bezier(0.41, 0.01, 0.57, 1.61);
    }
    .enter {
      opacity: 1;
      transform: translate(0px);
    }
}

// Switching between pc/mobile version of images
#mobile-version {
  display: none;
}

#pc-version {
  display: flex;
}

@media screen and (max-width: 750px) {
  #mobile-version {
    display: flex;
  }
  #pc-version {
    display: none;
  }
}
//

.header-title {
  padding-top: 70px;
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
  background-color: #28575b;
  // background-image: url("https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyellow-flower.jpg?alt=media&token=14d019d8-9ad6-4fdf-b19a-caa08252632b");
  // background-position: center;
  // background-size: cover;
  overflow: hidden;
}
.header-box {
  position: absolute;
  width: 100%;
  height: 300px;
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
h1 {
  transition-delay: 0.2s;
}
p {
  transition-delay: 0.1s;
  letter-spacing: 0.6px;
  line-height: 24px;
}
//text:
* {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 auto;
}
// Description Zone -------------------------------- //
.description {
  padding-top: 12vh;
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
  h1 {
    font-size: 1.5rem;
    padding: 10px 20px;
  }
  p {
    font-size: 1.2rem;
    padding: 10px 20px;
  }
}
#developerSection {
  display: grid;
  justify-content: center;
  align-content: center;
}
// Copyright Tag -------------------------------- //
#copyrightSection {
  font-size: 2vh;
  display: grid;
  justify-content: center;
  align-content: center;
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


