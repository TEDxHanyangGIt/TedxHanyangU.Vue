<template>
<div>
    <Header
        v-bind:headOnColor="headOnColor"
        v-bind:headOffColor="headOffColor"
        v-bind:btnOnColor="btnOnColor"
        v-bind:btnOffColor="btnOffColor" 
    />

    <div class="frame">
        <div class="card-border">
            <div class="card">
                <div class="content">
                    <h2 class="title">김승희</h2>
                    <p class="text">노는게 제일좋아 코로나 그만해 </p>
                    <div class="profile-social-media-container">
                    <ul>
                        <li class="social-media">
                            <img src="../assets/image/iconFacebook.png"
                                alt="Facebook icon"></li>
                        <li class="social-media">
                            <img src="../assets/image/iconYoutube.png"
                                alt="Twitter icon"></li>
                        <li class="social-media">
                            <img src="../assets/image/iconInstagram.png"
                                alt="Instagram icon"></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card-border">
            <div class="card">
                <div class="content">
                    <h2 class="title">김승희</h2>
                    <p class="text">마스크 안쓰면 과태료</p>
                    <div class="profile-social-media-container">
                    <ul>
                        <li class="social-media">
                            <img src="../assets/image/fa_facebook.png"
                                alt="Facebook icon"></li>
                        <li class="social-media">
                            <img src="../assets/image/fa_twitter.png"
                                alt="Twitter icon"></li>
                        <li class="social-media">
                            <img src="../assets/image/fa_instagram.png"
                                alt="Instagram icon"></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="card-border">
            <div class="card">
                <div class="content">
                    <h2 class="title">김승희</h2>
                    <p class="text">기술팀의 천사 승희^^</p>
                    
                </div>
            </div>
        </div>
    </div> 
</div>          
</template>

<script>
export default {
    name: 'Organizers',
    data(){
    return{
        headOnColor: "rgba(255, 255, 255, 1)",
        headOffColor: "rgba(255, 255, 255, 0)",
        btnOnColor: "black",
        btnOffColor: "white"
    }
    }
    
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;800;900&display=swap');

*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

:root {
    --d: 700ms;
    --e: cubic-bezier(0.19, 1, 0.22, 1);
    }

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(252, 250, 250,1) 0%, rgba(250,250,250,1) 100.2% );}

.frame {
    padding-top: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    width: 1100px;
}

.card {  
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    color: whitesmoke;
    cursor: pointer;
    overflow: hidden;
    z-index: 10;
    pointer-events: auto;
}

.card-border {
    position: relative;
    width: 320px;
    height: 460px;
    z-index: 9;
    pointer-events: none;
    
}


.card-border:after,
.card-border:before {
    content: "";
    left: -20px;
    bottom: -20px;
    right:-20px;
    top: -20px;
    position: absolute;
    transition: transform 0.3s ease-in-out;
}

.card-border:before {
    transform: scaleY(0);
}

.card-border:after {
    transform: scaleX(0);
}

.card-border:nth-child(1) .card{
    background-image: url("../assets/image/seunghee.jpg");
    background-size: 100% 100%;
}

.card-border:nth-child(2) .card{
    background-image: url("../assets/image/seunghee.jpg");
    background-size: 100% 100%;
}

.card-border:nth-child(3) .card{
    background-image: url("../assets/image/seunghee.jpg");
    background-size: 100% 100%;
}


.card-border:nth-child(1):before {
    border-left: 6px solid #c62828;
    border-right: 6px solid #c62828;
}

.card-border:nth-child(1):after {
    border-bottom: 6px solid #c62828;
    border-top: 6px solid #c62828;
}

.card-border:nth-child(2):before {
    border-left: 6px solid #ff5f52;
    border-right: 6px solid #ff5f52;
}

.card-border:nth-child(2):after {
    border-bottom: 6px solid #ff5f52;
    border-top: 6px solid #ff5f52;
}

.card-border:nth-child(3):before {
    border-left: 6px solid #8e0000;
    border-right: 6px solid #8e0000;
}

.card-border:nth-child(3):after {
    border-bottom: 6px solid #8e0000;
    border-top: 6px solid #8e0000;
}

.card-border:hover:before {
    transform: scaleY(1);
}

.card-border:hover:after {
    transform: scaleX(1); 
}

.content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    transition: transform var(--d) var(--e);
    z-index: 1;
}

.content {
    transform: translateY(calc(100% - 4.5rem));
}

.card-border:nth-child(2) .content {
    transform: translateY(calc(100% - 6.5rem));
}

.card-border:nth-child(3) .content {
    transform: translateY(calc(100% - 6.5rem));
}

.content:after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.009) 11.7%,
    hsla(0, 0%, 0%, 0.034) 22.1%,
    hsla(0, 0%, 0%, 0.072) 31.2%,
    hsla(0, 0%, 0%, 0.123) 39.4%,
    hsla(0, 0%, 0%, 0.182) 46.6%,
    hsla(0, 0%, 0%, 0.249) 53.1%,
    hsla(0, 0%, 0%, 0.320) 58.9%,
    hsla(0, 0%, 0%, 0.394) 64.3%,
    hsla(0, 0%, 0%, 0.468) 69.3%,
    hsla(0, 0%, 0%, 0.540) 74.1%,
    hsla(0, 0%, 0%, 0.607) 78.8%,
    hsla(0, 0%, 0%, 0.668) 83.6%,
    hsla(0, 0%, 0%, 0.721) 88.7%,
    hsla(0, 0%, 0%, 0.762) 94.1%,
    hsla(0, 0%, 0%, 0.790) 100%
    );
    transform: translateY(-50%);
  transition: transform calc(var(--d) * 2) var(--e);
    opacity: 0;
}


.card:hover .content {
    transform: translateY(0);
}

.card:hover .content::after {
    opacity: 1;
}

.content > *:not(.title) {
    opacity: 0;
    transform: translateY(1rem);
    transition: transform var(--d) var(--e), opacity var(--d) var(--e);
}

.card:hover .content {
    transform: translateY(0);
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(var(--d) / 8);
}

.card:hover .content > *:not(.title) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(var(--d) / 8);
}

.title{
    width: 100%;
    font-size: 1.6rem;
    z-index: 2;
    margin-bottom: 1rem;
}

.text {
    font-size: 1rem;
    line-height: 1.8rem;
    z-index: 2;
}

.profile-social-media-container {
    width: 100%;
    margin: 0px auto;
}

.profile-social-media-container ul {
    width: 50%;
    margin: 0px auto;
    padding: 0px;
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
}

.social-media {
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
    cursor: pointer;
    transform: translateY(0px);
    transition: all 0.2s ease;
}

.social-media img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
}

.social-media:hover {
    transform: translateY(-2.5px);
}
</style>