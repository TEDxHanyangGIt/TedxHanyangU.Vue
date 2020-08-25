<template>
    <div>
        <Header
            v-bind:headOnColor="headOnColor"
            v-bind:headOffColor="headOffColor"
            v-bind:btnOnColor="btnOnColor"
            v-bind:btnOffColor="btnOffColor" 
        />
        <open />  
        <selects />
        <profile />
        <timeline />
    </div>
</template>   

<script>
import profile from '@components/Organizers/profile'
import timeline from '@components/Organizers/timeline'
import open from '@components/Organizers/open'
import selects from '@components/Organizers/selects'

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
        open: open,
        profile: profile,
        timeline: timeline,
        selects: selects
        
    }
};
</script>

<style>
</style>