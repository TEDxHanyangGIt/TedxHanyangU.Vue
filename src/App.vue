<template>
  <v-app id="app">
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
      <footer class="footer mt-10" style="text-align: center;">
        &copy; TedxHanyangU, All Rights Reserved
      </footer>
    </v-content>
    <Sidebar />
  </v-app>
</template>

<script>
import Sidebar from "./components/common/Sidebar.vue";
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
  bottom: -50px;
  transform: translate(-50%, -50%);
  left: 50%;
  color: grey;
}
</style>