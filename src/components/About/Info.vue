<template>
    <div colum xs10>
        <h1 class="mb-3" style="color: white; margin-top: 5vw;">{{whitetxt1}}<span class="RT">{{redtxt}}</span>{{whitetxt2}}</h1>
        <myLine :height="30"/>
        <v-flex :class="hasCard ? 'aboutText':  `aboutText ${`rounded`}`"> 
            <div class="kotxt">{{kotxt}}</div>
            <div class="entxt">{{entxt}}</div>
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
.RT{
  color: red;
  margin: 0px 20px;
}
.InfoTitle {
  font-family: 'Permanent Marker', cursive;
  font-size: 50px;
  color: white; 
  margin-top: 5vw;
}

.aboutText{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 5px 5px 5px 5px gray;
  font-size: larger;
  font-family: 'Gothic A1', sans-serif;
}

.aboutText div{
    color: black;
    font-weight: 700;
    font-family: "NanumSquare";
    width: min(1200px, max(70%, 300px));
    font-size: min(20px, max(10px, 3vw));  
    margin-bottom: 40px;
}

.kotxt{
  margin-top: 60px
}
.entxt{
  margin-bottom: 60px !important;
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