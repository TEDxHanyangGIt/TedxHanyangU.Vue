<template>
    <div class="grid">
        <Card
            v-for="(item, idex) in snsList"
            :key="idex"
            v-bind:sns="item"
        />
    </div>
</template>

<script>
import Card from '@components/About/Card'
export default {
    name: "CardBox",
    data(){
        return{
            snsList: [
                {
                    img: "https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", 
                    sns:"You Tube", 
                    gossns: "Go youtube", 
                    snsurl: "https://www.youtube.com/results?search_query=tedxhanyangu",
                    snstype: "youtube"
                },
                {
                    img: "https://images.unsplash.com/photo-1505322747495-6afdd3b70760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", 
                    sns:"Instagram", 
                    gossns: "Go instagram", 
                    snsurl: "https://www.instagram.com/tedxhanyangu_2020/",
                    snstype: "instagram"
                },
                {
                    img: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80", 
                    sns:"facebook", 
                    gossns: "Go facebook", 
                    snsurl: "https://www.facebook.com/TEDxHanyangU/",
                    snstype: "facebook"
                }
            ]
        }
    },
    components:{
        Card: Card
    }
}
</script>

<style scoped>
.grid {
    padding: 5vh 5vw;
    background-color: white;
    font-family: 'Gothic A1', sans-serif;
    box-sizing: border-box;
    display: flex;;
    flex-direction: row;
    justify-content: center;
    width: 100vw !important;
}

@media screen and (max-width: 900px){
    .grid {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

</style>
