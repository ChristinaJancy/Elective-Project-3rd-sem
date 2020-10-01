<template>
  <div class="Search_Bar">
    <v-row align="center" justify="start" class="pa-0 ma-0">
      <v-col class="pa-0">
        <div id="MenuButton">
          <v-btn color="light-grey" @click.stop="drawer = !drawer">
            No Labels Menu
          </v-btn>
        </div>
      </v-col>
      <v-col class="pa-0 ma-0">
        <v-text-field dark
          placeholder="Search No Labels"
          clearable
        ></v-text-field>
      </v-col>
      <v-col class="pa-0 ma-0">
        <v-icon class="iconcolor--text" light>mdi-magnify</v-icon>
      </v-col>
    </v-row>
    <v-navigation-drawer v-model="drawer" temporary app clipped>
      <v-list dense justify="center">
        <v-list-item-subtitle class="pl-4" v-if="currentUser"
          >Logged In</v-list-item-subtitle
        >
        <v-list-item v-if="currentUser">
          <v-list-item-avatar>
            <v-img contain src="../assets/user/user.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>{{ currentUser.email }}</v-list-item-title>
        </v-list-item>
        <hr style="border:0.1px solid grey" v-if="currentUser" />

        <router-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon class="iconcolor--text">mdi-home-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >Home</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/about">
          <v-list-item link>
            <v-list-item-action>
              <v-icon class="iconcolor--text">mdi-information-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >About</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/admin">
          <v-list-item link>
            <v-list-item-action>
              <v-icon class="iconcolor--text">mdi-lock</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >Admin</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <v-spacer></v-spacer>
        <router-link to="/login" v-if="!currentUser">
          <v-list-item link>
            <v-list-item-action class="mx-1">
              <v-icon class="iconcolor--text"
                >mdi-account-circle-outline</v-icon
              >
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >Login</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <v-router v-if="currentUser" @click="logout()">
          <v-list-item link>
            <v-list-item-action class="mx-1">
              <v-icon class="iconcolor--text"
                >mdi-account-circle-outline</v-icon
              >
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >Logout</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-router>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
/* eslint-disable */
import { db } from "../firebase";
// import { db } from "../../firebase";
import firebase from "firebase";
import "firebase/firestore";
import store from "../store/index.js";

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //user is signed in
    store.dispatch("setUser", user);
    //   ;debugger
  } else {
    //NO user is signed in
    store.dispatch("setUser", null);
  }
});

export default {
  data: () => ({
    drawer: null,
    methods: {
      logout() {
        this.$store.dispatch("logout");
      },
    },
    computed: {
      currentUser() {
        return this.$store.getters.currentUser;
      },
    },
    beforeCreate() {},
  }),
};
</script>

<style lang="scss" scoped>
.Search_Bar {
  background-color: #0a292c;
}

#MenuButton {
  padding-left: 40px;
}
</style>
