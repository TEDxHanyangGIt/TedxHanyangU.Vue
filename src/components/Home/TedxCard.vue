<template>
<div class="tedCard" :id="data.id">
    <div class="imgBox">
        <img :src="data.img">
    </div>
    <div class="contentBox">
        <h2>{{data.subject}}</h2>
        <p>{{data.text}}</p>
        <span>{{data.author}}</span>
    </div>
</div>
</template>

<script>
import {VanillaTilt} from "@/plugins/vanilla-tilt.js"

export default {
    name: "TedCard",
    props: ["data"],
    mounted(){
        VanillaTilt.init(document.querySelector(`#${this.$props.data.id}`))
    }
}
</script>

<style scoped>
.tedCard{
    position: relative;
    width: 20vw;
    height: 16vw;
    margin: 10px 0;
    background: #000;
    transform-style: preserve-3d;
    border-radius: 5vw;
}

#tech:hover{box-shadow: 0px 30px 80px rgba(255,0,0, 0.6);}
#enter:hover{box-shadow: 0px 30px 80px rgba(0,255,0, 0.6);}
#design:hover{box-shadow: 0px 30px 80px rgba(0,0,255, 0.6);}

.tedCard .imgBox{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.tedCard .imgBox img{
    opacity: 0.7;
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: 2vw;
}
.tedCard .contentBox{
    position: absolute;
    top: 70%;
    left: 1vw;
    right: 1vw;
    background: rgba(255,255,255, 0.8);
    transform: translateZ(20px) scaleY(0);
    padding: 20px 15px;
    transform-origin: top;
    transition: 0.3s;
    border-radius: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.tedCard .contentBox h2{
    font-family: "tvNE";
    font-size: min(30px, max(20px, 3vw));
    font-weight: 700;
    margin-bottom: 5px;
}

.tedCard .contentBox p{
    font-family: "NanumSquare";
    font-weight: 400;
    font-size: min(20px, max(12px, 3vw));
    margin-bottom: 5px;
}


.tedCard .contentBox span{
    color: #696969;
    font-size: min(15px, max(10px, 2vw));
    text-align: end;
    align-self: flex-end;
    font-family: "tvNE";
}

.tedCard:hover .contentBox{
    transform: translateZ(20px) scaleY(1);
}

@media (max-width: 1024px){
    .tedCard{
        width: 22.5vh;
        height: 18vh;
    }
    .tedCard .contentBox{
        width: 100%;
        left: 70%;
        top: 1vw;
        bottom: 1vw;
        transform: translateZ(20px) scaleX(0);
        transform-origin: left;
        padding: 10px 15px;
    }
    .tedCard:hover .contentBox{
        transform: translateZ(20px) scaleX(1);
    }
}

</style>