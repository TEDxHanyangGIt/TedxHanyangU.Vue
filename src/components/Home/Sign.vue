<template>
<div class="signBox">
    <div class="sign line1">
        <span>W</span>elcome to
    </div>
    <div class="sign line2">
        <span>Tedx</span> <span>H</span>anyang<span>U</span>
    </div>
    <div class="sign line3">
        ideas worth <span>spreading</span>
    </div>
</div>
</template>

<script>
export default {
    name: "Sign",
    data(){
        return{
        }
    }
}
</script>
<style scoped>
.signBox{
  position: relative;
  width: 90vw;
  max-width: 800px;
  height: 50vh;
}
.sign{
    position: absolute;
    font-family: "tvNE";
    font-weight: 700;
    text-align: center;
    letter-spacing: 2px;
}
.sign span{
    font-family: "tvNE";
    color: #ff002c;
}
.line1{
  left: 0;
  top: -50vh;
  font-size: min(10vw, 10vh);
  color: black;
  animation: firstline, whiteTxt;
  animation-duration:.8s, .3s;
  animation-delay: 0s, 2.4s;
  animation-fill-mode:forwards;
}
@keyframes firstline{
  from{top:-50vh}
  to{top:20%}
}
.line2{
  left: 15%;
  top: -50vh;
  color: black;
  font-size: min(12vw, 12vh);
  animation: secondline, whiteTxt;
  animation-duration:.8s, .3s;
  animation-delay:.8s, 2.4s;
  animation-fill-mode:forwards;
}
@keyframes secondline{
  from{top:-50vh}
  to{top: 38%}
}
.line3{
  right: 15%;
  top: -50vh;
  color: black;
  font-size: min(8vw, 8vh);
  animation: thirdline, whiteTxt;
  animation-duration:.8s, .3s;
  animation-delay:1.6s, 2.4s;
  animation-fill-mode:forwards;
}
@keyframes thirdline{
  from{top:-50vh}
  to{top: 65%}
}
@keyframes whiteTxt{
  from{color:black}
  to{color:#d3d0cb}
}


</style>