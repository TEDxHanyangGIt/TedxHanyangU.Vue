 
<template fluid>
  <div>
    <Header />
    <div class="main_image">
      <!-- <img class="potato_img" v-bind:src="potato"/>
      <img class="word_img" v-bind:src="word"/> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    route: "home",
    potato: require('@assets/img/potato.png'),
    word: require('@assets/img/word.png')
  })
};
</script>