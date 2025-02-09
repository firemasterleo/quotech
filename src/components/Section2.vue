<template>
    <div class="sectioncontainer">
      <div class="section">
        <div style="color: black;"  class="counter">0</div>
  
      </div>
    </div>
  </template>
  

  <script setup>
  import { onMounted } from "vue";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  gsap.registerPlugin(ScrollTrigger);
  
  onMounted(() => {
    gsap.fromTo(
      ".counter",
      { innerHTML: 0 },
      {
        innerHTML: 65,
        duration: 2.5,
        scrollTrigger: {
          trigger: ".counter",
          start: "top 90%", // Animation triggers when .counter is 80% in view
          once: true // Run only once
        },
        snap: { innerHTML: 1 }, // Ensures whole number transitions
        ease: "power1.out",
        onUpdate: function () {
          document.querySelector(".counter").innerText = Math.floor(this.targets()[0].innerHTML);
        }
      }
    );
  });
  </script>

<style lang="scss" scoped>
 @import '/src/sass/variables';
.sectioncontainer {
  background-color: rgb(70, 96, 181); /* Solid black background */
  width: 100%;
  height: 100vh; /* Large enough to allow scrolling */
display: flex;


  .section {
  background-color: $bgcolordeepwhite; /* Solid black background */
    width: 80rem;
    height: 100vh; /* Full viewport height */
    margin-inline: auto;

  }
}



@media (max-width: 800px) {
  .sectioncontainer {
    .section {
      width: 100vw;
      height: 100vh;
    }
  }
}
@media (max-width: 1200px) and (min-width: 800px) {
  .sectioncontainer {
    .section {

    }
  }
}
</style>
