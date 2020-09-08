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
        <crews />
        <!-- <timeline /> -->
    </div>
</template>   

<script>
import crews from '@components/Organizers/crews'
// import timeline from '@components/Organizers/timeline'
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
        crews: crews,
        // timeline: timeline,
        selects: selects
        
    }
};
</script>

<style>
</style>