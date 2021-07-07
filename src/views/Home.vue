 
<template fluid>
  <div style="height: 100vh; background-color: black;">
    <Header
      v-bind:headOnColor="headOnColor"
      v-bind:headOffColor="headOffColor"
      v-bind:btnOnColor="btnOnColor"
      v-bind:btnOffColor="btnOffColor" 
    />
    <HomeContent />
  </div>
</template>

<script>
import HomeContent from "@components/Home/HomeContent.vue"
export default {
  name: 'home',
  data(){
    return{
      headOnColor: "rgba(255, 255, 255, 1)",
      headOffColor: "rgba(255, 255, 255, 0)",
      btnOnColor: "black",
      btnOffColor: "white"
    }
  },
  components:{
    HomeContent
  }
};
</script>