<template>
<fragment>
    <div class="tedCard tech">
        <div class="imgBox">
            <img :src="tech.img">
        </div>
        <div class="contentBox">
            <h2>{{tech.subject}}</h2>
            <p>{{tech.text}}</p>
            <p>{{tech.author}}</p>
        </div>
    </div>
    <div class="tedCard enter">
        <div class="imgBox">
            <img :src="enter.img">
        </div>
        <div class="contentBox">
            <h2>{{enter.subject}}</h2>
            <p>{{enter.text}}</p>
            <p>{{enter.author}}</p>
        </div>
    </div>
    <div class="tedCard design">
        <div class="imgBox">
            <img :src="design.img">
        </div>
        <div class="contentBox">
            <h2>{{design.subject}}</h2>
            <p>{{design.text}}</p>
            <p>{{design.author}}</p>
        </div>
    </div>
</fragment>
</template>

<script>
import {VanillaTilt} from "@/plugins/vanilla-tilt.js"
export default {
    name: "TedCard",
    data(){
        return{
            tech: {
                subject: "Technology",
                img: require("@assets/image/tech.jpg"),
                text: "Even though the future seems far away, it is actually beginning right now.",
                author: "Mattie Stepanek"
            },
            enter: {
                subject: "Entertainment",
                img: require("@assets/image/tech.jpg"),
                text: "Even though the future seems far away, it is actually beginning right now.",
                author: "Mattie Stepanek"
            },
            design: {
                subject: "Design",
                img: require("@assets/image/tech.jpg"),
                text: "Even though the future seems far away, it is actually beginning right now.",
                author: "Mattie Stepanek"
            }
        }
    },
    mounted(){
        VanillaTilt.init(document.querySelectorAll(".tedCard"))
    }
}
</script>

<style scoped>
.tedCard{
    position: relative;
    width: 25vw;
    height: 20vw;
    margin: 60px 0;
    background: #000;
    transform-style: preserve-3d;
    border-radius: 5vw;
}
.tech:hover{box-shadow: 0px 30px 80px rgba(255,0,0, 0.6);}
.enter:hover{box-shadow: 0px 30px 80px rgba(0,255,0, 0.6);}
.design:hover{box-shadow: 0px 30px 80px rgba(0,0,255, 0.6);}

.tedCard .imgBox{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.tedCard .imgBox img{
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: 2vw;
}
.tedCard .contentBox{
    position: absolute;
    top: 70%;
    left: 50px;
    right: 50px;
    background: #ffffff;
    transform: translateZ(20px) scaleY(0);
    padding: 40px 25px;
    transform-origin: top;
    transition: 0.3s;
}

.tedCard:hover .contentBox{
    transform: translateZ(20px) scaleY(1);
}
</style>