<template>
    <div class="profile-social-media-container" :id="data.id">
        <div class="social-media"> 
            <img :src="data.img">
            <button></button>
        </div>    
    </div>                
    
</template>

<script>
export default {
    name: "Sns",
    props: ["data"]
    
        }
    
</script>

<style scoped>
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