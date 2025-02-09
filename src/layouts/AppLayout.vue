
<template>
  <!-- v-if="showOverlay"  -->
    <div v-if="showOverlay"  class="overlay">
      <div class="top" ref="top">
        
      </div>
      <div class="bottom" ref="bottom">

      </div>
    <div class="vom">
      <div class="q" ref="q">
        <h3>
          Q
        </h3>
      </div>
      <div class="u" ref="u">
            <h3>
              U
            </h3>
      </div>
      <div class="o" ref="o">
          <h3>O</h3>
      </div>
      <div class="t" ref="t">
          <h3>T</h3>
      </div>
      <div class="e" ref="e">
          <h3>E</h3>
      </div>
      <div class="c" ref="c">
          <h3>C</h3>
      </div>
      <div class="h" ref="h">
          <h3>H</h3>
      </div>
    </div>
  </div>

  <div class="sidepanel" :class="{ 'is-expanded': isSidePanelOpen }">
       <SidePanel/>
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
    background-color: $bgcolordeepwhite; /* Solid black background */
    // background-color: rgba(255, 255, 255, 0.057);


    
  }
  .bottom {
    border :none;

    bottom: 0;
    left: 0;
    height: 50.05vh;
    width: 100vw;
    // border :solid;
    position:absolute;
    background-color: $bgcolordeepwhite; /* Solid black background */
    // background-color: rgba(0, 0, 0, 0.224);



  }


  .vom {
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap:4px;
    // border: solid red;
    height: 2.5rem;
    overflow: hidden;

    .q {
      font-size: 30px;
      color: #004c80;
      // border: solid red;
    }
    .u {
      font-size: 30px;
      color: #004c80;
      
      // border: solid red;
    }
    .o {
      font-size: 30px;
      color: #004c80;
      
      // border: solid red;
    }
    .t {
      font-size: 30px;
      color: #004c80;
      
      // border: solid red;
    }
    .e {
      font-size: 30px;
      color: #004c80;
      
      // border: solid red;
    }
    .c {
      font-size: 30px;
      color: #004c80;
      
      // border: solid red;
    }
    .h {
      font-size: 30px;
      color: #004c80;
      
      // border: solid red;
    }

  }


}
.fade-enter-active, .fade-leave-active {
  transition: opacity 300ms ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.sidepanel {
  display: none;
}

@media (max-width: 800px) { 

.sidepanel {

                        // opacity: 0;
                        // visibility: hidden;
                        width: 23rem;
                        height: calc(100vh - 3rem);
                        transform: translatex(-100%);
                        // padding-top: 6rem;
                        padding-left: 1.5rem;
                        border-radius: 0.6rem;
                        display: flex;
                        flex-direction: column;
                        gap: 1.2rem;
                        overflow-y: hidden;
                        // z-index: 0;
                        transition: all 0.2s; 
                        position: fixed;
                        // top: 3rem;
                        z-index: 24;
                                           
                        // visibility: hidden;
                        // border: solid red;
                
                        
                        &.is-expanded {
  transform: translatex(-10%);
}

                            }
}

</style>

<script setup>
import { useRouter } from 'vue-router';
import { useRoute} from 'vue-router';
import { ref, computed, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
import { useToggleStore } from '../stores/toggleStore';


import LenisScroll from '../components/LenisScroll.vue';
import gsap from "gsap";

import SidePanel from '../components/SidePanel.vue'; // Adjust path as necessary

const toggleStore = useToggleStore();

const isSidePanelOpen = computed(() => toggleStore.isSidePanelOpen);


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
const handleItemClick = () => {
  if (toggleStore.isSidePanelOpen) {
    toggleStore.toggleSidePanel(); // used for buttons and  will toggle the side panel off
  }
};


onMounted(() => {
  overlayTimeout = setTimeout(() => {
    showOverlay.value = false;
  }, 2700);

  vomAnimation = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" }, delay: 0.2 })
    .from(".q", { y: -100, opacity: 0 }) // V enters
    .from(".u", { y: 100, opacity: 0 }, "<") // O enters slightly before V finishes
    .from(".o", { y: -100, opacity: 0, }, "<") // M enters slightly before O finishes
    .from(".t", { y: 100, opacity: 0, }, "<") // M enters slightly before O finishes
    .from(".e", { y: -100, opacity: 0, }, "<") // M enters slightly before O finishes
    .from(".c", { y: 100, opacity: 0, }, "<") // M enters slightly before O finishes
    .from(".h", { y: -100, opacity: 0, }, "<") // M enters slightly before O finishes
    .to(".q", { y: 100, opacity: 0, delay: 0.8 }) // V exits
    .to(".u", { y: -100, opacity: 0 }, "<") // O exits slightly before V finishes
    .to(".o", { y: 100, opacity: 0 }, "<") // M exits slightly before O finishes
    .to(".t", { y: -100, opacity: 0 }, "<") // M exits slightly before O finishes
    .to(".e", { y: 100, opacity: 0 }, "<") // M exits slightly before O finishes
    .to(".c", { y: -100, opacity: 0 }, "<") // M exits slightly before O finishes
    .to(".h", { y: 100, opacity: 0 }, "<") // M exits slightly before O finishes

    .to(".top", { y: "-100%", duration: 0.8, ease: "cubic-bezier(0.6, 0, 0.2, 1)" }, "-=0.25")
    .to(".bottom", { y: "100%", duration: 0.8, ease: "cubic-bezier(0.6, 0, 0.2, 1)" }, "<"); // Move down
});
onUnmounted(() => {
  clearTimeout(overlayTimeout); // Prevent timeout memory leaks
  if (vomAnimation) vomAnimation.kill(); // Clean up GSAP animation to prevent memory leaks

});
</script>
