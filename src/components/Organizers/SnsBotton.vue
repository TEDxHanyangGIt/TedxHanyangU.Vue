<template>
    <div class="snsbox">
        <v-btn 
            icon 
            @click="goSNS">
                <img class="sns_img" :src="sns.snsimg">    
        </v-btn> 
    </div>
</template>

<script>
export default {
    name: "SnsBotton",
    props: ["sns"],
    methods: {
        goSNS(){
            window.open(this.sns.snsurl);
            return false;
        }
    }
}
</script>

<style scoped>
.snsbox {
    width: 60px;
    text-align: center;
}
.sns_img {
    width: 100%;
    height: 30px;
}
</style>