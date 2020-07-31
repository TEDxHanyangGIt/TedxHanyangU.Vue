<template>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
export default {
    name: "EventBack"
}
</script>

<style scoped>
.box div{position: absolute; width: 60px; height: 60px; background-color: transparent; border-radius: 20px; margin: 20px;}
.box div:nth-child(1){top: 12%;left: 14%; animation: animate 10s linear infinite, change 13s linear infinite;}
.box div:nth-child(2){top: 70%;left: 50%; animation: animate 7s linear infinite, change 11s linear infinite;}
.box div:nth-child(3){top: 17%;left: 6%; animation: animate 9s linear infinite, change 17s linear infinite;}
.box div:nth-child(4){top: 20%;left: 60%; animation: animate 10s linear infinite, change 6s linear infinite;}
.box div:nth-child(5){top: 67%;left: 6%; animation: animate 6s linear infinite, change 12s linear infinite;}
.box div:nth-child(6){top: 80%;left: 70%; animation: animate 12s linear infinite, change 8s linear infinite;}
.box div:nth-child(7){top: 60%;left: 80%; animation: animate 15s linear infinite, change 13s linear infinite;}
.box div:nth-child(8){top: 32%;left: 25%; animation: animate 16s linear infinite, change 11s linear infinite;}
.box div:nth-child(9){top: 90%;left: 25%; animation: animate 9s linear infinite, change 14s linear infinite;}
.box div:nth-child(10){top: 20%;left: 80%; animation: animate 5s linear infinite, change 7s linear infinite;}

@keyframes animate {
    0%{
        transform: scale(0) translateY(0) rotate(0);
        opacity: 1;
    }
    100%{
        transform: scale(1.3) translateY(-90px) rotate(360deg);
        opacity: 0;
    }
}

@keyframes change {
    from{border: 6px solid white;box-shadow: 0px 0px 20px 5px rgba(255,255,255, 1);}
    50%{border: 6px solid rgba(255,0,0, 0.6);box-shadow: 0px 0px 10px 5px rgba(255,0,0, 0.6);}
    to{border: 6px solid white;box-shadow: 0px 0px 20px 5px rgba(255,255,255, 1);}
}

</style>