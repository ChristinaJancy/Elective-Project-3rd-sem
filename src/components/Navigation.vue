<template>
  <div id="Navigation">
    <v-navigation-drawer v-model="drawer" app dark clipped>


      <v-list dense>

         <v-list-item-subtitle class="pl-4">Logged In</v-list-item-subtitle>
        <v-list-item v-if="currentUser">
          <v-list-item-avatar>
            <v-img src="../assets/fox/fox.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-title>{{currentUser.email}}</v-list-item-title>
        </v-list-item>
        <hr style="border:0.1px solid grey" v-if="currentUser" />
     
      <router-link to="/">
        <v-list-item link>
          <v-list-item-action>
            <v-icon class="iconcolor--text">mdi-home-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="iconcolor--text">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link to="/about">
        <v-list-item link>
          <v-list-item-action>
            <v-icon class="iconcolor--text">mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="iconcolor--text">About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <router-link to="/admin">
        <v-list-item link>
          <v-list-item-action>
            <v-icon class="iconcolor--text">mdi-lock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="iconcolor--text">Admin</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
       </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left light>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
 <router-link to="/login">
        <v-list-item link>
          <v-list-item-action class="mx-1">
            <v-icon class="iconcolor--text">mdi-account-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="iconcolor--text">Login/logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>