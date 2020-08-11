<template>
    <div class="py-10 black" style="text-align: center">
        <Info
            v-bind:kotxt="AboutText_ko1"
            v-bind:entxt="AboutText_en1" 
            v-bind:whitetxt1="'About'" 
            v-bind:redtxt="'Tedx'" 
            v-bind:whitetxt2="''"
            v-bind:hasCard="false" 
        />
        <Info
            v-bind:kotxt="AboutText_ko2"
            v-bind:entxt="AboutText_en2" 
            v-bind:whitetxt1="'About'" 
            v-bind:redtxt="'Tedx'"
            v-bind:whitetxt2="'Hanyang U'"
            v-bind:hasCard="false" 
        />
        <Info
            v-bind:kotxt="AboutText_ko3"
            v-bind:entxt="AboutText_en3" 
            v-bind:whitetxt1="'Connect'" 
            v-bind:redtxt="'Tedx'" 
            v-bind:whitetxt2="'Hanyang U'"
            v-bind:hasCard="true" 
        />
    </div>
</template>

<script>
import {AboutText_ko1, AboutText_en1,AboutText_ko2, AboutText_en2,AboutText_ko3, AboutText_en3} from '@/constant.js'
import Info from '@components/About/Info'
export default {
    name: "AboutContent",
    data(){
        return{
            AboutText_ko1, AboutText_en1,
            AboutText_ko2, AboutText_en2,
            AboutText_ko3, AboutText_en3,
        }
    },
    components:{
        Info:Info
    }
}
</script>

<style scoped>

</style>