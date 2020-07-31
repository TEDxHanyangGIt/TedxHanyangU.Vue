<template>
<fragment>
    <div class="sign" style="margin-right: 25vw">
        <span class="fast-flicker">W</span>elcome to
    </div>
    <div class="sign" style="margin-right: 5vw">
        <span>Tedx</span> <span>H</span>anyang
    </div>
    <div class="sign" style="margin-left: 30vw">
        <span class="flicker">U</span>niversity
    </div>
</fragment>
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
.sign{
    font-family: "tvNE";
    font-size: min(10vw, 10vh);
    font-weight: 700;
    color: white;
    text-align: center;
    letter-spacing: 2px;
    background-image: radial-gradient(
        ellipse 50% 35% at 50% 50%,
        black,
        transparent
    );
    text-shadow: 0 0 0.6rem #808080, 0 0 1.5rem #EDEDED,
    -0.2rem 0.1rem 1rem #D0D0D0, 0.2rem 0.1rem 1rem #B5B5B5,
    0 -0.5rem 2rem #9A9A9A, 0 0.5rem 3rem #808080;
    animation: shine 4s forwards
}
@media (max-width:600px) {
    .sign{
        font-size: 2em;
    }
}
.sign span{
    font-family: "tvNE";
    color: #ff002c;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ffbfdb,
    -0.2rem 0.1rem 1rem #ff8cad, 0.2rem 0.1rem 1rem #ff557a,
    0 -0.5rem 2rem #ff2952, 0 0.5rem 3rem #ff002c;
    animation: shine-red 4s forwards
}   
@keyframes shine {
  0% {
    color: #444444;
    text-shadow: none;
  }
  100% {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #808080, 0 0 1.5rem #EDEDED,
    -0.2rem 0.1rem 1rem #D0D0D0, 0.2rem 0.1rem 1rem #B5B5B5,
    0 -0.5rem 2rem #9A9A9A, 0 0.5rem 3rem #808080;
  }
}
@keyframes shine-red {
  0% {
    color: #770017;
    text-shadow: none;
  }
  100% {
    color: #ff002c;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ffbfdb,
    -0.2rem 0.1rem 1rem #ff8cad, 0.2rem 0.1rem 1rem #ff557a,
    0 -0.5rem 2rem #ff2952, 0 0.5rem 3rem #ff002c;
  }
}
</style>