<template>
  <div style="background-color: black;">
    <Header
      v-bind:headOnColor="headOnColor"
      v-bind:headOffColor="headOffColor"
      v-bind:btnOnColor="btnOnColor"
      v-bind:btnOffColor="btnOffColor" 
    />
    <!-- <Back /> -->
    <Title />
    <Content />
  </div>
</template>

<script>
// import Back from '@components/About/Back'
import Title from '@components/About/Title'
import Content from '@components/About/Content'

export default {
  name: "About",
  data() {
    return {
      headOnColor: "rgba(255, 255, 255, 1)",
      headOffColor: "rgba(255, 255, 255, 0)",
      btnOnColor: "black",
      btnOffColor: "white"
    }
  },
  components: {
    Title:Title,
    Content:Content,
    // Back: Back
  }
};
</script>
<style>

</style>
