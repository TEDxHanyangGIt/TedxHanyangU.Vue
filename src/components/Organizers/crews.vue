<template>
<div class="frame">
    <profile
        v-for="data in crewList"
        :key="data.id"
        :data="data"/>
</div>
</template>

<script>
import profile from "@components/Organizers/profile"
export default {
    name: "crews",
    data(){
        return{
            crewList: [
                {
                    id: "1",
                    name: "selena",
                    img:  "https://t1.daumcdn.net/liveboard/kncom/10889702ee3246e990f427f5e4c5bc79.JPG",
                    comment: "ice cream"
                },
                {
                    id: "2",
                    name: "gomez",
                    img:  "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F0313AE4251CE463C26",
                    comment: "퀸카"
                },
                {
                    id: "3",
                    name: "selena gomez",
                    img: "https://photo.newsen.com/news_photo/2018/02/08/201802081639420410_1.jpg",
                    comment: "청멜빵도 잘 어울려"
                },
                {
                    id: "4",
                    name: "ari",
                    img:  "https://image.chosun.com/sitedata/image/201809/15/2018091501155_0.jpg",
                    comment: "over the rainbow"
                },
                {
                    id: "5",
                    name: "taylor",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrkyjilptT9HlxB7U7aDmYFUChVq-uB71LLw&usqp=CAU",
                    comment: "sweet"
                },
                {
                    id: "6",
                    name: "lose you love me",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnrAvW4WYlXZ2RmmCdVPCdgO7G_Ow8mkqJhw&usqp=CAU",
                    comment: "rare앨범 띵반"
                },
                {
                    id: "7",
                    name: "루루루",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQQ5xdJgXm8DXfd2foyyfvRZqh209Tez-sJg&usqp=CAU",
                    comment: "back to u"
                },
                {
                    id: "8",
                    name: "camila",
                    img:  "https://file3.instiz.net/data/file3/2018/02/03/e/c/d/ecd1be6a794eb9683d8cde7baa7f6d22.jpg",
                    comment: "cabello"
                },
                {
                    id: "9",
                    name: "윤아",
                    img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6M18V5h-8lHdp86Kdkr4_jo6DlfrKv_J5Q&usqp=CAU",
                    comment: "영화관가고 시펑"
                },
                {
                    id: "10",
                    name: "나오미 스콧",
                    img: "https://lh3.googleusercontent.com/proxy/ntO4nd7d_xczOIYhHoRflCUgNRG3PY-GCWgH2xFLtlmflJ4_qoAet5uDrb9M0xLKPudaN1Yi25qRFRczxJnbF8LBFaw23t2h2R4IFHMjga274p-T99-fdZ0ZpvQLqGElL5bkS1F_Wao7yPjeROFXhOqxyNzzc5TZfra5XGypTPsXMUoSHRRnCX7wDSLnREWVcRIRnN1aD6M6QhF3XfE6uRKykEPb1oAUXJk5a5aKamd--uSaRl--1iDY-fS9uH7CfDZTUGxX0JXUSFIbnSQss7-feyiPrvQbCSVb3A",
                    comment: "어 홀뉴 월드~~~~노원 텔 어쩌구 드리밍"
                }
                
            ]
        }

    },
    components: {
        profile: profile
    }
}
</script>

<style scoped>
.frame {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    margin-left: 350px;
    position: relative;
    box-sizing: border-box;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    justify-content: space-between;
    align-content: stretch;
    -webkit-box-align: stretch;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    }
@media (max-width: 800px){
    .frame{
        margin-left: auto;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>