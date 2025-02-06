<template>
  <div class="section1">

  </div>
  <div class="section12">

  </div>
  <div class="section13">

  </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '/src/sass/variables';

.section1 {
  height: 50vh;
  background-color: rgb(30, 29, 29);
  background-color: #484848;
}
.section12 {
  height: 50vh;
  background-color: rgb(30, 29, 29);
  background-color: #8E8E8E;
}
.section13 {
  height: 50vh;
  background-color: rgb(30, 29, 29);
  background-color: #A9A9A9;
}

.sectioncontainer {
  background-color: #74787c;
    background-color: rgb(30, 29, 29);

  width: 100%;
  height: fit-content; /* Large enough to allow scrolling */
  display: flex;



  .section {
    // background-color: red; /* Solid black background */
    width: 80rem;
    // height: 155rem;
    margin-inline: auto;
    // border: solid green;


    .work-header {
      height: 100vh;
      width: 100%;
      // background-color: orange; /* Solid black background */
      // border: solid red;
      position: sticky; /* Sticky positioning */
      top: 0;
      z-index: 1;
      color: $bgcolorwhite;
      // overflow: hidden;
      // padding-right: 5rem;
      // align-items: center;
      // border: solid;


      .work-text-container {
        height: 100%;
      width: 100%;

        // border: purple solid;
        background-color: $bgcolorblack; /* Solid black background */
        
        // display: flex;
        display: flex;
        align-items: center;
        // border-radius: 0 0 2rem 2rem;

        
        .work-text {
          position: absolute;
          text-align: center;
          // border: solid green;
          // height: 100%;
          // top: 0;
          h1 {
            // font-size: clamp(400px, 0vw,400px); 
            font-size: 35px;
            font-weight: 400;
            // margin: 0;
            // font-size: 20px; /* Dynamically adjust font size */
            text-align: center;
            // color: #333;
            color: $textcolorwhite;
            // width: 100vw;
          }
        }
  
        .work-text1 {
          // border: solid blue;
          width: 33%;
          // background-color: $bgcolorblack; /* Solid black background */
          z-index: 7;
          overflow: hidden;
        }
  
        .work-text2 {
          // border: solid green;
          width: 58%;
          // background-color: $bgcolorblack; /* Solid black background */
          z-index: 6;
          overflow: hidden;
          
        }
  
        .work-text3 {
          border: none;
          // border: solid green;
          width: 79%;
          // background-color: $bgcolorblack; /* Solid black background */
          z-index: 5;
          overflow: hidden;
        }
  
        .work-text4 {
          border: none;
          // border: solid green;
          width: 100%;
          // background-color: $bgcolorblack; /* Solid black background */
          z-index: 4;
          overflow: hidden;
        }

      }

    }

    .works {
      // height: fit-content;
      // border: solid red;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: relative;
      z-index: 2;
      height: fit-content;


      .project {
        height: 28rem;
        // border: solid blue;
        display: flex;
        cursor: pointer;
        
        .image {
          border-radius: 0.7rem;
          width: 43%;
          height: 100%;
          overflow: hidden;
          // border: solid red;
          background-color: black;
          position: relative;

          .overlay {
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.406);
            transition: all 0.1s ease-in;

          }
          

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            // position: relative;
            transition: all 0.6s ease-in;

          }

          
          
        }
        .image:hover {

          .overlay {

            background-color: rgba(0, 0, 0, 0.406);
            backdrop-filter: blur(15px);
            transition: all 0.1s ease-in;
            
          }

          img {
            transform: scale(1.04);
            transition: all 0.5s ease-out;

          }
        }
        

      }
      .project2 {
        justify-content: right;
      }
      .project4 {
        justify-content: right;
      }
    }

    .infinite-scroll {
      height: 7rem;
      width: 100%;
      // border: solid blue;
      border-radius: 0 0 2rem 2rem;
      background-color: $bgcolorblack;
      // white-space: nowrap;
      display: flex;
      gap: 1.3rem;
      overflow: hidden;
      align-items: center;
      position: relative;
      z-index: 2;

      .inner-scroller {
        // width: 50rem;
        color: $textcolorblack;
        // margin-inline: 2rem;
        display: flex;
        gap: 1rem;
        animation: scrollAnimation 5s linear infinite;

        p {
          // margin-inline: 40px;
          white-space: nowrap;
          color: $textcolorwhite;
        }

        .svg {
          min-width: 1rem;

          svg {
            fill: $textcolorwhite;

          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .sectioncontainer {
    .section {
      width: 100vw;
      // border-radius: 0 0 1rem 1rem;

      .work-header {
        height: 16rem;
        background-color: $bgcolorwhite;
        position: relative;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // padding-inline: 0.5rem;
        // border: solid green;

        .work-text-container {
          // border: solid blue;
          height: 100%;

          width: 100%;
          display: flex;
          align-items: center;

          .work-text {
            position: absolute;
            // overflow: hidden;
            // border: solid black;
            // height: 7rem;
            display: flex;
            align-items: center;

            h1 {
              font-size: 31vw; /* Dynamically adjust font size */
              // font-size: 15vw;
              // border: solid red;
            }
          }

          .work-text1 {
            // border: solid blue;
            width: 34%;
            // background-color: $bgcolorwhite; /* Solid black background */
            z-index: 7;
            overflow: hidden;
          }

          .work-text2 {
            width: 59%;
            // background-color: $bgcolorwhite; /* Solid black background */
            z-index: 6;
            overflow: hidden;
          }

          .work-text3 {
            width: 79%;
            // background-color: $bgcolorwhite; /* Solid black background */
            z-index: 5;
            overflow: hidden;
          }

          .work-text4 {
            // border: solid green;
            width: 100%;
            // background-color: $bgcolorwhite; /* Solid black background */
            z-index: 4;
            overflow: hidden;
          }
        }
      }

      .works {
        padding-inline: 0.5rem;

        .project {
          height: 24rem;
          width: 100%;
          // border: none;

          .image {
            width: 100%;
            height: 100%;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }

      .infinite-scroll {
        height: 7rem;
        width: 100%;
        // border: solid blue;
        border-radius: 0 0 2rem 2rem;
        gap: 1.3rem;

        .inner-scroller {
          // border: solid red;
          // width: 50rem;
          color: $textcolorblack;
          // margin-inline: 2rem;
          display: flex;
          gap: 1rem;
          animation: scrollAnimation 5s linear infinite;

          div {
            p {
              // margin-inline: 40px;
              white-space: nowrap;
              font-size: 22px;
              color: $textcolorblackdeepest;
            }
          }

          .svg {
            min-width: 1rem;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
}

@media (max-width: 1200px) and (min-width: 800px) {
  .sectioncontainer {
    .section {
    }
  }
}

@keyframes scrollAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-105%);
  }
}
</style>
