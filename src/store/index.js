import Vue from "vue";
import Vuex from "vuex";

import "firebase/firestore";
import router from "../router/index";
import { dbProductAdd } from "../firebase.js";
// import { dbProductAdd } from '../../firebase.js'
// import * as fb from '../../firebase'
import * as fb from "../firebase";
/*eslint-disable*/

import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    basketItems: [],
    favouriteItems: [],
    products: [],
    currentUser: null,
    userProfile: {},
  },
  mutations: {
    addBasketItems: (state, basketItems) => {
      if (basketItems instanceof Array) {
        basketItems.forEach((item) => {
          if (
            state.basketItems.find(
              (itemInArray) => item.name === itemInArray.name
            )
          ) {
            item = state.basketItems.find(
              (itemInArray) => item.name === itemInArray.name
            );
            item.quantity++;
          } else {
            state.basketItems.push({
              name: item.name,
              size: item.size,
              color: item.color,
              image: item.image,
              price: item.price,
              quantity: 1,
            });
          }
        });
      }
    },
    addFavouriteItems: (state, favouriteItems) => {
      if (favouriteItems instanceof Array) {
        favouriteItems.forEach((item) => {
          if (
            state.favouriteItems.find(
              (itemInArray) => item.name === itemInArray.name
            )
          ) {
            item = state.favouriteItems.find(
              (itemInArray) => item.name === itemInArray.name
            );
            item.quantity++;
          } else {
            state.favouriteItems.push({
              name: item.name,
              size: item.size,
              color: item.color,
              image: item.image,
              price: item.price,
              quantity: 1,
            });
          }
        });
      }
    },
    userStatus(state, user) {
      if (user) {
        state.currentUser = user;
        console.log("UsernameStore", state.currentUser);
      } else {
        state.currentUser = null;
      }
    },

    setProducts: (state) => {
      let products = [];

      dbProductAdd.onSnapshot((snapshotItems) => {
        snapshotItems.forEach((doc) => {
          var productData = doc.data();
          products.push({
            ...productData,
            id: doc.id,
          });
        });
        console.log(products);
        state.products = products;
        products = [];
      });
    },

    setUserProfile(state, val) {
      state.userProfile = val;
    },
  },

  actions: {
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid;
      // update user object
      const userRef = await fb.usersCollection.doc(userId).update({
        name: user.name,
        title: user.title,
      });

      dispatch("fetchUserProfile", { uid: userId });
    },

    setUser(context, user) {
      context.commit("userStatus", user);
    },
    setProducts: (context) => {
      context.commit("setProducts");
    },
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );

      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      // set user profile in state
      commit("setUserProfile", userProfile.data());

      // change route to dashboard
      if (router.currentRoute.path === "/login") {
        router.push("/");
      }
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut();

      // clear user data from state
      commit("setUserProfile", {});

      // redirect to login view
      router.push("/login");
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );

      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title,
      });

      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
  },

  modules: {},

  getters: {
    getBasketItems: (state) => state.basketItems,
    getFavouriteItems: (state) => state.favouriteItems,
    currentUser: (state) => state.currentUser,
    getProducts: (state) => state.products,
  },
});
