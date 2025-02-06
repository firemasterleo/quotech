
<template>
  <!-- v-if="showOverlay"  -->
    <div v-if="showOverlay"  class="overlay">
      <div class="top" ref="top">
        
      </div>
      <div class="bottom" ref="bottom">

      </div>
    <div class="vom">
      <div class="v" ref="v">
        <h3>
          V
        </h3>
      </div>
      <div class="image" ref="logo">
        <svg width="35px" height="35px" viewBox="0 0 104 104" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#BFBFBF" stroke="#BFBFBF">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.624"/>

<g id="SVGRepo_iconCarrier"> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools --> <title>11-multimeda-camera</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="3.Multimedia" stroke-width="1.9760000000000002" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"> <g id="Multimedia-(Color)" transform="translate(-98.000000, -300.000000)" stroke="#263238" stroke-width="1.9760000000000002" fill="rgb(191, 191, 191)"> <g id="11-multimeda-camera" transform="translate(100.000000, 302.000000)"> <path d="M48.385739,99.8603249 C43.9254031,99.7471008 39.6106036,99.0483206 35.5153424,97.8379863 C18.7955864,92.8965446 5.73520678,79.4282608 1.37023842,62.4691696 L1.37023842,62.4691696 L57.1990784,62.4691696 L36.6459451,98.0682408" id="Layer-1"> </path> <path d="M85.276884,85.276884 C72.6108554,97.9589327 53.9329246,102.883915 36.6459451,98.0682408 L64.3981569,50 L84.9512902,85.5990712 L84.9512902,85.5990712 C85.0603829,85.4921143 85.1689146,85.384717 85.276884,85.2768839 L85.276884,85.276884 Z" id="Layer-2"> </path> <path d="M98.1891197,37.0877643 C102.839082,54.3978911 97.7652757,73.0359446 84.9512902,85.5990712 L84.9512902,85.5990712 L57.1990784,37.5308304 L98.3053451,37.5308304 L98.3053451,37.5308304 C98.267264,37.3828749 98.2285211,37.2351851 98.1891197,37.0877643 L98.1891197,37.0877643 Z" id="Layer-3"> </path> <path d="M62.9122357,1.81088034 C80.2282263,6.43895846 93.8323511,20.1520301 98.3053451,37.5308304 L98.3053451,37.5308304 L42.8009216,37.5308304 L63.3540549,1.93175915 C63.2068811,1.89076061 63.0596065,1.85046808 62.9122357,1.81088034 L62.9122357,1.81088034 Z" id="Layer-4"> </path> <path d="M63.3540549,1.93175915 L35.6018431,50 L15.0487098,14.4009288 C14.9396171,14.5078857 14.8310854,14.615283 14.723116,14.7231161 C27.3891446,2.04106731 46.0670754,-2.88391452 63.3540549,1.93175915 Z" id="Layer-5"> </path> <path d="M1.69405707,62.4691696 C-2.75199608,45.2847182 2.34398188,26.8569367 15.0487098,14.4009288 L42.8009216,62.4691696 L1.69405707,62.4691696 L1.69405707,62.4691696 Z" id="Layer-6"> </path> </g> </g> </g> </g>

</svg> 
 </div>
      <div class="m" ref="m">
          <h3>M</h3>
      </div>
    </div>
  </div>



    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <!-- Dynamically render the component with the transition -->
        <component :is="Component" />
      </transition>
    </router-view>
    
</template>

<style lang="scss">
@use '../sass/main.scss';
@import '../sass/variables.scss';


.overlay {
  position: fixed;
  width: 100%;
  height: 100dvh;
  display: flex;
  overflow: hidden;
  
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.5s ease-out;

  .top {
    border :none;
    position:absolute;
    top:0;
    left: 0;
    height: 50.05vh;
    width: 100vw;
    background: $bgcolorblack;
    background: #0A0A0A;

    
  }
  .bottom {
    border :none;

    bottom: 0;
    left: 0;
    height: 50.05vh;
    width: 100vw;
    // border :solid;
    position:absolute;
    background: $bgcolorblack;
    background: #0A0A0A;

  }


  .vom {
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap:4px;
    // border: solid red;
    height: 2.5rem;
    overflow: hidden;

    .v {
      font-size: 30px;
      color: $textcolorwhite;
      // border: solid red;
    }
    .m {
      font-size: 30px;
      color: $textcolorwhite;
      
      // border: solid red;
    }

    .image {
      // width: 2.2rem;
      // height: 2.2rem;
      // border:solid;
      display: flex;
      justify-content: center;
      align-items: center;
svg {
      fill: $textcolorwhite;
      // border: solid red;
}
    }
  }


}
.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>

<script setup>
import { useRouter } from 'vue-router';
import { useRoute} from 'vue-router';

import { onMounted, onBeforeUnmount } from 'vue';
import Header from '../components/Header.vue'; // Adjust path as necessary



import LenisScroll from '../components/LenisScroll.vue';
import gsap from "gsap";

import { ref, onUnmounted } from "vue";

let vomAnimation; // Store animation reference


const showOverlay = ref(true);
let overlayTimeout;

const route = useRoute();
const router = useRouter();

// router.beforeEach((to, from, next) => {
//   showOverlay.value = true; // Show transition screen

//   setTimeout(() => {
//     showOverlay.value = false; // Hide after 1s
//     next(); // Navigate to new route
//   }, 1000);
// });

onMounted(() => {
  overlayTimeout = setTimeout(() => {
    showOverlay.value = false;
  }, 2700);

  vomAnimation = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" }, delay: 0.2 })
    .from(".v", { y: -100, opacity: 0 }) // V enters
    .from(".image", { y: 100, opacity: 0 }, "<") // O enters slightly before V finishes
    .from(".m", { x: 100, opacity: 0, }, "<") // M enters slightly before O finishes
    .to(".v", { y: 100, opacity: 0, delay: 0.8 }) // V exits
    .to(".image", { y: -100, opacity: 0 }, "<") // O exits slightly before V finishes
    .to(".m", { x: 100, opacity: 0 }, "<") // M exits slightly before O finishes

    .to(".top", { y: "-100%", duration: 0.8, ease: "cubic-bezier(0.6, 0, 0.2, 1)" }, "-=0.25")
    .to(".bottom", { y: "100%", duration: 0.8, ease: "cubic-bezier(0.6, 0, 0.2, 1)" }, "<"); // Move down
});
onUnmounted(() => {
  clearTimeout(overlayTimeout); // Prevent timeout memory leaks
  if (vomAnimation) vomAnimation.kill(); // Clean up GSAP animation to prevent memory leaks

});
</script>
