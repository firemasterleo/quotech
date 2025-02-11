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

        </div>
        <div class="text">
            <h1>Motorized gate</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid adipisci sunt voluptatibus </p>
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
  background-image: url('https://www.transparenttextures.com/patterns/asfalt-dark.png');

    }

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