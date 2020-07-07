<template>
    <div class="VideoFrame">
        <div class="VideoBox">
            <div class="VideoHead" style="margin-bottom:2vh; margin-top: 5vh">
                <div class="headerTitle">
                    <span class="red-text">TED</span>
                    <span class="red-text headerTitlex">x</span>
                    <span > Rules</span>
                </div>
            </div>
            <YouTubeIframe
                v-bind:ytid="null"
                v-bind:yturl="TedxRuleVideo"
                v-bind:videoplay="videoplay"
            />
        </div>
        <div class="goAbout">
            <div id="pendulum">
                <v-btn class="goAboutBtn" rounded>
                    Go About<v-icon right>fa-arrow-right</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import YouTubeIframe from "@components/common/YouTubeIframe"
import { TedxRuleVideo } from '@/constant.js'

export default {
    name: "HomeVideo",
    props : ["videoplay"],
    data(){
        return{
            TedxRuleVideo: TedxRuleVideo
        }
    },
    components: {
        YouTubeIframe: YouTubeIframe
    }
}
</script>

<style scoped>
.VideoFrame{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    height: calc(100vh - 64px);
}
.Video{
  padding: 10px;
  border: 1px solid white; 
}
.VideoBox{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    height: calc(90vh - 100px);
    justify-content: center;

}
.goAbout{
    margin-bottom: 5vh;
}
.goAboutBtn{
    transition: .3s all 0s;
    background-color: white;
    font-weight: bold; 
    height: 50px !important;
}
.goAboutBtn:hover{
    background-color: gray !important;
    color: white !important;
}

@media(max-width:600px) {
    .goAbout{
        margin-bottom: 10vh;
    }
}
@media(max-height: 600px){
    .VideoHead{
        display: none;
    }
    .goAbout{
        margin-bottom: 2vh;
    }
    .goAboutBtn{
        height: 36px !important;
    }
}

@keyframes pendulum  {
    from { margin-left: 40px;}
    to { margin-left:10px; }
}
#pendulum {
    animation: pendulum 0.5s infinite;
    animation-direction: alternate-reverse;
}

</style>
