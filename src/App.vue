<template>
  <v-app id="app">
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
      <v-layout class="footer">
        <v-flex xs12 class="pt-10 pb-3">
          &copy; TedxHanyangU, All Rights Reserved
        </v-flex>
      </v-layout>
    </v-content>
    <Sidebar />
  </v-app>
</template>

<script>
import Sidebar from "@components/common/Sidebar.vue";
export default {
  name: 'App',
  components:{
    Sidebar
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

#app {
  background-color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.footer {
  position: absolute;
  bottom: 10;
  background-color: black;
  color: white;;
  text-align: center;
}
</style>