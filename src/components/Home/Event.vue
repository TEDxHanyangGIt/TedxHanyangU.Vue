<template>
<div class="eventWrap">
    <div class="gallery">
        <swiper ref="eventSwiper" :options="swiperOptions" class="pictures">
            <swiper-slide
                v-for="e in sorted_evnets"
                :key="e.no"
                class="picture"
                :style="setBackgoundImage(e.image)"
                :delete-instance-on-destroy="true"
                :cleanup-styles-on-destroy="true"
            >
                <p class="event_title">제{{e.no}}회 {{e.title}}</p>
            </swiper-slide>
        </swiper>
    </div>
    <div class="infoBox">
        <div class="more" @click="goTalks()">강연 더보기 >></div>
        <h2>제 {{info.no}}회 {{info.title}}</h2>
        <YouTubeIframe
            v-bind:ytid="null"
            v-bind:yturl="ytid"
            v-bind:videoplay="true"
            v-bind:videoWindow="videoWindow"
        />
        <h3> [ {{videoInfo.talk_title}} ] </h3>
        <h4>{{videoInfo.speaker}}({{videoInfo.occupation}})</h4>
    </div>
</div>
</template>

<script>
import {events} from "@/constant.js"
import YouTubeIframe from "@components/common/YouTubeIframe"

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
            info: null,
            videoInfo: null,
            ytid: null,
            videoWindow:{
                width: 0,
                height: 0
            },
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
        },
        setInfo(index){
            this.videoWindow.width = (window.innerWidth * 0.3) - 80 
            this.videoWindow.height = ((window.innerWidth * 0.3) - 80) * 9 / 16
            this.info = this.sorted_evnets[index]
            var idx = Math.floor(Math.random() * this.sorted_evnets[index].talks.length);
            this.videoInfo = this.sorted_evnets[index].talks[idx]
            this.ytid = `https://www.youtube.com/embed/${this.sorted_evnets[index].talks[idx].youtube.split("=")[1]}`
        },
        goTalks(){
            this.$router.push({ name: "talk" });
        },
    },
    beforeMount(){
        this.setInfo(0)
    },
    mounted(){
        var component = this
        var swiper = this.$refs.eventSwiper.$swiper
        swiper.on('slideChange', function () {
            component.setInfo(swiper.activeIndex)
        });
    },
    components:{
        YouTubeIframe
    }
}
</script>

<style scoped>
.eventWrap{
    display: flex;
    justify-content: space-around;
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
.infoBox{
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    width: calc(30vw - 80px);
    border: 3px soild red;
    border-radius: 5vw;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 50px;
}
.infoBox h2{
    color: black;
    font-family: "NanumSquare";
    font-weight: 900;
    margin: 20px;
}
.infoBox h3{
    width: 100%;
    margin-top: 20px;
    font-family: "NanumSquare";
    font-weight: 700;
    margin-left: 20px;
}
.infoBox h4{
    margin: 10px 0px;
    width: 100%;
    text-align: end;
    color: #8D8D8D;
    padding-right: 30px;
}
.more{
    font-family: "NanumSquare";
    font-weight: 900;
    position: absolute;
    top: 40px;
    right: 60px;
    box-shadow: 5px 5px 20px #8D8D8D;
    padding: 10px;
    border-radius: 20px;
    animation: pendulum 0.5s infinite;
    animation-direction: alternate-reverse;
}
@keyframes pendulum  {
    from { right: 60px;}
    to { right:40px; }
}
</style>