<template>
    <swiper ref="homeSwiper" :options="swiperOptions">
        <swiper-slide class="wall">
            <Sign />
        </swiper-slide>
        <swiper-slide class="aboudTedx">
            <EventBack />
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
    background-color: black;
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