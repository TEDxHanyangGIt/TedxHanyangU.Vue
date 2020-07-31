<template>
    <div>
        <Header
        v-bind:headOnColor="headOnColor"
        v-bind:headOffColor="headOffColor"
        v-bind:btnOnColor="btnOnColor"
        v-bind:btnOffColor="btnOffColor" 
        />
        
        
    </div>
</template>

<script>
export default {
    name: "organizer",
    data() {
        return {
            message: "안녕하세요!"
        };
    },
    methods:{
        messagechange(){
            this.message = "안녕못한다"
        }
    },
    created() {
        setTimeout(this.messagechange, 3000)
    }
}
</script>

<style scoped>
.oranizerback{
    height:400px; 
    width:50vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.img{
    width: 200px;
    height: 100px;;
}
.box{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>