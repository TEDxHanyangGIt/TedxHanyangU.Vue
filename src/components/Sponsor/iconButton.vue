<template>
    <v-card-actions>
        <v-spacer></v-spacer>
            <v-btn icon
            id="map">
                <v-icon>fas fa-map-marker-alt</v-icon>
            </v-btn>
            
            <v-btn icon
            @click="goSNS">
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>
    </v-card-actions>
</template>

<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=bxax4t5zbb"></script>
<script>
export default {
    name: "iconButton",
    props: ["icon"],
    methods: {
        goSNS(){
            window.open(this.icon.url);
            return false;
        }},
    mounted(){
        //지도를 삽입할 HTML 요소 또는 HTML 요소의 id를 지정합니다.
            var mapDiv = document.getElementById('map'); // 'map'으로 선언해도 동일

            //옵션 없이 지도 객체를 생성하면 서울 시청을 중심으로 하는 16 레벨의 지도가 생성됩니다.
            var map = new naver.maps.Map(mapDiv);
                    
    }
}
</script>

<style scoped>

</style>