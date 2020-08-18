<template>
    <div class="wall">
        <Sign />
    </div>
    <!-- <swiper ref="homeSwiper" :options="swiperOptions">
        <swiper-slide class="wall">
            <Sign />
        </swiper-slide>
        <swiper-slide class="aboudTedx">
            <CardContainer />
        </swiper-slide>
        <swiper-slide class="move_rectangle">
            <EventBack />
            <EventSlide />
        </swiper-slide>
        <swiper-slide >
            Contact
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
</template>

<script>
import Sign from "@components/Home/Sign"
// import CardContainer from "@components/Home/CardContainer"
// import EventBack from "@components/Home/EventBack"
// import EventSlide from "@components/Home/Event"

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
        // CardContainer: CardContainer,
        // EventBack:EventBack,
        // EventSlide: EventSlide
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
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d3d0cb;
    animation: back .3s linear;
    animation-fill-mode:forwards;
    animation-delay:2.4s;
}
@keyframes back{
  0% {
    background-color:#d3d0cb;
  }
  100% {
    background-color: black;
  }
}
.aboudTedx{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.move_rectangle{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.aboutTed {
    width: 90vw;
    padding: 0 5vw;
    display: flex;
    flex-direction: column;
}
.aboutTed p{
    letter-spacing: 2px;
    font-family:"tvNE"; 
    color: white; 
    font-size: min(5vw, 5vh);
    margin-bottom: 3px;
    animation: shine 2s forwards
}
.aboutTed p span{
    color: #ff002c;
}
</style>