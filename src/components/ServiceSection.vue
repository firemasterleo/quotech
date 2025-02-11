<template>
    <div class="sectioncontainer">
      <div class="section">
<div class="svg">
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' fill='#004C80'><path d='M1000 100C500 100 500 4 0 4V0h1000v100Z'></path></svg>

</div>
<div class="header-text">
    <h1>Services</h1>
</div>
<div class="services">
    <div class="service">
        <div class="image">
          <img src="/src/assets/electric-fence.jpg" loading="lazy" alt="">

        </div>
        <div class="text">
            <h1>Electric Fence</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid adipisci sunt voluptatibus </p>
<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='28' height='28'><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>

        </div>
    </div>
    <div class="service">
        <div class="image">
          <img src="/src/assets/motorized-gate.jpg" loading="lazy" alt="">

        </div>
        <div class="text">
            <h1>Motorized gate</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid adipisci sunt voluptatibus </p>
<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>

        </div>
    </div>
    <div class="service">
        <div class="image">
          <img src="/src/assets/home-automation.jpg" loading="lazy" alt="">

        </div>
        <div class="text">
          <h1>Home Automation </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid adipisci sunt voluptatibus </p>
<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>

        </div>
    </div>
    <div class="service">
        <div class="image">
          <img src="/src/assets/alarm-systems.jpg" loading="lazy" alt="">

        </div>
        <div class="text">
            <h1>Security Alarm Systems</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid adipisci sunt voluptatibus </p>
<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>

        </div>
    </div>
    <div class="service">
        <div class="image">

        </div>
        <div class="text">
            <h1>Consulting & Maintenance Services</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid adipisci sunt voluptatibus </p>
<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='24' height='24'><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>

        </div>
    </div>
</div>
  
      </div>
    </div>
  </template>
  

<script script setup>

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
    .svg {
      svg {
        fill: #004C80;
      }

    }

    .header-text {
      
      color: $primarycolorblack1;

    }
    .services {
      .service {
        .image {

        }
        .text {

        }
      }
    }



  }
}



@media (max-width: 800px) {
  .sectioncontainer {
    height: fit-content;
    .section {
      width: 100vw;
      height: fit-content;

    .header-text {
      // text-align: center;
      margin-bottom: 1rem;
      padding-inline: 1rem;
      h1 {
       font-size: 45px;
      }

    }
    .services {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      // padding-inline: 0.5rem;

      .service {
        height: fit-content;
        // border: solid blue;
        padding: 1rem;
        background: #d6dade;
        // border: 1px solid;
        border-bottom-left-radius: 2rem;
        border-top-right-radius: 2rem;
        .image {
          height: 12rem;
          width: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;

          }
        }
        .text {
          padding-block: 0.5rem;
          display: flex;
          flex-direction: column;
          // gap: 1rem;
h1 {
  font-size: 22px;
  color: $primarycolorblack1;
}
p {
  font-size: 16px;
  font-weight: 400;
  color: $primarycolorblack1;

  // border: solid 1px;
}
          svg {
            rotate: 180deg;
            margin-top: 1rem;
            fill: green;
            width: 28px;
            height: 28px;
          }
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
</style>