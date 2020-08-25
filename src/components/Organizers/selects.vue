<template>
    <div class="dropdown">
        <a href="#" class="js-link">전체보기 <i class="fa fa-chevron-down"></i></a>
        <ul class="js-dropdown-list">
            <li>전체보기</li>
            <li>디렉터</li>
            <li>대외협력팀</li>
            <li>디자인팀</li>
            <li>연사섭외팀</li>
            <li>행사기획팀</li>
            <li>홍보팀</li>
            <li>기술팀</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"selects",
    data() {
        return {

        }
    },
    // computed: {
    //     $(function() {
    //         var list = $('.js-dropdown-list');
    //         var link = $('.js-link');
    //         link.click(function(e) {
    //             e.preventDefault();
    //             list.slideToggle(200);
    //         });
    //         list.find('li').click(function() {
    //             var text = $(this).html();
    //             var icon = '<i class="fa fa-chevron-down"></i>';
    //             link.html(text+icon);
    //             list.slideToggle(200);
    //             if (text === '* Reset') {
    //             link.html('Select one option'+icon);
    //             }
    //         });
    //         })
    // }

}

</script>

<style scoped>
a, li {
    transition: background 0.35s ease;
}
/*Base*/
* {
    box-sizing: border-box;
}
html, body {
    width: 100%;
    height: 100%;
}
/*Typography*/
html {
    font: 16px Verdana;
}
h1 {
    font-size: 1.2em;
}
li {
    font-size: 1em;
}
/*Layout*/
/*Dropdown*/
.dropdown {
    margin: 2em auto;
    width: 14.5em;
    border: 0.1em solid #c0cdd1;
}
a {
    display: block;
    padding: 0.5em;
    color: #000;
    text-decoration: none;
}
a:focus, a:hover {
    background: #ecf0f1;
}
a:active {
    background: #fbfcfc;
}
.fa {
    float: right;
}
/*List*/
ul {
    display: none;
    border-top: 0.1em solid #c0cdd1;
}
li {
    padding: 0.5em;
    cursor: pointer;
}
li:not(:first-child) {
    border-top: 0.1em dashed #dde4e6;
}
li:last-child {
    color: #ad0000;
}
li:focus, li:hover {
    background: #ecf0f1;
}
li:active {
    background: #fbfcfc;
}

</style>>