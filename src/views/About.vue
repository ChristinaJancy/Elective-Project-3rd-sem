<template>
  <div>
    <section class="about-header">
      <!-- Updated the About Page -->
      <div align="center" class="header-title">
        <div v-scrollanimation>
          <span
            :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']"
            class="font-weight-black white--text"
            >About Us</span
          >
        </div>
      </div>
      <div class="header-box" align="center">
        <h1 v-scrollanimation>2 Developers, 1 Vision</h1>
      </div>
    </section>
    <section class="description">
      <div id="developerSection">
        <img
          v-scrollanimation
          src="https://scontent.faal1-1.fna.fbcdn.net/v/t1.0-9/120096874_10217602732286849_951694977245750817_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=C5yPCRwW1DgAX8frBJT&_nc_ht=scontent.faal1-1.fna&oh=73d520701795b9622ebb1e459cf90caa&oe=5FB708BC"
          alt
          height="120vh"
        />
        <p v-scrollanimation>Christina Jancy</p>
        <p v-scrollanimation>
          <a href="https://github.com/ChristinaJancy"> Github</a>
        </p>
      </div>
      <br />
      <br />
      <div id="developerSection">
        <img
          v-scrollanimation
          src="https://i.imgur.com/AFD34PF.jpg"
          alt
          height="120vh"
        />
        <p v-scrollanimation>Penda Svane</p>
        <p v-scrollanimation>
          <a href="https://github.com/TheSvaneMan"> Github</a>
        </p>
      </div>
      <div id="copyrightSection" v-scrollanimation>
        MMD 3rd Semester Project 2020 - BASW (Esbjerg, Denmark)
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
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
  background-image: url("../assets/home/home.jpg");
  background-position: center;
  background-size: cover;
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
  font-size: 1.5rem;
  padding: 10px 20px;
  transition-delay: 0.2s;
}
p {
  font-size: 1.2rem;
  padding: 10px 20px;
  transition-delay: 0.1s;
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
  font-size: 1vh;
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


<script scoped>
export default {
  name: "About",

  data() {
    return {
      logos: [],
    };
  },
  methods: {},

  mounted() {},
};
</script>

