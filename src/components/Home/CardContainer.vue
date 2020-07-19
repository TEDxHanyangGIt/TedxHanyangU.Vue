<template>
<div class="cardContainer">
    <TedxCard
        v-for="data in tedList"
        :key="data.id"
        :data="data"/>
</div>
</template>

<script>
import TedxCard from "@components/Home/TedxCard"

export default {
    name: "CardContainer",
    data(){
        return{
            tedList:[
                {
                    id: "tech",
                    subject: "Technology",
                    img: require("@assets/image/tech.jpg"),
                    text: "미래가 멀리 있어 보이겠지만, 지금 이 시점부터 미래가 시작되고 있다.",
                    author: "Mattie Stepanek"
                },
                {
                    id: "enter",
                    subject: "Entertainment",
                    img: require("@assets/image/enter.jpg"),
                    text: "여가를 위해 시간을 낼 줄 모르는 사람은 조만간 병마에게 시간을 빼앗길 것이다.",
                    author: "John Wanamaker"
                },
                {
                    id: "design",
                    subject: "Design",
                    img: require("@assets/image/design.jpg"),
                    text: "모든 예술가에게는 시대의 각인이 찍혀 있다. 위대한 예술가는 그러한 각인이 가장 깊이 새겨져 있는 사람이다.",
                    author: "Henri Émile-Benoit Matiss"
                }
            ]
        }
    },
    components:{
        TedxCard:TedxCard
    }
}
</script>

<style scoped>
.cardContainer{
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    width: 80%;
}
@media (max-width: 1024px){
    .cardContainer{
        flex-direction: column;
        align-items: flex-start;
    }
}

</style>