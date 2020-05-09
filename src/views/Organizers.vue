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
        };
    },
    methods:{
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
    width:100vw; 
}
.black{
    background-color: black;
}
.blue-1{
    background-color: red;
}
</style>