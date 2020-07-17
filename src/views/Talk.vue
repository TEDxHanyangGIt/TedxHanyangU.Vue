<template>
  <div>
    <Header
      v-bind:headOnColor="headOnColor"
      v-bind:headOffColor="headOffColor"
      v-bind:btnOnColor="btnOnColor"
      v-bind:btnOffColor="btnOffColor"
    />
    <v-container fluid style="padding: max(56px, 10vh) 5vw 30px 5vw">
      <v-row dense>
        <v-col v-for="(talk, i) in events" :key="i" :cols="(!!talk.last) ? 12 : 4">
          <TalkCard :talk="talk" />
        </v-col>
      </v-row>
    </v-container>
  </div>
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
      btnOffColor: "black",
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