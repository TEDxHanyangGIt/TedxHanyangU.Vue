<template>
  <div>
    
    <Header
      v-bind:headOnColor="headOnColor"
      v-bind:headOffColor="headOffColor"
      v-bind:btnOnColor="btnOnColor"
      v-bind:btnOffColor="btnOffColor" 
    />
    
    <div class="py-10 black" style="text-align: center">
      <div>
        <div colum xs10>
          <h1 class="mb-3 display-2 font-weight-black" style="color: white; margin-top: 5vw; display: flex; justify-content: center;">
            About <VueTyper
                    :text='["Tedx"]'
                    :repeat=1
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='70'
                    :type-delay='70'
                    :pre-erase-delay='2000'
                    :erase-delay='250'
                    erase-style='select-all'
                    :erase-on-complete='false'
                    caret-animation='blink'
                  ></VueTyper>
          </h1>
            <myLine :height="30"/>
          <v-flex class="aboutText"> 
            <div style="color: black; margin: auto; width: 70vw;  margin-bottom: 3vw; margin-top: 10vw ">{{AboutText_ko1}}</div>
            <div style="color: black; margin: auto; width: 70vw;  margin-bottom: 15vw">{{AboutText_en1}}</div>
          </v-flex>
        </div>
        
        <div colum xs10>
          <svg id="svg-sprite">
          <symbol id="paw" viewBox="0 0 249 209.32">
          <image xlink:href="http://icons.veryicon.com/png/System/Icons8%20Metro%20Style/Tracks%20Footprints%20Left%20shoe.png" x="0" y="0" height="100px" width="100px"/>
          </symbol>
          </svg>

          <div class="ajax-loader">
          <div class="paw"><svg class="icon"><use xlink:href="#paw" /></svg></div>
          <div class="paw"><svg class="icon"><use xlink:href="#paw" /></svg></div>
          <div class="paw"><svg class="icon"><use xlink:href="#paw" /></svg></div>
          <div class="paw"><svg class="icon"><use xlink:href="#paw" /></svg></div>
          <div class="paw"><svg class="icon"><use xlink:href="#paw" /></svg></div>
          <div class="paw"><svg class="icon"><use xlink:href="#paw" /></svg></div>
          <div class="paw"><svg class="icon"><use xlink:href="#paw" /></svg></div>
          
          </div>

          <h1 class="mb-3"  style="color: white; margin-top: 10vw;">About <span class="RT">TEDx </span>Hanyang U</h1>
          
            <myLine :height="30"/>
          <v-flex class="aboutText">  
            <div style="color: black; margin: auto; width: 70vw; margin-bottom: 3vw; margin-top:10vw ">{{AboutText_ko2}}</div>
            <div style="color: black; margin: auto; width: 70vw; margin-bottom: 15vw">{{AboutText_en2}}</div>
          </v-flex>
        </div>

        <div colum xs10>
          <h1 class="mb-3" style="color: white; margin-top:10vw;">Connect <span class="type"><span class="RT">TEDx </span>Hanyang U</span></h1>
            <myLine :height="30"/>
          <v-flex class="aboutText_3" style= "height: 60vw;">
            <div style="color: black; margin: auto; width: 70vw; margin-bottom: 3vw; margin-top: 10vw">{{AboutText_ko3}}</div>
            <div style="color: black; margin: auto; width: 70vw">{{AboutText_en3}}</div>
            
            <div class="grid">
                <div class="grid__item">
                    <div class="card"><img class="card__img" src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="youtube_img">
                        <div class="card__content">
                            <h1 class="card__header">YOU TUBE</h1>
                            <p class="card__text">더 많은 영상을 시청하세요. </p><button class="card__btn" type="button" a herf="#" onclick="window.open('https://www.youtube.com/results?search_query=tedxhanyangu','youtube'); return false">Explore <span>&rarr;</span></button></div>
                    </div>
                </div>
                <div class="grid__item">
                    <div class="card"><img class="card__img" src="https://images.unsplash.com/photo-1505322747495-6afdd3b70760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="insta_img">
                        <div class="card__content">
                            <h1 class="card__header">INSTAGRAM</h1>
                            <p class="card__text">더 많은 소식을 살펴보세요.</p><button class="card__btn" type="button" a herf="#" onclick="window.open('https://www.instagram.com/tedxhanyangu_2020/','instagram'); return false" >Explore <span>&rarr;</span></button></div>
                    </div>
                </div>
                <div class="grid__item">
                    <div class="card"><img class="card__img" src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" alt="facebook_img">
                        <div class="card__content">
                            <h1 class="card__header">FACE BOOK</h1>
                            <p class="card__text">더 많은 소식을 살펴보세요.</p><button class="card__btn" type="button" a herf="#" onclick="window.open('https://www.facebook.com/TEDxHanyangU/','facebook'); return false">Explore <span>&rarr;</span></button></div>
                    </div>
                </div>
            </div>
          </v-flex>
        </div>
      </div>
    </div>
    <footer class="footer mt-10" style="text-align: center;"> © TedxHanyangU, All Rights Reserved
    </footer> 
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import {AboutText_ko1, AboutText_en1,AboutText_ko2, AboutText_en2,AboutText_ko3, AboutText_en3} from '@/constant.js'
import myLine from '@components/About/Line'
export default {
  name: "About",
  data() {
    return {
      AboutText_ko1, AboutText_en1,
      AboutText_ko2, AboutText_en2,
      AboutText_ko3, AboutText_en3,
      headOnColor: "rgba(255, 255, 255, 1)",
      headOffColor: "rgba(255, 255, 255, 0)",
      btnOnColor: "black",
      btnOffColor: "white"
    }
  },
  components: {
    myLine: myLine,
    VueTyper: VueTyper
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@200;300&display=swap');
Header{
  background-color: black;
}
section {
  background-color: black;
  height: 1000px;  
}
.RT{
  color: red;
  
}
.mb-3 {
  font-family: 'Permanent Marker', cursive;
  font-size: 50px;
}

.aboutText{
  display: flex;
  flex-direction: column;
  background-color: white;
  border-bottom-left-radius: 5vw;
  border-bottom-right-radius: 5vw;
  box-shadow: 5px 5px 5px 5px gray;
  height: 40vw;
  font-size: larger;
  font-family: 'Gothic A1', sans-serif;
}

.aboutText_3{
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 5px 5px 5px 5px gray;
  height: 40vw;
  font-size: larger;
  font-family: 'Gothic A1', sans-serif;
}

.vue-typer{
    margin-left: 15px;
}
.vue-typer .custom.char.typed {
  color: red;
}


@media screen and (max-width: 1196px){
  .aboutText {
    height: auto;
  }
}

@media screen and (max-width: 707px){
  .aboutText_3 {
  height: 80vw;
  }
  
}

/* */
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}




.grid {
  
  justify-content: center;
  align-content: center;
  padding: 6rem;
  background-color: white;
  font-family: 'Gothic A1', sans-serif;
  box-sizing: border-box;
  
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  width: 100%;
  grid-gap: 6rem;
  grid-auto-rows: auto;
  align-items: start;
}

.grid__item {
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s;

  
}
.grid__item:hover {
  transform: translateY(-0.5%);
  box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
}

.card__img {
  display: block;
  width: 100%;
  height: 15rem;
  object-fit: cover;
}
.card__content {
  padding: 1rem 1rem;

}
.card__header {
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
  color: red;
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


@media screen and (max-width: 890px){
.grid {
  display: flex;
  flex-direction: column;
  
}
}

@media screen and (max-width: 500px){
.grid__item {
  font-size: 0.7rem;
}

}

.footer {
    position: absolute;;
    bottom:0;
    width:100%;  
}


.ajax-loader, .ajax-loader2, .ajax-loader3, .ajax-loader4 {
  position: absolute;
  transform-origin: 50% 50%;
  font-size: 80px;
  width: 1em;
  height: 3em;
  color: #d31145;
}
.ajax-loader .paw, .ajax-loader2 .paw, .ajax-loader3 .paw, .ajax-loader4 .paw {
  width: 1.5em;
  height: 1em;
  animation: 2050ms pawAnimation ease-in-out infinite;
  opacity: 0;
}
.ajax-loader .paw svg, .ajax-loader2 .paw svg, .ajax-loader3 .paw svg, .ajax-loader4 .paw svg {
  width: 100%;
  height: 100%;
}
.ajax-loader .paw .icon, .ajax-loader2 .paw .icon, .ajax-loader3 .paw .icon, .ajax-loader4 .paw .icon {
  fill: #d31145;
}
.ajax-loader .paw:nth-child(odd), .ajax-loader2 .paw:nth-child(odd), .ajax-loader3 .paw:nth-child(odd), .ajax-loader4 .paw:nth-child(odd) {
  transform: rotate(0deg);
}
.ajax-loader .paw:nth-child(even), .ajax-loader2 .paw:nth-child(even), .ajax-loader3 .paw:nth-child(even), .ajax-loader4 .paw:nth-child(even) {
  transform: rotate(0deg) scaleX(-1) translate(15%, -50%);
}
.ajax-loader .paw:nth-child(1), .ajax-loader2 .paw:nth-child(1), .ajax-loader3 .paw:nth-child(1), .ajax-loader4 .paw:nth-child(1) {
  animation-delay: 2.25s;
  transform: rotate(0deg) translate3d(-4%, -48%, 0);
}
.ajax-loader .paw:nth-child(1), .ajax-loader2 .paw:nth-child(1), .ajax-loader3 .paw:nth-child(1), .ajax-loader4 .paw:nth-child(1) {
  animation-delay: 2.25s;
  transform: rotate(-8deg) translate3d(30%, -50%, 0);
}
.ajax-loader .paw:nth-child(2), .ajax-loader2 .paw:nth-child(2), .ajax-loader3 .paw:nth-child(2), .ajax-loader4 .paw:nth-child(2) {
  animation-delay: 2s;
  transform: rotate(0deg) scaleX(-1) translate3d(10%, -100%, 0);
}
.ajax-loader .paw:nth-child(2), .ajax-loader2 .paw:nth-child(2), .ajax-loader3 .paw:nth-child(2), .ajax-loader4 .paw:nth-child(2) {
  animation-delay: 2s;
  transform: rotate(-8deg) scaleX(-1) translate3d(-30%, -120%, 0);
}
.ajax-loader .paw:nth-child(3), .ajax-loader2 .paw:nth-child(3), .ajax-loader3 .paw:nth-child(3), .ajax-loader4 .paw:nth-child(3) {
  animation-delay: 1.75s;
  transform: rotate(0deg) translate3d(-12%, -144%, 0);
}
.ajax-loader .paw:nth-child(3), .ajax-loader2 .paw:nth-child(3), .ajax-loader3 .paw:nth-child(3), .ajax-loader4 .paw:nth-child(3) {
  animation-delay: 1.75s;
  transform: rotate(0deg) translate3d(45%, -144%, 0);
}
.ajax-loader .paw:nth-child(4), .ajax-loader2 .paw:nth-child(4), .ajax-loader3 .paw:nth-child(4), .ajax-loader4 .paw:nth-child(4) {
  animation-delay: 1.5s;
  transform: rotate(0deg) scaleX(-1) translate3d(20%, -200%, 0);
}
.ajax-loader .paw:nth-child(4), .ajax-loader2 .paw:nth-child(4), .ajax-loader3 .paw:nth-child(4), .ajax-loader4 .paw:nth-child(4) {
  animation-delay: 1.5s;
  transform: rotate(0deg) scaleX(-1) translate3d(-32%, -200%, 0);
}
.ajax-loader .paw:nth-child(5), .ajax-loader2 .paw:nth-child(5), .ajax-loader3 .paw:nth-child(5), .ajax-loader4 .paw:nth-child(5) {
  animation-delay: 1.25s;
  transform: rotate(0deg) translate3d(-20%, -240%, 0);
}
.ajax-loader .paw:nth-child(5), .ajax-loader2 .paw:nth-child(5), .ajax-loader3 .paw:nth-child(5), .ajax-loader4 .paw:nth-child(5) {
  animation-delay: 1.25s;
  transform: rotate(0deg) translate3d(40%, -240%, 0);
}
.ajax-loader .paw:nth-child(6), .ajax-loader2 .paw:nth-child(6), .ajax-loader3 .paw:nth-child(6), .ajax-loader4 .paw:nth-child(6) {
  animation-delay: 1s;
  transform: rotate(0deg) scaleX(-1) translate3d(30%, -300%, 0);
}
.ajax-loader .paw:nth-child(6), .ajax-loader2 .paw:nth-child(6), .ajax-loader3 .paw:nth-child(6), .ajax-loader4 .paw:nth-child(6) {
  animation-delay: 1s;
  transform: rotate(0deg) scaleX(-1) translate3d(-30%, -300%, 0);
}
.ajax-loader .paw:nth-child(7), .ajax-loader2 .paw:nth-child(7), .ajax-loader3 .paw:nth-child(7), .ajax-loader4 .paw:nth-child(7) {
  animation-delay: 0.75s;
  transform: rotate(0deg) translate3d(-28%, -336%, 0);
}
.ajax-loader .paw:nth-child(7), .ajax-loader2 .paw:nth-child(7), .ajax-loader3 .paw:nth-child(7), .ajax-loader4 .paw:nth-child(7) {
  animation-delay: 0.75s;
  transform: rotate(1deg) translate3d(7%, -336%, 0);
}
.ajax-loader .paw:nth-child(8), .ajax-loader2 .paw:nth-child(8), .ajax-loader3 .paw:nth-child(8), .ajax-loader4 .paw:nth-child(8) {
  animation-delay: 0.5s;
  transform: rotate(0deg) scaleX(-1) translate3d(40%, -400%, 0);
}
.ajax-loader .paw:nth-child(8), .ajax-loader2 .paw:nth-child(8), .ajax-loader3 .paw:nth-child(8), .ajax-loader4 .paw:nth-child(8) {
  animation-delay: 0.5s;
  transform: rotate(1deg) scaleX(-1) translate3d(8%, -400%, 0);
}
.ajax-loader .paw:nth-child(9), .ajax-loader2 .paw:nth-child(9), .ajax-loader3 .paw:nth-child(9), .ajax-loader4 .paw:nth-child(9) {
  animation-delay: 0.25s;
  transform: rotate(0deg) translate3d(-36%, -432%, 0);
}
.ajax-loader .paw:nth-child(10), .ajax-loader2 .paw:nth-child(10), .ajax-loader3 .paw:nth-child(10), .ajax-loader4 .paw:nth-child(10) {
  animation-delay: 0s;
  transform: rotate(0deg) scaleX(-1) translate3d(50%, -500%, 0);
}
.no-cssanimations .ajax-loader .paw, .no-cssanimations .ajax-loader2 .paw, .no-cssanimations .ajax-loader3 .paw, .no-cssanimations .ajax-loader4 .paw {
  opacity: 1;
}

.ajax-loader {
  top: 15%;
  left: 10%;
  transform: rotate(10deg) translate(-50%, 0%);
}

.ajax-loader2 {
  top: 15%;
  right: 20%;
  transform: rotate(-10deg) translate(-50%, 0%);
}

.ajax-loader3 {
  top: 45%;
  left: 30%;
  transform: rotate(150deg) translate(-50%, 0%);
}

.ajax-loader4 {
  top: 45%;
  right: 35%;
  transform: rotate(200deg) translate(-50%, 0%);
}

@keyframes pawAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes path1 {
  0% {
    transform: rotate(0deg) scaleX(-1) translate3d(0%, -50%, 0);
  }
  30% {
    transform: rotate(20deg) scaleX(-1) translate3d(-35%, -60%, 0);
  }
  100% {
    transform: rotate(20deg) scaleX(-1) translate3d(0%, -80%, 0);
  }
}
</style>
