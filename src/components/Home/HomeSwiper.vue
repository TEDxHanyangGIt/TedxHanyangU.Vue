<template>
    <swiper ref="homeSwiper" :options="swiperOptions">
        <swiper-slide class="wall">
            <Sign />
        </swiper-slide>
        <swiper-slide class="aboudTedx">
            <div class="aboutTed">
                <p><span>TED</span>는 <span>T</span>echnology, <span>E</span>ntertainment, <span>D</span>esign의 약자로</p>
                <p style="text-align: center;">자신이 하는 일에 열정을 가진 사람들이</p>
                <p style="text-align: center;">'<span>Ideas Worth Spreading</span>(공유할 가치가 있는 아이디어)'이라는</p>
                <p style="text-align: end;">슬로건 아래에서 18분간 발표하고 이야기를 나누는 자리입니다. </p>
            </div>
            <CardContainer />
        </swiper-slide>
        <swiper-slide class="move_rectangle">
            <EventBack />
            <div class="aboutTed">
                <p><span>TEDx</span>의 <span>'x'</span>는 독립적으로 조직된 <span>TED</span>이벤트를 뜻하며,</p>
                <p style="text-align: center;"><span>TED</span>의 기본 가이드라인을 활용하여,</p>
                <p style="text-align: end;">자발적으로 <span>TED</span>를 기획하고자 하는 사람들이 모여 만드는 이벤트입니다.</p>
            </div>
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
import CardContainer from "@components/Home/CardContainer"
import EventBack from "@components/Home/EventBack"
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
        CardContainer: CardContainer,
        EventBack:EventBack,
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
    font-family:"PassionItself"; 
    color: white; 
    font-size: min(40px, max(3vw, 10px));
    margin-bottom: 3px;
    text-shadow: 0 0 0.6rem #808080, 0 0 1.5rem #EDEDED,
    -0.2rem 0.1rem 1rem #D0D0D0, 0.2rem 0.1rem 1rem #B5B5B5,
    0 -0.5rem 2rem #9A9A9A, 0 0.5rem 3rem #808080;
    animation: shine 2s forwards, flicker 3s infinite;
}
.aboutTed p span{
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
</style>