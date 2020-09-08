<template>
    <fragment>
        <Header
            v-bind:headOnColor="headOnColor"
            v-bind:headOffColor="headOffColor"
            v-bind:btnOnColor="btnOnColor"
            v-bind:btnOffColor="btnOffColor" 
        />
        <div id="organizers">
            <TopTitle />
            <OrganizerBoard />
        </div>
    </fragment>
</template>   

<script>
import TopTitle from '@components/Organizers/TopTitle'
import OrganizerBoard from '@components/Organizers/OrganizerBoard'

export default {
    name: "Organizers",
    data() {
        return {
            headOnColor: "rgba(255, 255, 255, 1)",
            headOffColor: "rgba(255, 255, 255, 0)",
            btnOnColor: "black",
            btnOffColor: "white"
        }
    },
    components: {
        TopTitle: TopTitle,
        OrganizerBoard: OrganizerBoard
    }
};
</script>

<style>
</style>