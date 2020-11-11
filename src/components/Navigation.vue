<template>
  <div id="Navigation" class="hidden-sm-only hidden-xs-only">
    <v-navigation-drawer v-model="drawer" app dark clipped class="nolabelgreen"> <!-- temporary -->
      <v-list dense>
        <v-list-item-subtitle class="pl-6" v-if="currentUser"
          >Logged in:</v-list-item-subtitle
        >
        <v-list-item v-if="currentUser">
          <v-list-item-avatar>
            <v-img contain src="../assets/fox/fox.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>{{ currentUser.email }}</v-list-item-title>
        </v-list-item>
        <hr style="border: 0.1px solid #efefef75" v-if="currentUser" />

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

    <v-app-bar app clipped-left dark style="background-color:#102021f1;">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

     
      <v-toolbar-title>
        <router-link to="/">
        <v-img width="140" src="../assets/nolabel-logo-white.png"></v-img>
          </router-link>
      </v-toolbar-title>
       <v-spacer></v-spacer>

      <!-- BASKET AND BADGE START HERE -->
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
          {{ basketCounter }}
        </template>
        <router-link to="/basket">
          <v-menu open-on-hover offset-y :close-on-content-click='false'>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="iconcolor--text pa-2"
                >mdi-basket</v-icon
              >
            </template>
            <v-list>
              <v-card depressed flat>

                 <v-col>
                    <router-link to="/basket">
              <h1 class="title text-center">Basket</h1>
                    </router-link>
              <div class="pa-2" id="info">
                 <v-simple-table>
                    <thead>
                    <tr>
                  
                        <th class="text-left">Product</th>
                        <th class="text-left">Info</th>
                        <th class="text-left">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for="item in basket" :key="item.name">
                     <td id="id_product_img" style="text-align:center;">
                        <v-img width="50" v-bind:src="item.image"></v-img>
                      </td>

                    <td>
                        <span id="td_name" >{{item.name}}</span>
                        <br>
                            {{ item.price }} Dkk
                        <br><br>
                        <small>Size:<span v-for="(size, index) in item.size" :key="index"> {{ size + ', ' }}</span></small> 
                        <br>
                        <small> Color:<span v-for="(color, index) in item.color" :key="index"> {{ color }}</span> </small> 
                        <br>
                    </td>

                     <td>
                        <v-icon small color="iconcolor" @click="increaseQnt(item)">mdi-plus</v-icon>
                        {{ item.quantity}}
                        <v-icon small color="iconcolor" @click="decreaseQnt(item)">mdi-minus</v-icon>
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div> 
            </v-col>
              <div  align="right">
               <v-btn depressed class="orangebtn" @click="addCheckoutItem"><b>Checkout</b></v-btn>
               </div>
              </v-card>
             
            </v-list>
          </v-menu>
        </router-link>
      </v-badge>

      <router-link to="/basket" v-else>
        <v-icon class="iconcolor--text pr-2">mdi-basket</v-icon>
      </router-link>

      <!-- BASKET END HERE ---------------------------- -->
      <router-link to="/favourites">
        <v-icon class="error--text pl-2">mdi-heart</v-icon>
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

<style lang="scss" scoped>
#info {
  background-color: rgb(255, 255, 255);
}

tr th {
  font-weight: bold;
}

#id_product_img{
  max-width:40px;
  max-height:40px;
  padding:0;
}

#td_name {
  font-weight: bold;
}
#product_description {
  font-style: italic;
  font-weight: 300;
  color: black;
  font-size: 13px;
}

.col h1 {
  text-align: right;
}

.col:last-child h1 {
  text-align: left;
}

#basket-checkout {
  font-size: 13px;
}

#basket-checkout {
  line-height: 2px;
}
</style>