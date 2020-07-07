<template>
  <div>
    <Header
      v-bind:headOnColor="headOnColor"
      v-bind:headOffColor="headOffColor"
      v-bind:btnOnColor="btnOnColor"
      v-bind:btnOffColor="btnOffColor" 
    />
    <div class="py-10 black" style="text-align: center">
      <div>
        <div colum xs10>
          <h1 class="mb-3 display-2 font-weight-black" style="color: white; margin-top: 5vw; ">About <span>TEDx</span></h1>
            <Line />
          <div style="color: white; margin: auto; width: 70vw;  margin-bottom: 3vw; margin-top: 10vw ">{{AboutText_ko1}}</div>
          <div style="color: white; margin: auto; width: 70vw;  margin-bottom: 15vw">{{AboutText_en1}}</div>
        </div>
    
        <div colum xs10>
          <h1 class="mb-3 display-2 font-weight-black" style="color: white; ">About <span>TEDx </span>HanyangU</h1>
          <div style="color: white; margin: auto; width: 70vw; margin-bottom: 3vw; margin-top:10vw">{{AboutText_ko2}}</div>
          <div style="color: white; margin: auto; width: 70vw; margin-bottom: 15vw">{{AboutText_en2}}</div>
        </div>
        <div colum xs10>
          <h1 class="mb-3 display-2 font-weight-black" style="color: white; ">Connect <span>TEDx</span>HanyangU</h1>
          <div style="color: white; margin: auto; width: 70vw; margin-bottom: 3vw; margin-top: 10vw">{{AboutText_ko3}}</div>
          <div style="color: white; margin: auto; width: 70vw">{{AboutText_en3}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {AboutText_ko1, AboutText_en1,AboutText_ko2, AboutText_en2,AboutText_ko3, AboutText_en3} from '@/constant.js'
import Line from '@components/About/Line'
export default {
  name: "About",
  data() {
    return {
      AboutText_ko1, AboutText_en1,
      AboutText_ko2, AboutText_en2,
      AboutText_ko3, AboutText_en3,
      headOnColor: "rgba(255, 255, 255, 1)",
      headOffColor: "rgba(255, 255, 255, 0)",
      btnOnColor: "black",
      btnOffColor: "white"
    }
  },
  components: {
    Line: Line
  }
};
</script>
<style>
Header{
  background-color: black;
}
section {
  background-color: black;
  height: 1000px;  
}
span{
  color: red;
}

</style>
