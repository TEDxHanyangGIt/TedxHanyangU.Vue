<template>
    <div class="cardBox">
        <div class="card">
            <img class="card__img" :src="sns.img" alt="youtube_img">
            <div class="card__content">
                <h1 class="card__header" style="font-family: Roboto-Black; font-size: 35px">{{sns.sns}}</h1>
                <v-btn
                  rounded
                  x-large
                  :elevation="5"
                  @click="goSNS"
                >
                  {{sns.gossns}}<span style="margin-left: 10px;">&rarr;</span>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SNScard",
    props: ["sns"],
    methods: {
        goSNS(){
            console.log(this.sns)
            window.open(this.sns.snsurl);
            return false;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}


.cardBox {
  z-index: 100;
  background-color: #fff;
  margin: 20px;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.grid__item:hover {
  transform: translateY(-0.5%);
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
}

.cardImg {
  display: block;
  width: 32vh;
  height: 18vh;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
@media screen and (max-width: 900px){
    .cardBox{
      width: 80vw;
    }
    .cardImg {
        width: 80vw;
        height: 45vw;
    }
}

.cardContent {
  padding: 1rem 1rem;
}
.cardHeader {
  font-size: 1.5rem;
  font-weight: 500;
  color: #0d0d0d;
  margin-bottom: 1.5rem;
  
}
.card__text {
  font-size: 1.rem;
  letter-spacing: 0.1rem;
  line-height: 1.7;
  color: #3d3d3d;
  margin-bottom: 2.5rem;
}
.card__btn {
  display: block;
  width: 100%;
  padding: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
  color: white;
  background-color: #ff9999;
  border: none;
  border-radius: 0.4rem;
  transition: 0.2s;
  cursor: pointer;
}
.card__btn span {
  margin-left: 1rem;
  transition: 0.2s;
}
.card__btn:hover, .card__btn:active {
  background-color: #ff6666;
}
.card__btn:hover span, .card__btn:active span {
  margin-left: 1.5rem;
}
</style>