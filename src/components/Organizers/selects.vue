<template>
    <v-container fluid style="margin-top: 50px">
        <v-row align="center" justify="end">
            <v-col class="d-flex" cols="12" sm="6">
                <v-select
                :items="items"
                label="Select Team"
                solo
                ></v-select>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name:"selects",
    data() {
        return {
            items: [
                "전체보기",
                "디렉터",
                "대외협력팀",
                "디자인팀",
                "홍보팀",
                "연사섭외팀",
                "기술팀"
            ]
        }
    }
}
</script>

<style scoped>


.styled-select {
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    margin-left: 60rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
}
.styled-select, .styled-select select {
    width: 220px;
    }

select:focus { 
    outline: none; 
    }

.styled-select select {
    height: 34px;
    padding: 5px 0 5px 5px;
    background: transparent;
    border: none;
    /*hide default down arrow in webkit */
    -webkit-appearance: none; 
}

@-moz-document url-prefix(){
    .styled-select select { width: 110%; }
}
</style>