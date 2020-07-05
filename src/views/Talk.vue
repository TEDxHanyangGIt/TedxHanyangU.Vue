<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="(talk, i) in events" :key="i" :cols="(!!talk.last) ? 12 : 4">
        <TalkCard :talk="talk" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TalkCard from "@components/Talks/TalkCard.vue";
export default {
  name: "Talks",
  data() {
    return {
      headOnColor: "rgba(255, 255, 255, 1)",
      headOffColor: "rgba(255, 255, 255, 0)",
      btnOnColor: "black",
      btnOffColor: "white",
      events: [
        {
          title: "TedxHYU Palette",
          src: require("@assets/image/E17.jpg"),
          last: true
        },
        {
          title: "TedxHYU 발화",
          src: require("@assets/image/E16.jpg")
        },
        {
          title: "TedxHYU 잇다,있다",
          src: require("@assets/image/E15.jpg")
        }
      ]
    };
  },
  components: {
    TalkCard: TalkCard
  }
};
</script>

<style scoped>
</style>