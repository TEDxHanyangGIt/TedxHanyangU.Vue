<template>
    <v-hover >
        <template v-slot:default="{hover}">
            <v-card>
                <v-img
                    :src="talk.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="50vw"
                >
                </v-img>
                <v-fade-transition>
                    <v-overlay
                        v-if="hover"
                        absolute
                        color="#FFFFFF"
                    >
                        <button><v-card-title v-text="talk.title"></v-card-title></button>
                       
                    </v-overlay>
                </v-fade-transition>
            </v-card>
        </template>
    </v-hover>
</template>

<script>
export default {
    name: "TalkCard",
    props: ["talk"],
    data(){
        return {
            overlay: false
        }
    } 
}
</script>