<template>
    <MyPlayer
        ref="p"
        :ytid="ytid"
        :yturl="yturl"
        :width="videoWindow.width"
        :height="videoWindow.height"
        :player-vars="{controls: 0}"
        @read="onPlayerReady"
    />
</template>

<script>
import { Player } from 'vue-youtube-iframe-api'

export default {
    name: "YouTubeVideo",
    props : ["ytid", "yturl", "videoplay", "videoWindow"],
    data(){
        return{
        }
    },
    created(){
        window.addEventListener('resize', ()=> {
            this.handleResize();
        });
    },
    methods: {
        goAbout(){
            this.$router.push({name: "about"});
        },
        onPlayerReady () {
            console.log(this.$refs.p.player)
        },
        play() {
            this.$refs.p.player.playVideo()
        },
        pause() {
            this.$refs.p.player.pauseVideo()
        },
        handleResize() {
            this.$refs.p.player.f.width = Math.max(window.innerWidth * 0.6, 300);
            this.$refs.p.player.f.height = Math.max(window.innerWidth *  0.3375, 168.75);
        }
    },
    components: {
        MyPlayer: Player
    },
    watch: {
        videoplay: function () {
            if(this.videoplay){
                this.play()
            } else{
                this.pause()
            }
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
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
.VideoBox{
    position: absolute;
    align-self: flex-start;
}
.goAbout{
    color: white;
    margin-bottom: 2vh;
}

@media(max-width:600px) {
    .goAbout{
        margin-bottom: 10vh;
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
