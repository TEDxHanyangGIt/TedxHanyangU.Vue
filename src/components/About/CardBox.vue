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
  justify-content: center;
  align-content: center;
  padding: 6rem;
  background-color: white;
  font-family: 'Gothic A1', sans-serif;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  width: 100%;
  grid-gap: 6rem;
  grid-auto-rows: auto;
  align-items: start;
}
</style>
