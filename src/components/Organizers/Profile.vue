<template>
    <div class="card-border">
        <div class="card">
            <img :src="organizer.img">
            <div class="content">
                <h2 class="title">{{ organizer.name }}<span>/{{ organizer.team }}</span></h2>
                <p class="text">{{organizer.comment }} </p>
                <div class="snsBox">
                    <SnsBotton 
                        v-for="sns in organizer.snsList"
                        :key="`${organizer.id}-${sns.snstype}-${sns.snsimg}`"
                        v-bind:sns="sns" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SnsBotton from '@components/Organizers/SnsBotton'
export default {
    name: "Profile",
    props: ["organizer"],
    components: {
        SnsBotton: SnsBotton
    }
}
</script>

<style scoped>
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

.card {  
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    color: whitesmoke;
    cursor: pointer;
    overflow: hidden;
    z-index: 2;
    pointer-events: auto;
}

.card-border {
    position: relative;
    width: 270px;
    height: 350px;
    z-index: 1;
    pointer-events: none;
    margin-bottom:5rem; 
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


.card-border .card img{
    max-width: 100%;
    max-height: 100%;
    width: 270px;
    height: 350px;
    position: absolute;
    object-fit: cover;
}

.card-border:before {
    border-left: 6px solid #D50000;
    border-right: 6px solid #D50000;
}

.card-border:after {
    border-bottom: 6px solid  #D50000;
    border-top: 6px solid  #D50000;
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
    z-index: -1;
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
span {
    font-size: small;
    z-index: 2;
    margin-bottom: 1rem;
}

.text {
    font-size: 1rem;
    line-height: 1.8rem;
    z-index: 2;
}

.snsBox{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>