<template>
    <v-app-bar 
        flat
        :color="headcolor"
        style="position: fixed; transition:all ease 1s 0s"
    >   <v-layout row justify-space-between style="padding: 0px 20px">
            <div class="pointer" @click="goMain()">
                <span class="font-weight-bold black--text">Tedx</span>
                <span class="font-weight-light grey--text">HanyangU</span>
            </div>
            <v-btn
                text
                @click="SideBarOn()"
            >
                <i class="fas fa-bars"></i>
            </v-btn>
        </v-layout>
    </v-app-bar>
</template>

<script>
import { bus } from "../../main";

export default {
    name: "headers",
    props : ['route'],
    // ==================== Component Variable ==================== //
    data() {
        return {
            headcolor: "rgba(255, 255, 255, 0)",
            sidebaron: false
        };
    },
    // ==================== Component Methods ==================== //
    methods: {
        // ========== Main Function ========== //
        // 메인 화면으로 이동하는 함수
        goMain() {
            this.$router.push({ name: "main" }).catch(err => {});
        },
        SideBarOn(){
            if (this.sidebaron){
                bus.$emit("sidebaroff")
            }
            this.sidebaron = true
            bus.$emit("sidebaron")
        },
        onScroll() {
            if (window.pageYOffset >= 10){
                this.headcolor = "rgba(255, 255, 255, 1)"
            } else {
                this.headcolor = "rgba(255, 255, 255, 0)"
            }
        },
        SearchOn() {
            this.headcolor = "rgba(0, 0, 0, 0)"
        },
        SearchClose() {
            this.headcolor = "rgba(0, 0, 0, 1)"
        }
    },
    created () {
        window.addEventListener('scroll', this.onScroll);
    }
};
</script>