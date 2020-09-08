<template>
    <div>
        <Sns
            v-for="data in snslist"
            :key="data.id"
            :data="data" 
        />
    </div>
</template>

<script>
import Sns from "@components/Organizers/Sns"
export default {
    name: "SnsBox",
    data(){
        return{
            snslist: [
                {
                    id:"FaceBook",
                    img:require("@assets/image/iconFacebook.png"),
                    snsurl: "https://www.facebook.com/TEDxHanyangU/",
                    snstype:"FaceBook"
                },
                {
                    id:"Youtube",
                    img:require("@assets/image/iconYoutube.png"),
                    snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                    snstype:"Youtube"
                },{
                    id:"Instagram",
                    img:require("@assets/image/iconInstagram.png"),
                    snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                    snstype:"Instagram"
                },
            ]
        }
    },
    components: {
        Sns: Sns
    }
}
</script>

<style scoped>
</style>