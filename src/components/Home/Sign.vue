<template>
<fragment>
    <div class="spider-web">
        <img :src="spider" class="spider">
    </div>
    <div class="sign" style="margin-right: 25vw">
        <span class="fast-flicker">W</span>elcome to
    </div>
    <div class="sign" style="margin-left: 5vw">
        <span>Tedx</span> <span>H</span>anyang <span class="flicker">U</span>niversity
    </div>
</fragment>
</template>

<script>
export default {
    name: "Sign",
    data(){
        return{
            spider: require("@assets/icon/spider.png")
        }
    }
}
</script>
<style scoped>
.spider-web{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.7) 80%, rgba(255,255,255,0) 100%) ;
    width: 1px;
    height: 25vh;
    top: 0;
    right: max(15vw, 100px);
    animation: down 1s forwards, gotop 2s ease-in-out 2s forwards, rolling 4s ease-in-out 4s infinite;
    animation-direction: alternate;
}
@keyframes down {
  from{transform: translateY(-100%)}
  to{transform: translateY(0%)}
}
@keyframes gotop {
    from{transform: translateX(0) translateY(0) rotateZ(0)}
    to{transform: translateX(-6.47vh) translateY(-0.85vh) rotateZ(15deg)}
}
@keyframes rolling {
    from{transform: translateX(-6.47vh) translateY(-0.85vh) rotateZ(15deg)}
    to{transform: translateX(6.47vh) translateY(-0.85vh) rotateZ(-15deg)}
}
.spider{
    width: min(30px, max(10vw, 10px));
    height: min(30px, max(10vw, 10px));
}
.sign{
    font-family: "Clip";
    font-size: 4em;
    font-weight: 900;
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
    animation: shine 2s forwards, flicker 3s infinite;
}
@media (max-width:600px) {
    .sign{
        font-size: 2em;
    }
}
.sign span{
    font-family: "Clip";
    color: #ff002c;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ffbfdb,
    -0.2rem 0.1rem 1rem #ff8cad, 0.2rem 0.1rem 1rem #ff557a,
    0 -0.5rem 2rem #ff2952, 0 0.5rem 3rem #ff002c;
    animation: shine-red 2s forwards, flicker 3s infinite;
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


@keyframes flicker {
  from {opacity: 1;}
  4% {opacity: 0.9;}
  6% {opacity: 0.85;}
  8% {opacity: 0.95;}
  10% {opacity: 0.9;}
  11% {opacity: 0.922;}
  12% {opacity: 0.9;}
  14% {opacity: 0.95;}
  16% {opacity: 0.98;}
  17% {opacity: 0.9;}
  19% {opacity: 0.93;}
  20% {opacity: 0.99;}
  24% {opacity: 1;}
  26% {opacity: 0.94;}
  28% {opacity: 0.98;}
  37% {opacity: 0.93;}
  38% {opacity: 0.5;}
  39% {opacity: 0.96;}
  42% {opacity: 1;}
  44% {opacity: 0.97;}
  46% {opacity: 0.94;}
  56% {opacity: 0.9;}
  58% {opacity: 0.9;}
  60% {opacity: 0.99;}
  68% {opacity: 1;}
  70% {opacity: 0.9;}
  72% {opacity: 0.95;}
  93% {opacity: 0.93;}
  95% {opacity: 0.95;}
  97% {opacity: 0.93;}
  to {opacity: 1;}
}

.flicker {
  animation: shine-red 2s forwards, blink 15s cubic-bezier(0.18, 0.89, 0.32, 1.28) 4s infinite !important;
}

.fast-flicker {
  animation: shine-red 2s forwards, blink 8s cubic-bezier(0.67, 0.22, 0.27, 1.55) 3s infinite !important;
}

@keyframes blink {
  0%,
  28%,
  32%,
  93% {
    color: #ff002c;
     text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ffbfdb,
    -0.2rem 0.1rem 1rem #ff8cad, 0.2rem 0.1rem 1rem #ff557a,
    0 -0.5rem 2rem #ff2952, 0 0.5rem 3rem #ff002c;
  }
  29%,
  31% {
    color: #770017;
    text-shadow: none;
  }
  94%,
  97% {
    color: #770017;
    text-shadow: none;
  }
}
</style>