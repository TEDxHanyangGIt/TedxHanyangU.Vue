<template>

    <div class="styled-select">
            <select>
                <option>전체보기</option>
                <option>디렉터</option>
                <option>대외협력팀</option>
                <option>디자인팀</option>
                <option>홍보팀</option>
                <option>연사섭외팀</option>
                <option>기술팀</option>
                
            </select>
    </div>  
</template>

<script>
export default {
    name:"selects",
    data() {
        return {

        }
    },
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