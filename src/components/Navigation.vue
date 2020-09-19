<template>
<div id="Navigation">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      clipped
    >
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
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left
      light
    >
         <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
 

      <v-spacer></v-spacer>
<!--
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      -->
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
  }
</script>