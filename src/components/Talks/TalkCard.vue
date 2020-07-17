<template>
  <v-hover>
    <template v-slot:default="{hover}">
      <v-card>
        <v-img
          :src="talk.src"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,0.7)"
          height="50vw"
        ></v-img>
        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#FFFFFF">
            <!-- <router-link to="/about" ><v-card-title v-text="talk.title"></v-card-title></router-link> -->

            <!-- <v-card-title v-text="talk.title" v-on:click="goDetail"></v-card-title> -->
            <button v-text="talk.title" v-on:click="goDetail"></button>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
import router from "../../router";

export default {
  name: "TalkCard",
  props: ["talk"],
  data() {
    return {
      overlay: false
    };
  },
  methods: {
    goDetail: function() {
      router.push("about");
    }
  }
};
</script>
<style scoped>
.talkimg{
  object-fit: contain;
}
</style>
