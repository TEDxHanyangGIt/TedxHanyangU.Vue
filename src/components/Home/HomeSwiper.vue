<template>
    <swiper ref="homeSwiper" :options="swiperOptions">
        <swiper-slide class="wall">
            <Sign />
        </swiper-slide>
        <swiper-slide class="cardContainer">
            <TedxCard />
        </swiper-slide>
        <swiper-slide class="move_rectangle">
            <EventSlide />
        </swiper-slide>
        <swiper-slide >
            Contact
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import Sign from "@components/Home/Sign"
import TedxCard from "@components/Home/TedxCard"
import EventSlide from "@components/Home/Event"

export default {
    name: 'HomeSwiper',
    data() {
        return {
            swiperOptions: {
                direction: 'vertical',
                pagination: {
                    el: '.swiper-pagination',
                    bulletClass: "bullet",
                    bulletActiveClass: "bullet-active"
                },
                mousewheel: true
            }
        }
    },
    components:{
        Sign: Sign,
        TedxCard: TedxCard,
        EventSlide: EventSlide
    },
    computed: {
        swiper() {
            return this.$refs.homeSwiper.$swiper
        }
    },
    mounted() {
        var component = this
        var swiper = this.$refs.homeSwiper.$swiper
        swiper.on('slideChange', function () {
            if(swiper.activeIndex == 1){
                component.videoplay = true
            } else{
                component.videoplay = false
            }
            if(swiper.activeIndex == 2){
                component.showevnet = true
            } else{
                component.showevnet = false
            }
        });
    }
}
</script>

<style>
.swiper-container {width: 100%; height: 100%;}
.bullet{margin: 6px 0;display: block;width: 8px;height: 8px; border-radius: 100%;background: white;opacity: 0.2;z-index: 20;}
.bullet-active{opacity: 1;}

.wall{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #141114;
    background-image: 
        linear-gradient(335deg, black 23px, transparent 23px),
        linear-gradient(155deg, black 23px, transparent 23px),
        linear-gradient(335deg, black 23px, transparent 23px),
        linear-gradient(155deg, black 23px, transparent 23px);
  background-size: 58px 58px;
  background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
  background-repeat: unset;
}
.cardContainer{
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px 0;
}
.move_rectangle{
    position: relative;
    background: linear-gradient(120deg, #000000 0%, #120000 30%, #3A0002 50%, #5A0004 60%, #790001 75%, #9A0000 85%, #BB0000 90%, #DD0000 95%, #ff0000 100%)
}
</style>