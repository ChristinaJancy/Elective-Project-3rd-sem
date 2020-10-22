<template>
  <div class="NotFound">
    <section class="about-header">
      <div align="center" class="header-title">
        <div v-scrollanimation>
          <span
            :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3']"
            class="font-weight-black white--text"
            >Oops, seems like that page doesn't exist</span
          >
        </div>
      </div>
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
</style>


<script scoped>
export default {
  name: "404",
};
</script>

