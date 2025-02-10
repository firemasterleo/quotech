
<template>
  <!-- v-if="showOverlay"  -->
   <div  v-if="showOverlay">
     <Overlay/>

   </div>
 

  <div class="sidepanel" :class="{ 'is-expanded': isSidePanelOpen }">
       <SidePanel/>
  </div>
  <div class="sidepanel-overlay" :class="{ 'is-expanded': isSidePanelOpen }" @click="handleItemClick">

  </div>

    <router-view v-slot="{ Component }" > 
      <transition name="fade" mode="out-in" @after-leave="cleanupAnimations"> 
        <!-- Dynamically render the component with the transition -->
        <component :is="Component" />
      </transition>
    </router-view>
    
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
import { useToggleStore } from '../stores/toggleStore';
import gsap from "gsap";
import LenisScroll from '../components/LenisScroll.vue';

import ScrollTrigger from 'gsap/ScrollTrigger';

import SidePanel from '../components/SidePanel.vue'; // Adjust path as necessary
import Overlay from '../components/Overlay.vue';


gsap.registerPlugin(ScrollTrigger);

const toggleStore = useToggleStore();

const isSidePanelOpen = computed(() => toggleStore.isSidePanelOpen);


const showOverlay = ref(true);
let overlayTimeout;

const handleItemClick = () => {
if (toggleStore.isSidePanelOpen) {
  toggleStore.toggleSidePanel(); // used for buttons and  will toggle the side panel off
}
};



//use transition lifecyclehook to clean up animation
const cleanupAnimations = () => {
  console.log('Performing GSAP cleanup after Vue transition...');
  
  ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Remove all ScrollTriggers
  gsap.killTweensOf("*"); // Kill all tweens
  gsap.globalTimeline.clear(); // Ensure global timeline is cleared
  
  // Check if cleanup was successful
  const hasActiveAnimations = gsap.globalTimeline.getChildren().length > 0;
console.log('Are there any active GSAP animations after cleanup?', hasActiveAnimations);


};

// router.beforeEach((to, from, next) => {
//   showOverlay.value = true; // Show transition screen



onMounted(() => {
  overlayTimeout = setTimeout(() => {
    showOverlay.value = false;
  }, 2700);

 
});

</script>

<style lang="scss">
@use '../sass/main.scss';
@import '../sass/variables.scss';

.fade-enter-active, .fade-leave-active {
  opacity: 1;
  // visibility: hidden;
  transition: all 300ms ease-out ;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  // visibility: visible;

  // transition: all 500ms ease;
}
.sidepanel {
  display: none;
}

@media (max-width: 800px) { 

.sidepanel {

                        // opacity: 0;
                        // visibility: hidden;
                        width: 23rem;
                        height: 100vh;
                        transform: translatex(-100%);
                        // padding-top: 6rem;
                        padding-left: 1.5rem;
                        border-radius: 0.6rem;
                        display: flex;
                        flex-direction: column;
                        gap: 1.2rem;
                        overflow-y: hidden;
                        // z-index: 0;
                        position: fixed;
                        // top: 3rem;
                        z-index: 24;
                        opacity: 0;
                        
                        // visibility: hidden;
                        // border: solid red;
                        
                        
                        &.is-expanded {
                          // transition: all 0.35s; 
                          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1) ; 
                          opacity: 1;
  transform: translatex(-10%);
}

                            }

                            .sidepanel-overlay {
                              width: 100vw;
                              height: 100vh;
                              background-color: rgba(0, 0, 0, 0.646);
                              position: fixed;
                              bottom: 0;
                              z-index: 10;
                              opacity: 0;
                              visibility: hidden;
                              transition: opacity 0.2s ease-out, visibility 0s linear 0.5s; 
                                                    
                              
                        &.is-expanded {
                          opacity: 1;
                        visibility: visible;
                        transition: opacity 0.2s ease-in;
                                              
}

                            }
}

</style>