<template>
    <div class="sectioncontainer">
      <div class="section">
          <div class="right-section">
                <h2>
                    <span>Keep Your Home Safe!</span><br>With our State-of-the-art Electric fence, Motorized gate & Security Alarm Systems.
                </h2>
                <div class="buttons">
                    <button>
                        Our Services
                    </button>
                    <button>
                        Contact Us
                    </button>
                </div>
            </div>
            <div class="left-section">
                <div class="image" ref="image">
                    <img :src="imageStore.heroImage" loading="eager" decoding="async" />

                    </div>
            </div>
  
      </div>
    </div>
  </template>
  

<script script setup>
import {onMounted} from 'vue';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useImageStore } from "../stores/imageStore";

const imageStore = useImageStore();

gsap.registerPlugin(ScrollTrigger);


let heroAnimation; // Store animation reference

onMounted(() => {

    heroAnimation = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" }, delay: 0.2 })
  .from(".image", { y: 100, opacity: 0 }) // V enters
  .to(".image", { y: 0, duration: 0.8, ease: "cubic-bezier(0.6, 0, 0.2, 1)" }, "<"); // Move down
});

</script>

<style lang="scss" scoped>
 @import '/src/sass/variables';
.sectioncontainer {
//   background-color: rgb(70, 96, 181); /* Solid black background */
  width: 100%;
  height: 100vh; /* Large enough to allow scrolling */
display: flex;


  .section {
  background-color: #004c80; /* Solid black background */
  background-image: url('https://www.transparenttextures.com/patterns/asfalt-dark.png');


//   background: linear-gradient(to right, #004c80, #004d80ed);
  width: 80rem;
    height: 100%; /* Full viewport height */
    margin-inline: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    // border: solid red;
    padding-left: 5rem;
    padding-right: 2rem;


    .right-section {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        // border: solid;

        h1 {
            color: $textcolorwhite;
            font-weight: 600;
            font-size: 54px;
        }

        h2 {
            color: $textcolorwhite;
            font-weight: 600;
            font-size: 22px;
            span {
                font-weight: 700;
                font-size: 40px;
            }
        }

        .buttons {
            display: flex;
            gap: 1rem;

            button {
                padding-inline: 1rem;
                border-radius: 1rem;
                height: 1.7rem;
                color: #004c80;
                
                border: none;
            }
        }

    }
    .left-section {
        width: 60%;
        height: 80%;
        margin-top: 5rem;
  gap: 10px; /* Space between grid items */
  border-radius: 3rem;
//   border: solid red;
// overflow: hidden;

.image {
    width: 100%;
    height: 100%;
    // border: solid red;
    overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: scale-down;
            }
        }
    }

  }
}



@media (max-width: 800px) {
  .sectioncontainer {
      height: 110vh;
    .section {
      width: 100vw;
      height: 100%;
    display: block;
      padding-top: 6rem;
      padding-inline: 0rem;
  
      
      .right-section {
            padding-inline: 1rem;
        //   border: solid red;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h2 {
            color: $textcolorwhite;
            span {
                font-size: 36px;
            }
        }

        .buttons {
            display: flex;
            gap: 1rem;

            button {
                padding-inline: 1rem;
                border-radius: 1rem;
                height: 2.2rem;
                color: #004c80;
                font-size: 18px;
                font-weight: 500;
                
                border: none;
            }
        }

    }
    .left-section {
        width: 100%;
        height: fit-content;
        margin-top: 4rem;
        // margin-inline: -1rem;
        // gap: 10px; /* Space between grid items */
        border-radius: 0rem;
        // border: solid red;
        // overflow: hidden;

        .image {
            width: 100vw;
            height: 100%;
            // border: solid red;
            overflow: hidden;
            // overflow: visible;

                    img {
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }
                }
            }
            }
        }
}
@media (max-width: 1050px) and (min-width: 800px) {
  .sectioncontainer {
    height: 120vh;
    .section {

    }
  }
}
</style>