<template>
  <!-- Additional Products Display -->
<div>
  <v-row class="pa-0 ma-0" v-if="favourite.length > 0">
    <br />
    <v-sheet class="mx-4" max-width="90%">
         <h2>Favourites:</h2>
           <span id="total-items"> <b>{{favourite.length}}</b> Items </span>
      <v-slide-group v-model="model" class="pa-4" 
      center-active 
      show-arrows>
        <v-slide-item
          v-for="item in favourite"
          :key="item.name"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? 'transparent' : 'transparent'"
            flat
            class="ma-4"
            height="200"
            width="150"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <router-link
                  :to="{
                    name: 'Product',
                    params: {
                      id: item.name,
                      name: item.name,
                      size: item.size,
                      color: item.color,
                      price: item.price,
                      image: item.image,
                    },
                  }"
                >
                  <!-- Product Images **Add router method for @click="toggle" -->
                  <v-img
                    id="productImageDisplay"
                    contain
                    height="25vh"
                    v-bind:src="item.image"
                    @click="toggle"
                  ></v-img>
                </router-link>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-row>
 <v-row class="pa-0 ma-0" v-else>
    <br />
    <v-sheet class="mx-4" max-width="90%">
         <h2>Favourites:</h2>
      <p>You have no favourites yet!</p>
    </v-sheet>
  </v-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      basketDump: [],
      favouriteDump: [],
      dialog: false,
      item: [],
      activeEditItem: null,
      multiLine: true,
      snackbar: false,
      favSnackbar: false,
      updatedText: "Product has been updated",
      size: [],
      color: [],
      type: [],
      category: [],
      season: [],
      favAdded: "Product added to your favourites.",
    };
  },
  computed: {
    users() {
      //for vuex
      // return this.$store.state.basketItems //we want to contact state in our vuex store
      return this.$store.getters.getUsers;
    },
    favourite() {
      //for vuex
      // return this.$store.state.basketItems //we want to contact state in our vuex store
      return this.$store.getters.getFavouriteItems;
    },
  },
};
</script>

<style>
</style>