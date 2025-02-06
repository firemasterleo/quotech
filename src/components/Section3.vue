<template>
  <div class="section3container" >
    <div class="section3">
      <div class="text-container">
        <div class="child">
          <div class="inner-child child1" ref="child1">
            <div class="infant infant1">
              <h1 ref="story"> STORY</h1>
              <div class="p-text" ref="story2">
              <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='10' height='10'><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>
  
                <p >Each photograph becomes a chapter, capturing heartfelt emotions and cherished memories that come together to tell a story you'll treasure forever.</p>
  
              </div>

            </div>
          </div >
          </div>
        <div class="child">
          <div class="inner-child child2" ref="child2">
            <div class="infant infant2">

              <h1 ref="vision">VISION</h1>
              <div class="p-text" ref="vision2">
              <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='10' height='10'><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>
  
                <p>Every single frame becomes a canvas where boundless imagination meets artistic vision, transforming fleeting moments into awe-inspiring visual masterpieces.</p>
  
              </div>
            </div>
          </div>
  
        </div>
        <div class="child">
          <div class="inner-child child3" ref="child3">
            <div class="infant infant3">
              <h1 ref="quality">QUALITY</h1>
              <div class="p-text" ref="quality2">
              <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='10' height='10'><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path></svg>
  
                <p >Crafted with precision and care, each image reflects a timeless standard of excellence, preserving your moments in stunning detail.</p>
  
              </div>

            </div>
          </div>
    
        </div>

      </div>
      <div class="video-container">
        <video autoplay muted loop playsinline>
          <source src="https://res.cloudinary.com/dgdnews6i/video/upload/v1737901329/vom-video2_1_uyjy7d.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
 @import '../sass/variables';
.section3container {
  background-color: rgb(0, 0, 0); /* Solid black background */
  width: 100vw;
  height: 160vh; /* Large enough to allow scrolling */
  position: relative;
  z-index: 11;
  display: flex;
  // border: solid red;



  .section3 {
    position: sticky;
    top: 0;
    width: 80rem;
    height: 100vh; /* Full viewport height */
    margin-inline: auto;


    .video-container {
      width: 100%; /* Full width of the container */
      height: 100%; /* Full height of the container */

      video {
        object-fit: cover; /* Ensures video fills the container */
        width: 100%; /* Match container width */
        height: 100%; /* Match container height */
      }
    }
    .text-container {
      position: absolute;
      height: 100vh;
      width: 100%;
      // border: solid blue;
      display: flex;
      flex-direction: column;
      z-index: 1;
      
      
      .child {
        flex: 1;
        // border: solid red;
        overflow: hidden;
        
        .inner-child {
          padding-inline: 1.2rem;
          border-top: solid 1px black;
         background-color: #A9A9A9;



          height: 100%;
          display: flex;
          align-items: center;
         
          
          .infant {
            // border: solid black;
          display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70%;
        overflow: hidden;
        gap: 0.5rem;

        
        

          h1 {
            font-family: Lato;
            font-size: 170px;
            font-weight: 400;
            color: $textcolorblackdeeper;
            color: #1A1A1A;  
  
          }
          .p-text {
            // border: solid red;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-bottom: 1rem;
            padding-top: 1rem;
      
            width: 27%;
  
          position: relative;
          height: 10rem;
  
            svg {
              top: 0;
            }
            p {
              // font-family: Grotesk;
              font-weight: 700;
              color: $textcolorblackdeeper;
              font-size: 15px;
              // border: solid;
              // margin-top: 0.5rem;
    
              
    
            }
          }
        }
        


        }
        .child2 {
          .infant {
            flex-direction: row-reverse;

          }
        }
      }
      
      
    }

  }
}

// .text {
//   /* Uncomment if needed */
//   position: sticky;
//   top: 0;
// }

@media (max-width: 800px) {
  .section3container {
    width: 100%;
    // border: solid;
    // overflow-x: hidden;
    .section3 {
      // width: 100vw;
      height: 100vh;

      .video-container {
        width: 100%;
        height: 100%;

        video {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      .text-container {
        .child {


          .inner-child {
        
            padding-inline: 0.5rem;
            
            .infant {
            align-items: flex-start;
          flex-direction: column;
          justify-content: center;
        height: 100%;


            h1 {
          font-size: 72px;
  
        }
        .p-text {
  
          width: 100%;
          height: fit-content;
          font-size: 14px;
          line-height: 20px;
          padding-top: 0;

  
  
          svg {
            display: none;
          }
          p {
  
            font-weight: 500;
            color: $textcolorblack;
            
   
            
  
          }
        }
          }


          }
        }
      }
    }
  }
}
@media (max-width: 1200px) and (min-width: 800px) {
  .section3container {
    .section3 {


      .video-container {


        video {

        }
      }
      .text-container {
        .child {


          .inner-child {
        
            
            .infant {



            h1 {
          font-size: 100px;
  
        }
        .p-text {
  
          width: 37%;
          font-size: 14px;
          height: 8rem;


  
          svg {
            // display: none;
          }
          p {
  
            font-weight: 500;
            color: $textcolorblack;
            
   
            
  
          }
        }
          }


          }
        }
      }
    }
  }
}
</style>


<script setup>
import { ref, onMounted, onBeforeUnmount,onUnmounted, nextTick  } from 'vue';

const router = useRouter(); 
import { useRouter } from 'vue-router';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const child1 = ref(null);
const child2 = ref(null);
const child3 = ref(null);

const story = ref(null);
const story2 = ref(null);
const vision = ref(null);
const vision2 = ref(null);
const quality = ref(null);
const quality2 = ref(null);

let mm = gsap.matchMedia();


onMounted(() => {

  // Parallax effect for child elements on scroll
  gsap.to([child1.value], {
    y: '-105%', // Moves the element up by 120% of its height    ease: 'none', // Use 'none' for linear movement
    scrollTrigger: {
      trigger: ".child1", // The container that triggers the scroll
      start: 'top+=40%  top', // When the top of the trigger meets the top of the viewport
      end: 'bottom  top', // When the bottom of the trigger meets the bottom of the viewport
      scrub: 0.5, // Smooth scrubbing with a slight lag
      invalidateOnRefresh: true, // Recalculate start/end on resize or refresh

      // markers: true, // Uncomment to visualize start and end points
    },
  });
    // Parallax effect for child2 (slower speed)
    gsap.to(child2.value, {
    y: '-105%', // Moves child2 up by 80%
    // ease: 'none',
    scrollTrigger: {
      trigger: ".child2",
      start: 'top-=52% top', // When the top of the trigger meets the top of the viewport
      end: 'top+=17% top',
      scrub: 0.5, // Smooth scrubbing with a slight lag
      invalidateOnRefresh: true, // Recalculate start/end on resize or refresh

      // markers: true,
      
    },
  });

  // Parallax effect for child3 (fastest speed)
  gsap.to(child3.value, {
    y: '-105%', // Moves child3 up by 150%
    ease: 'none',
    scrollTrigger: {
      trigger: ".child3",
      start: 'top-=145% top', // When the top of the trigger meets the top of the viewport
      end: 'top-=80% top',
      scrub: 0.5,
      invalidateOnRefresh: true, // Recalculate start/end on resize or refresh
       // Smooth scrubbing with a slight lag
      // markers: true,


    },
  });
 

  mm.add("(min-width: 800px)", () => {

      gsap.fromTo(
        [story.value, story2.value],
        { y: '110%' },  // Start from off-screen (bottom)
        {
          y: '0%', // Move to normal position (0%)
          ease: "cubic-bezier(0.25, 1, 0.5, 1)",
          
          scrollTrigger: {
            trigger: '.infant1', // The element that triggers the animation
            start: 'top 89%',   // Start when the top of the element hits the bottom of the viewport
            end: 'bottom 92%',     // End when the bottom of the element reaches the top of the viewport
            scrub: 1,  
      // invalidateOnRefresh: true, // Recalculate start/end on resize or refresh
      // Smooth scrubbing with slight delay
            // markers: true,       // Uncomment for debugging
          }
        },
        
      );
      gsap.fromTo(
        [vision.value, vision2.value],
        { y: '100%' },  // Start from off-screen (bottom)
        {
          y: '0%', // Move to normal position (0%)
          ease: "cubic-bezier(0.25, 1, 0.5, 1)",
          scrollTrigger: {
            trigger: '.infant2', // The element that triggers the animation
            start: 'top 89%',   // Start when the top of the element hits the bottom of the viewport
            end: 'bottom 97%',     // End when the bottom of the element reaches the top of the viewport
            scrub: 1, 
      // invalidateOnRefresh: true, // Recalculate start/end on resize or refresh
      // Smooth scrubbing with slight delay
            // markers: true,       // Uncomment for debugging
          }
        }
      );
      gsap.fromTo(
        [quality.value, quality2.value],
        { y: '100%' },  // Start from off-screen (bottom)
        {
          y: '0%', // Move to normal position (0%)
          ease: "cubic-bezier(0.25, 1, 0.5, 1)",
          scrollTrigger: {
            trigger: '.infant3', // The element that triggers the animation
            start: 'top 89%',   // Start when the top of the element hits the bottom of the viewport
            end: 'bottom 100%',     // End when the bottom of the element reaches the top of the viewport
            scrub: 1, 
      invalidateOnRefresh: true, // Recalculate start/end on resize or refresh
      // Smooth scrubbing with slight delay
      // markers: true,       // Uncomment for debugging
    }
  }
);
});


});



// Listen to route changes for cleanup after route transition
router.afterEach(() => {
  // Use setTimeout to ensure there's a visual update in between
  
  
});






// onBeforeUnmount(() => {
//   setTimeout(() => {
//     nextTick(() => {
//       console.log('DOM is fully updated, performing cleanup...');
  
//       // Perform cleanup logic after the new route's DOM is fully updated and rendered
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       gsap.globalTimeline.clear();  // Clean up GSAP animations
//       mm.revert(); // Revert matchMedia if necessary
  
//     });
//   },); // Adjust the timeout duration (in milliseconds) if necessary

// });  


</script>