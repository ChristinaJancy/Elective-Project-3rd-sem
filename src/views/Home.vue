<template>
  <div>
    <section class="about-header">
      <div align="center" class="header-title">
        <div v-scrollanimation>
          <span
            :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-3']"
            class="font-weight-black white--text"
          >No Label</span>
        </div>
      </div>
      <div class="header-box" align="center">
        <h1 v-scrollanimation>We don't believe in labels.</h1>
      </div>
    </section>
    <section class="description">
      <p
        v-scrollanimation
      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p
        v-scrollanimation
      >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      <p
        v-scrollanimation
      >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
    </section>
    <section class="images">
      <img v-scrollanimation src="https://firebasestorage.googleapis.com/v0/b/endproject-pwa.appspot.com/o/assets%2Fyosemite1.jpg?alt=media&token=c055750c-044c-4842-8f48-0989b79958eb" alt />
      <img v-scrollanimation src="../assets/fox/fox.png" alt />
      <img v-scrollanimation src="../assets/fox/fox-leaf.png" alt />
      <img v-scrollanimation src="../assets/fox/fox-fullback.png" alt />
    </section>
    <br />
    <br />
    <br />
  </div>
</template>


<style lang="scss" scoped>

  h1 {
    font-size: 1.5rem;
    padding: 10px 20px;
     transition-delay: .2s;
  }
  p {
    font-size: 1.2rem;
    padding: 10px 20px;
     transition-delay: .1s;
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
  .before-enter{
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s cubic-bezier(.41,.01,.57,1.61);
  }
  .enter{
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
  name: "About",

  data() {
    return {
      logos: [
       
      ],
    };
  },
  methods: {

  },

  mounted() {
   },
};
</script>

