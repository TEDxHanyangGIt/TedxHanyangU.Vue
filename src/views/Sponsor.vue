<template>
    <fragment>
        <Header
            v-bind:headOnColor="headOnColor"
            v-bind:headOffColor="headOffColor"
            v-bind:btnOnColor="btnOnColor"
            v-bind:btnOffColor="btnOffColor" 
        />
        <Toptitle />
        <!-- <Nmap /> -->
        <div class="container">
            <strong class="title">Crossing the Line, Together</strong>
            <p>tedxhanyang은 자신이 하는 일에 열정을 가진 사람들이 공유할 가치가 있는 아이디어를 나누는 행사입니다.<br>
                우리는 사랑의 실천을 바탕으로, 다양한 학문의 지식을 통해 폭넓은 교육을 받은 근면정직한 교양인으로 성장하려합니다.<br>
                학문적 이론에 집중하는 교양인을 넘어, 실천적 교양인이 되고자 하는 tedxhanyang와 함께 손을 잡은 파트너가 있습니다.<br>
                파트너는 이 활동을 적극적으로 지원하며, 같은 아이디어를 열정적으로 공유합니다. </p>
        </div>
        <PartnerCard></PartnerCard>
    </fragment>
</template> 

<script>
import PartnerCard from '@components/Sponsor/PartnerCard'
import Toptitle from '@components/Sponsor/Toptitle'
// import Nmap from '@components/Sponsor/Nmap'
export default {
    name: "Sponsor",
    data() {
        return {
            headOnColor: "rgba(255, 255, 255, 1)",
            headOffColor: "rgba(255, 255, 255, 0)",
            btnOnColor: "black",
            btnOffColor: "white"
        }
    },
    components: {
        PartnerCard: PartnerCard,
        Toptitle:Toptitle
        // Nmap:Nmap
    }
};
</script>

<style>
body {
background-color: #EBEBEB;
}
</style>