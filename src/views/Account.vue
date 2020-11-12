<template>
  <section id="account">
    <div :class="{ settings: !showProfile }" class="col1">
      <transition name="fade">
        <p v-if="showSuccess" class="success">profile updated</p>
      </transition>
      <div v-if="showProfile" align="center">
        <v-img width="90" src="../assets/avatar.png"></v-img>
        <v-row>
          <v-col>
            <h1 class="mb-1" style="text-align: center">
              {{ userProfile.name }}
            </h1>
          </v-col>
        </v-row>
      </div>
      <h1 v-else>Update your profile</h1>

      <hr />

      <form v-if="showProfile" class="mt-2">
         <v-row class="pa-0 ma-0">
           <v-sheet  class="mx-4" max-width="90%">
              <h2>Occupation</h2>
        <p>
          {{ userProfile.title }}
        </p>

           </v-sheet>
         </v-row>
                <FavouritesCarousel/>
        <div class="extras pt-12">
          <button @click="toggleForm()" class="button">Update your profile</button>
        </div>
      </form>

      <form @submit.prevent v-else>
        <label for="name">Name</label>
        <input
          v-model.trim="name"
          type="text"
          :placeholder="userProfile.name"
          id="name"
        />
        <label for="title">Occupation</label>
        <input
          v-model.trim="title"
          type="text"
          :placeholder="userProfile.title"
          id="title"
        />

        <v-row>
          <v-col align="left">
            <button @click="updateProfile()" class="button">
              Update Profile
            </button></v-col
          >
          <v-col align="right">
            <button @click="toggleForm()" class="button error">
              Cancel
            </button></v-col
          >
        </v-row>
      </form>
    </div>
  </section>
</template>


<script>
import FavouritesCarousel from '../components/customer/FavouritesCarousel.vue'
import { mapState } from "vuex";

export default {
  components:{
    FavouritesCarousel,
  },
  data() {
    return {
      name: "",
      title: "",
      showSuccess: false,
      showProfile: true,
      showSettings: true,
    };
  },
  computed: {
    ...mapState(["userProfile"]),
  },
  methods: {
updateProfile() {
  this.$store.dispatch('updateProfile', {
    name: this.name !== '' ? this.name : this.userProfile.name,
    title: this.title !== '' ? this.title : this.userProfile.title
  })

  this.name = ''
  this.title = ''

  this.showSuccess = true

  setTimeout(() => {
    this.showSuccess = false
  }, 2000)
},
    toggleForm() {
      this.showSettings = !this.showSettings;
      this.showProfile = !this.showProfile;
    },
  },
};
</script>

<style>
</style>