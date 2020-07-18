<template>
<fragment>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="gallery">
        <swiper ref="eventSwiper" :options="swiperOptions" class="pictures">
            <swiper-slide
                v-for="e in sorted_evnets"
                :key="e.no"
                class="picture"
                :style="setBackgoundImage(e.image)"
            >
                <p class="event_title">제{{e.no}}회 {{e.title}}</p>
            </swiper-slide>
        </swiper>
    </div>
</fragment>
</template>

<script>
import {events} from "@/constant.js"

export default {
    name: "Event",
    data() {
        return {
            sorted_evnets: events.sort(
                function(a, b) {
                    if (a.no < b.no) return 1;
                    if (a.no > b.no) return -1;
                    return 0;
                }
            ),
            swiperOptions: {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.eventSwiper.$swiper
        }
    },
    methods: {
        setBackgoundImage(img){
            return `background-image:url(${img})`
        }
    }
}
</script>

<style scoped>
.box div{position: absolute; width: 60px; height: 60px; background-color: transparent; border: 6px solid white;}
.box div:nth-child(1){top: 12%;left: 14%; animation: animate 10s linear infinite;}
.box div:nth-child(2){top: 70%;left: 50%; animation: animate 7s linear infinite;}
.box div:nth-child(3){top: 17%;left: 6%; animation: animate 9s linear infinite;}
.box div:nth-child(4){top: 20%;left: 60%; animation: animate 10s linear infinite;}
.box div:nth-child(5){top: 67%;left: 6%; animation: animate 6s linear infinite;}
.box div:nth-child(6){top: 80%;left: 70%; animation: animate 12s linear infinite;}
.box div:nth-child(7){top: 60%;left: 80%; animation: animate 15s linear infinite;}
.box div:nth-child(8){top: 32%;left: 25%; animation: animate 16s linear infinite;}
.box div:nth-child(9){top: 90%;left: 25%; animation: animate 9s linear infinite;}
.box div:nth-child(10){top: 20%;left: 80%; animation: animate 5s linear infinite;}

@keyframes animate {
    0%{
        transform: scale(0) translateY(0) rotate(0);
        opacity: 1;
    }
    100%{
        transform: scale(1.3) translateY(-90px) rotate(360deg);
        opacity: 0;
    }
}

.gallery{
    display: flex;
    width: 50vw;
    height: 100vh;
    margin-left: 3vw;
    justify-content: center;
    align-items: center;
}
.pictures{
    width: 100%;
    min-height: 100px;
    height: 30vw;
    max-height: 300px;
    padding-top: 50px;
    padding-bottom: 50px;
}
.picture{
    position: relative;
    background-position: center;
    background-size: cover;
    width: 30vw;
    height: 30vw;
    min-width: 100px;
    min-height: 100px;
    max-width: 300px;
    max-height: 300px;
}
.event_title{
    font-size: min(max(8px, 3vw), 20px);
    position: absolute;
    width: 100%;
    text-align: center;
    top: calc(min(max(8px, 3vw), 20px) * -2);
    color: white;
}
</style>