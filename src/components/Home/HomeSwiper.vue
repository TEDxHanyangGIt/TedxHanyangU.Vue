<template>
    <swiper ref="homeSwiper" :options="swiperOptions">
        <swiper-slide>
            <v-layout xs12 row justify-center align-center class="firstSlide slide">
                <v-flex xs12 column class="blackBack">
                    <v-flex class="wordWrap" >
                        <v-flex class="Word pendulum1" style="align-self: flex-start;">
                            <div class="firstWord">T</div>
                            <div class="leastWord">echnology</div>
                        </v-flex>
                        <v-flex class="Word pendulum2" style="align-self: flex-end;">
                            <div class="firstWord">E</div>
                            <div class="leastWord">ntertainment</div>
                        </v-flex>
                        <v-flex class="Word pendulum3" style="align-self: flex-center;">
                            <div class="firstWord">D</div>
                            <div class="leastWord">esign</div>
                        </v-flex>
                        <v-flex class="Word pendulum4" style="align-self: flex-start;">
                            <div class="firstWord">X</div>
                            <div class="leastWord"> = independent</div>
                        </v-flex>
                    </v-flex>
                    <v-flex column align-center class="textWrap">
                        <div class="mainText">{{text}}</div>
                    </v-flex>
                </v-flex>
            </v-layout>
        </swiper-slide>
        <swiper-slide>
            <v-layout xs12 row justify-center align-center class="secondSlide slide">
                <HomeVideo 
                    :videoplay="videoplay"
                />
            </v-layout>
        </swiper-slide>
        <swiper-slide class="move_rectangle">
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
            <EventSlide />
        </swiper-slide>
        <swiper-slide >
            Contact
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import HomeVideo from "@components/Home/HomeVideo"
import EventSlide from "@components/Home/Event"
import { HomeMainText, TedxRuleVideo, events } from '@/constant.js'

export default {
    name: 'HomeSwiper',
    data() {
        return {
            videoplay: false,
            showevnet: false,
            swiperOptions: {
                direction: 'vertical',
                pagination: {
                    el: '.swiper-pagination',
                    bulletClass: "bullet",
                    bulletActiveClass: "bullet-active"
                },
                mousewheel: true
            },
            text: HomeMainText
            
        }
    },
    components:{
        HomeVideo: HomeVideo,
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

.slide{padding-top: 56px; color: #ffffff; height: auto;}

.firstSlide{background-image: url('../../assets/image/light.jpg');background-position: center center; background-size: cover;}
.blackBack{background-color: rgba(0,0,0, 0.5);width: 100vw;height: calc(100vh - 56px); display: flex; justify-content: center; align-items: center; padding: 0px 5vw;}
.wordWrap{display: flex; flex-direction: column; padding-right: min(5vw, 50px); max-width: calc(40vw - max(10vw, 100px));}
.wordWrap .Word{display: flex; align-items: center;}
.wordWrap .Word .firstWord{font-size: max(5vw, 5vh) ; color: red;font-weight: bold; font-family: "NanumSquare"; font-weight: 800;}
.wordWrap .Word .leastWord {color: white;font-size: max(4vw, 4vh); font-family: "NanumSquare"; font-weight: 700; overflow: visible; white-space: nowrap;}

.textWrap{background-color: rgba(255,255,255, 0.2); padding: 3vh 3vw; border-radius: 10px;box-shadow: 2px 4px 15px rgba(255,255,255, 0.6)}
.textWrap .mainText{font-size: max(min(20px, 2vw), 12px);font-family: "NanumSquare"; white-space: pre-line; word-break:keep-all; text-align:left; font-size: 1vw;}

.VideoWrap{display: flex; flex-direction: row; justify-content: center; align-items: center;}

@keyframes pendulum1  {
    from { margin-top: 15px; margin-left: 15px;}
    to { margin-top:0px; margin-left: 0px;}
}
@keyframes pendulum2  {
    from { margin-top: 20px; margin-right: 20px;}
    to { margin-top:0px; margin-right: 0px;}
}
@keyframes pendulum3  {
    from { margin-bottom: 15px; margin-left: 5px;}
    to { margin-bottom:0px; margin-left: 0px;}
}
@keyframes pendulum4  {
    from { margin-top: 20px; margin-right: 10px; padding-left: calc(5vw - 10px);}
    to { margin-top:0px; margin-right: 0px; padding-left: 5vw;}
}
.pendulum1 {animation: pendulum1 1.3s infinite; animation-direction: alternate-reverse;}
.pendulum2 {animation: pendulum2 2.7s infinite; animation-direction: alternate-reverse;}
.pendulum3 {animation: pendulum3 3s infinite; animation-direction: alternate-reverse;}
.pendulum4 {animation: pendulum4 1.2s infinite; animation-direction: alternate-reverse;}


@media(max-width:600px) {
    .blackBack{
        flex-direction: column;
    }
    .wordWrap{
        padding: 1vh 10vw !important;
        width: 80vw;
        position: absolute;
        top:56px;
        height: 50vh !important;
        flex: 0 !important;
    }
    .textWrap{
        padding: 1vh 10vw !important;
        position: absolute;
        bottom: 30px;
        width: 80vw;
    }
 }

.move_rectangle{
    position: relative;
    background: linear-gradient(120deg, #000000 0%, #120000 30%, #3A0002 50%, #5A0004 60%, #790001 75%, #9A0000 85%, #BB0000 90%, #DD0000 95%, #ff0000 100%)
}
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
</style>