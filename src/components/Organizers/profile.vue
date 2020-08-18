<template>
<div class="container">
        <div class="profile-design-lines"></div>
        <div class="content-container">
            <div class="profile-image-container">
                <img src="image/seunghee.jpg" alt="profile pic">
            </div>
            <div class="profile-quote-container">
                <p class="profile-quote">
                    천사승희임 무튼 천사임 개강하기 싫음
                </p>
            </div>
        </div>
        <p class="profile-name">김승희</p>
        <div class="profile-social-media-container">
            <ul>
                <li class="social-media">
                    <a href="#" class="fa fa-facebook"></a>
                    <!-- <img src="https://res.cloudinary.com/drymsmld5/image/upload/v1559935979/Codepen/profile%20card/fb_yt2np4.png"
                        alt="Facebook icon"></li> -->
                <li class="social-media">
                    <img src="https://res.cloudinary.com/drymsmld5/image/upload/v1559935980/Codepen/profile%20card/twitter_xadwxu.png"
                        alt="Twitter icon"></li>
                <li class="social-media">
                    <img src="https://res.cloudinary.com/drymsmld5/image/upload/v1559935979/Codepen/profile%20card/instagram_qseuhj.png"
                        alt="Instagram icon"></li>
            </ul>
        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Dancing+Script");

* {
    box-sizing: border-box;
}

:root {
    --gray-color: #1d1e23;
    --red-color: red ;
}



.container {
    background: url("https://res.cloudinary.com/drymsmld5/image/upload/v1559935979/Codepen/profile%20card/container-bg_fjzgws.png")
        center/cover no-repeat;
    width: 50px;
    /* max-width: 30em; */
    margin: 0 auto;
    box-shadow: 2px 2px 4px 1px #999999;
}
.profile-design-lines {
    width: 8rem;
    height: 3rem;
    position: relative;
    top: 0px;    
}

/* BLOB CSS ANIMATION */
@keyframes blob-animation {
    0% {
        border-radius: 50% 32% 20% 70%/60% 40% 55% 40%;
    }

    25% {
        border-radius: 40% 57% 40% 81% / 84% 76% 45% 38%;
    }

    50% {
        border-radius: 25% 68% 40% 46% / 59% 36% 45% 38%;
    }

    75% {
        border-radius: 40% 27% 26% 58%/70% 36% 64% 32%;
    }

    100% {
        border-radius: 50% 32% 20% 70%/60% 40% 55% 40%;
    }
}

.content-container {
    width: 90%;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}

.profile-image-container {
    width: 250px;
    height: 250px;
    margin: 0px auto;
    vertical-align: middle;
}

.profile-image-container img {
    animation: blob-animation 2.5s linear infinite;
    border: 2px solid var(--red-color);
    border-radius: 50% 32% 20% 70%/60% 40% 55% 40%;
    width: 100%;
    height: 100%;
}

.profile-quote-container {
    background-color: var(--red-color);
    padding: 0.8rem;
    }

.profile-quote {
    letter-spacing: 1px;
}

.profile-name {
    text-align: center;
    background-color: var(--red-color);
    color:#fff;
    font-size: 2.5rem;
    font-family: "Dancing Script", cursive;
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

.fa-facebook {
    background: #3B5998;
    color: white;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
}
@media screen and (max-width:830px){
    .container{
        width: 85%;
    }
    .content-container{
        grid-template-columns: 1fr;
        width: 100%;
    }
    .content-container .profile-image-container{
        padding: 1rem;
    }

    
}

@media screen  and (max-width:420px){
    .container{
        width: 95%;
    }
}
</style>