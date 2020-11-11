<template>
  <section id="account">
    <div :class="{ settings: !showProfile }" class="col1">
      <transition name="fade">
        <p v-if="showSuccess" class="success">profile updated</p>
      </transition>
      <div v-if="showProfile" align="center">
        <v-img width="90" src="../assets/avatar.png"></v-img>
        <small>{{ userProfile.permission }}</small>
        <v-row>
          <v-col>
            <h3 class="mb-1" style="text-align: center">
              {{ userProfile.name }}
            </h3>
          </v-col>
        </v-row>
      </div>
      <h3 v-else>Update your profile</h3>

      <hr />

      <form v-if="showProfile" class="mt-2">
        <p>
        Occupation: 
          <br><b>{{ userProfile.title }}</b>
        </p>
        <h2>Favourites: </h2>
        <div class="extras pt-12">
          <a @click="toggleForm()">Update your profile</a>
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
        birthday:
          this.birthday !== "" ? this.birthday : this.userProfile.birthday,
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