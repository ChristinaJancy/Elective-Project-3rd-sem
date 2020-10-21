<template>
  <section id="account">
    <div  :class="{ 'settings': !showProfile }" class="col1" >
      <h3 v-if="showProfile">{{userProfile.name}}</h3>
       <h3 v-else>Update your profile</h3>
      <transition name="fade">
        <p v-if="showSuccess" class="success">profile updated</p>
      </transition>


      <form v-if="showProfile">
        
  


       <div class="extras">
           <a @click="toggleForm()">Update your profile</a>
        </div>
      </form>
      
      
      <form @submit.prevent v-else >
        <label for="name">Name</label>
        <input
          v-model.trim="name"
          type="text"
          :placeholder="userProfile.name"
          id="name"
        />

        <label for="title">Title</label>
        <input
          v-model.trim="title"
          type="text"
          :placeholder="userProfile.title"
          id="title"
        />

<v-row>
  <v-col align="left"> <button @click="updateProfile()" class="button">Update Profile</button></v-col>
  <v-col align="right">  <button @click="toggleForm()"  class="button error">Cancel</button></v-col>
</v-row>
       
       
           
      </form>
    </div>
  </section>
</template>


<script>
import { mapState } from "vuex";

export default {
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
      this.$store.dispatch("updateProfile", {
        name: this.name !== "" ? this.name : this.userProfile.name,
        title: this.title !== "" ? this.title : this.userProfile.title,
      });

      this.name = "";
      this.title = "";

      this.showSuccess = true;

      setTimeout(() => {
        this.showSuccess = false;
      }, 2000);
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