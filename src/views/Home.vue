<template>
  <div>
    <section class="about-header">
      <div align="center" class="header-title">
        <div v-scrollanimation>
          <span
            :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']"
            class="font-weight-black white--text"
            >No Labels</span
          >
        </div>
      </div>
      <div class="header-box" align="center">
        <h1 v-scrollanimation>We don't believe in labels.</h1>
      </div>
    </section>
    <section class="description">
      <p v-scrollanimation>Autheticity</p>
      <p v-scrollanimation>Be apart of the better future.</p>
    </section>
    <section class="images">
      <img v-scrollanimation src="../assets/fox/fox-leaf.png" alt />
      <img
        v-scrollanimation
        src="https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyosemite1.jpg?alt=media&token=c055750c-044c-4842-8f48-0989b79958eb"
        alt
      />

      <img v-scrollanimation src="../assets/fox/fox-fullback.png" alt />
    </section>
    <section class="description">
      <p v-scrollanimation>Our Latest Products</p>
      <p v-scrollanimation>Be apart of the better future.</p>
    </section>
    <section class="images">
      <img v-scrollanimation src="../assets/fox/fox-leaf.png" alt />
    </section>
  </div>
</template>


<style lang="scss" scoped>
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
  h1 {
    font-size: 1.5rem;
    padding: 10px 20px;
  }
  p {
    font-size: 1.2rem;
    padding: 10px 20px;
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
  name: "Home",

  data() {
    return {
      logos: [],
    };
  },
  methods: {},

  mounted() {},
};
</script>

