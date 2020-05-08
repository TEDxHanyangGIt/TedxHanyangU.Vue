<template>
    <v-navigation-drawer
    v-model="navigation"
    temporary
    style="position: fixed"
>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>
                <div class="headerTitle" style="display: flex; justify-content: center;">
                    <span class="red-text">TED</span>
                    <span class="red-text headerTitlex">x</span>
                    <span >HanyangU</span>
                </div>
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
        <v-list-item
            v-for="(menu, i) in menuList"
            :key="i"
        >
            <v-list-item-icon>
                <i right :class="menu.icon"></i>
            </v-list-item-icon>
            <v-list-item-content @click="goRoute(menu.route_name)">
                <v-list-item-title>{{menu.name}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</v-navigation-drawer>
</template>

<script>
import { bus } from "@/main";
import {menuList} from "@/constant"

export default {
    name:"sidebar",
    data(){
        return{
            menuList: menuList,
            navigation: null
        }
    },
    methods:{
        goRoute(name){
            this.$router.push({ name: name });
        },
    },
    created() {
        bus.$on("sidebaron", () => {
            this.navigation = true;
        });
        bus.$on("sidebaroff", () => {
            this.navigation = null;
        });
    }
}
</script>

<style>
.off{
    width: 0px !important;
}
</style>