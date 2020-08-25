<template>
<div class="title">
    <div class="overlay">
        <h1>organizers</h1>
        <h2>tedxhanyang 18th</h2>
        <p>?????소갯말</p>
    </div>
</div>
</template>

<script>
export default {
    name: "open"
}
</script>

<style scoped>
*{padding: 0; margin: 0; box-sizing: border-box;}
body{height: 900px;}
.title {
    background: url('https://martawilson.com/wp-content/uploads/2015/10/17d8d21.png');
    text-align: center;
    width: 100%;
    height: auto;
    background-size: contain;
    background-attachment: fixed;
    position: relative;
    overflow: hidden;
    border-radius: 0 0 85% 85% / 30%;
}
.overlay{
    width: 100%;
    height: 100%;
    padding: 50px;
    color: #FFF;
    text-shadow: 1px 1px 1px #333;
    
    
}

h1 {
    font-family: "tvNE";
    font-size: 90px;
    margin-bottom: 30px;
    margin-top: 100px;
}

h2, p {
    font-family: "tvNE";
    margin-bottom: 40px;
}

</style>

