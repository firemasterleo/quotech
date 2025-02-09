<template>
    <div class="body">

      <Header/>

      <AboutSection1 />
      <Section4 />


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
import { ref, computed, onMounted,onBeforeUnmount, nextTick } from 'vue';


import AboutSection1 from '../components/about/AboutSection1.vue'; // Adjust path as necessary
import Footer from '/src/components/Footer.vue'; // Adjust path as necessary
import Header from '/src/components/Header.vue'; // Adjust path as necessary
import Section4 from '/src/components/Section4.vue'; // Adjust path as necessary


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
  window.scrollTo(0, 0); // Ensures scroll resets after the fade transition is done

});





</script>