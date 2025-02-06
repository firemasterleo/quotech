<template>
    <div class="body">

      <Header/>

      <AboutSection1 />

        <Footer />

      </div>

</template>

<style lang="scss" scoped>

 .body {
    background-color: black;
    // border: solid red;
    width: 100%;
    height: fit-content;
    // overflow-x: hidden ;
}


</style>

<script setup>
import { onMounted,onBeforeUnmount, nextTick } from 'vue';


import AboutSection1 from '../components/about/AboutSection1.vue'; // Adjust path as necessary
import Footer from '/src/components/Footer.vue'; // Adjust path as necessary
import Header from '/src/components/Header.vue'; // Adjust path as necessary


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
  window.scrollTo(0, 0); // Ensures scroll resets after the fade transition is done

});


onBeforeUnmount(() => {
  setTimeout(() => {
    nextTick(() => {
      console.log('DOM is fully updated, performing cleanup...');
  
      // Perform cleanup logic after the new route's DOM is fully updated and rendered
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();  // Clean up GSAP animations
      mm.revert(); // Revert matchMedia if necessary
  
    });
  },300); // important Adjust the timeout duration to balance with the router .fade-enter-active, .fade-leave-active in applayout

});  


</script>