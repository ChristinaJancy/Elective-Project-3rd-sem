<template>
  <!-- <div id="Navigation">
     <v-navigation-drawer v-model="drawer" app dark clipped temporary>
      <v-list dense>
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

        <router-link to="/product">
          <v-list-item link>
            <v-list-item-action>
              <v-icon class="iconcolor--text">mdi-lock</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >Product</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left light bottom>
      <v-list-item-subtitle class="pl-4" v-if="currentUser"
        >Logged In</v-list-item-subtitle
      >
      <v-list-item v-if="currentUser">
        <v-list-item-avatar>
          <v-img contain src="../assets/fox/fox.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>{{ currentUser.email }}</v-list-item-title>
      </v-list-item>
      <hr style="border:0.1px solid grey" v-if="currentUser" />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <router-link to="/login" v-if="currentUser === null">
        <v-list-item link>
          <v-list-item-action class="mx-1">
            <v-icon class="iconcolor--text">mdi-account-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="iconcolor--text">Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <v-router v-if="currentUser" @click="logout()">
        <v-list-item link>
          <v-list-item-action class="mx-1">
            <v-icon class="iconcolor--text">mdi-account-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="iconcolor--text"
              >Logout</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-router>
    </v-app-bar> 
  </div> -->
  <v-bottom-navigation class="d-lg-none" app bottom fixed shift>
    <v-btn v-for="(navItem, i) in navItems" :key="i" :to="navItem.link">
      <span>{{ navItem.name }}</span>
      <v-icon>{{ navItem.icon }}</v-icon>
    </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" depressed>
          <v-icon class="iconcolor--text">mdi-account-circle-outline</v-icon>
        </v-btn>
      </template>
      <v-list>
        <router-link to="/randomOutfit">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >Random Outfit</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/account">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >Profile</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/login" v-if="!currentUser">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >Login</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <v-router v-if="currentUser" @click="logout()">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >Logout</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-router>
      </v-list>
    </v-menu>
  </v-bottom-navigation>
</template>

<script>
/* eslint-disable */
import { db } from "../firebase";
// import { db } from "../../firebase";
import firebase from "firebase";
import "firebase/firestore";
import store from "../store/index.js";

firebase.auth().onAuthStateChanged(function (user) {
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
    navItems: [
      { name: "Favorites", link: "/Favorites", icon: "mdi-google-fit" },
      { name: "Products", link: "/products", icon: "mdi-foot-print" },
      { name: "No Labels", link: "/", icon: "mdi-ferris-wheel" },
      { name: "Basket", link: "/Basket", icon: "mdi-blur" },
    ],
  }),
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
};
</script>
