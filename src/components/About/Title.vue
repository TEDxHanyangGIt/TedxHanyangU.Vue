<template>
    <div style="width:100%">
        <div class="mainCon">
            <div class="left" >
                <span class="f1">We've</span>
                <span class="f2">had</span>
                <span class="f3">a</span>
                <span class="f4" id="dark">TEDx</span>
                <span class="f5">day.</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutTitle"
}
</script>

<style scoped>
.mainCon{
  height:100vh;
  margin:0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background:#d3d0cb;
  animation: back .1s linear;
  animation-fill-mode:forwards;
  animation-delay:1.5s;
}

@keyframes back{
  0% {
    background-color:#d3d0cb;
  }
  100% {
    background-color: black;
  }
}

.left{
  position: relative;
  width:360px;
  height:500px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

.f1,.f2,.f3,.f4,.f5 {
  position: absolute;
  font-family: 'tvNE';
  line-height:1;
  font-size:110px;
}

#dark{
  /* font-family: 'Amatic SC', cursive; */
  font-family: 'tvNE'
}

.f1{
  top: 0;
  animation: weve, text;
  animation-duration:.8s, .3s;
  animation-delay: 0s, 1.5s;
  animation-fill-mode:forwards;
}

@keyframes weve{
  from{top:-50vh}
  to{top:0}
}

.f2{
  top:-50vh;
  right: 85px;
  animation: had, text;
  animation-duration:.8s, .3s;
  animation-delay:.5s, 1.5s;
  animation-fill-mode:forwards;
}

@keyframes had{
  from{top:-50vh}
  to{top:75px}
}

.f3{
  top: -50vh;
  left: 130px;
  animation: some, text;
  animation-duration:.8s, .3s;
  animation-delay:.8s, 1.5s;
  animation-fill-mode:forwards;
  align-content: center;
  text-align: center
}

@keyframes some{
  from{top:-50vh}
  to{top:150px}
}

.f4{
  top: 240px;
  right: 20px;
  animation:dark .2s linear;
  animation-fill-mode:forwards;
  font-size:150px;
  opacity:0;
  animation-delay:1.5s;
  color:RED;
  
}

@keyframes dark{
  from{opacity:0}
  to{opacity:1}
}


.f5{
  top: 400px;
  animation: days .5s linear;
  animation-fill-mode:forwards;
  font-size:110px;
  margin-left:.4em;
  animation-delay:1.8s;
  color:#d3d0cb;
  opacity:0;
}

@keyframes days{
  from{opacity:0;
  }
  to{opacity:1;}
}

@keyframes text{
  from{color:black}
  to{color:#d3d0cb}
}

</style>