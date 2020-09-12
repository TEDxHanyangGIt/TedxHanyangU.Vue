<template>
    <div colum xs10>
        <h1 class="mb-3" style="color: white; margin-top: 5vw;">{{whitetxt1}}<span class="RT">{{redtxt}}</span>{{whitetxt2}}</h1>
        <myLine :height="30"/>
        <v-flex :class="hasCard ? 'aboutText':  `aboutText ${`rounded`}`"> 
            <div style="color: black; margin: auto; width: 70%;  margin-bottom: 3vw; margin-top: 10vw ">{{kotxt}}</div>
            <div style="color: black; margin: auto; width: 70%;  margin-bottom: 15vw">{{entxt}}</div>
            <CardBox v-if="hasCard" />
        </v-flex>
    </div>
</template>

<script>
import myLine from '@components/About/Line'
import CardBox from '@components/About/CardBox'
export default {
    name: "AboutText",
    props: ["kotxt", "entxt", "whitetxt1", "redtxt", "whitetxt2", "hasCard"],
    components:{
        myLine:myLine,
        CardBox: CardBox
    }
}
</script>

<style scoped>

Header{
  background-color: black;
}
section {
  background-color: black;
  height: 1000px;  
}
.RT{
  color: red;
  margin: 0px 20px;
}
.mb-3 {
  font-family: 'Permanent Marker', cursive;
  font-size: 50px;
}

.aboutText{
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 5px 5px 5px 5px gray;
  font-size: larger;
  font-family: 'Gothic A1', sans-serif;
}


.rounded{
    border-bottom-left-radius: 5vw;
    border-bottom-right-radius: 5vw;
}

@media screen and (max-width: 1196px){
  .aboutText {
    height: auto;
  }
}

@media screen and (max-width: 707px){
  .aboutText_3 {
    height: 80vw;
  }
}


</style>