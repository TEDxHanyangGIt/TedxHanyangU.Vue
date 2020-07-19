<template>
<div class="eventWrap">
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
</div>
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
.eventWrap{
    display: flex;
    width: 100%;
}
.gallery{
    display: flex;
    width: 50vw;
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