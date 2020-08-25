<template>
    <div>
        <sns
            v-for="data in snslist"
            :key="data.id"
            :data="data" 
        />
    </div>
</template>

<script>
import sns from '@components/Organizers/sns'
export default {
    name: "snsbox",
    data(){
        return{
            snslist: [
                {
                    id:"FaceBook",
                    img:require("@assets/image/iconFacebook.png"),
                    snsurl: "http://",
                    snstype:"FaceBook"
                },
                {
                    id:"Youtube",
                    img:require("@assets/image/iconYoutube.png"),
                    snsurl: "http://",
                    snstype:"Youtube"
                },{
                    id:"Instagram",
                    img:require("@assets/image/iconInstagram.png"),
                    snsurl: "http://",
                    snstype:"Instagram"
                },
            ]
        }
    },
    components: {
        sns: sns
    }
}
</script>

<style scoped>
</style>