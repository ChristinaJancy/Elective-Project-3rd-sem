<template>
  <div id="Navigation">
    <v-navigation-drawer v-model="drawer" temporary app dark clipped>
      <v-list dense>
        <v-list-item-subtitle class="pl-4" v-if="currentUser"
          >Logged In</v-list-item-subtitle
        >
        <v-list-item v-if="currentUser">
          <v-list-item-avatar>
            <v-img contain src="../assets/fox/fox.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>{{ currentUser.email }}</v-list-item-title>
        </v-list-item>
        <hr style="border: 0.1px solid grey" v-if="currentUser" />

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

        <router-link to="/products">
          <v-list-item link>
            <v-list-item-action>
              <v-icon class="iconcolor--text"
                >mdi-briefcase-variant-outline</v-icon
              >
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >All Products</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/basket">
          <v-list-item link>
            <v-list-item-action>
              <v-icon class="iconcolor--text"
                >mdi-briefcase-variant-outline</v-icon
              >
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="iconcolor--text"
                >Basket</v-list-item-title
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
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left light>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <!-- Basket badge + v-if/v-else start -->
      <v-badge
        v-if="basket.length > 0"
        bordered
        bottom
        color="green accent-4"
        overlap
        offset-x="15"
        offset-y="20"
      >
        <template v-slot:badge>
          {{  basketCounter }}
        </template>
        <router-link to="/basket">
          <v-icon class="iconcolor--text pa-2">mdi-basket</v-icon>
        </router-link>
      </v-badge>

      <router-link to="/basket" v-else>
        <v-icon class="iconcolor--text pa-2">mdi-basket</v-icon>
      </router-link>

      <!-- Basket badge end -->
      <router-link to="/favourites">
        <v-icon class="error--text pa-2">mdi-heart</v-icon>
      </router-link>

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="transparent" v-bind="attrs" v-on="on" depressed>
              <v-icon class="iconcolor--text"
                >mdi-account-circle-outline</v-icon
              >
            </v-btn>
          </template>
          <v-list>
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
      </div>
    </v-app-bar>
  </div>
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
    basketDump: [],
  }),

  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    increaseQnt(item) {
      item.quantity++;
    },
    decreaseQnt(item) {
      item.quantity--;

      if (item.quantity === 0) {
        this.basket.splice(this.basket.indexOf(item), 1);
      }
    },
  },
  computed: {
    basketCounter() {
      var basketCount = 0;

      for (var items in this.basket) {
        var individualItem = this.basket[items];
        basketCount += individualItem.quantity;
      }
      return basketCount;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
    basket() {
      //for vuex
      // return this.$store.state.basketItems //we want to contact state in our vuex store
      return this.$store.getters.getBasketItems;
    },
  },
  beforeCreate() {},
};
</script>