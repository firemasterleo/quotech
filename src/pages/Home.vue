<template>
    <div class="body">
      
        <Header />
        <HeroSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />

      </div>

</template>

<style lang="scss" scoped>

 .body {
  background: #0A0A0A;
    
    // border: solid red;
    width: 100vw;
    height: fit-content;
    // overflow-x: scroll ;

    // margin-inline: auto;
    position: relative;
}


</style>

<script setup>
import { onMounted,onBeforeUnmount, nextTick } from 'vue';

import HeroSection from '../components/HeroSection.vue'; // Adjust path as necessary
import Section2 from '../components/Section2.vue'; // Adjust path as necessary
import Section3 from '../components/Section3.vue'; // Adjust path as necessary
import Section4 from '../components/Section4.vue'; // Adjust path as necessary
import SectionA from '../components/SectionA.vue'; // Adjust path as necessary
import Footer from '../components/Footer.vue'; // Adjust path as necessary
import Header from '../components/Header.vue'; // Adjust path as necessary


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  window.scrollTo(0, 0); // Ensures scroll resets after the fade transition is done

});


onBeforeUnmount(() => {
  setTimeout(() => {
    nextTick(() => {  //use nexttick cos we dont want the animation stuck in the last dom
      console.log('DOM is fully updated, performing cleanup...');
  
      // Perform cleanup logic after the new route's DOM is fully updated and rendered
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();  // Clean up GSAP animations
      mm.revert(); // Revert matchMedia if necessary
  
    });
  },300); // important Adjust the timeout duration to balance with the router .fade-enter-active, .fade-leave-active in applayout

  
});  


</script>