<template>
    <div class="sectioncontainer">
      <div class="section">

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
background-image: url('https://www.transparenttextures.com/patterns/asfalt-dark.png');
background-color: #C2C2C2;

    width: 80rem;
    height: 100vh; /* Full viewport height */
    margin-inline: auto;
position: relative;
padding-inline: 1rem;
.top-container {
    .hero-text {
        margin-top: 12rem;
p {
    font-size: 22px;
    font-weight: 600;
    color: #1A1A1A;
}
    }
    .mid-text {
        display: flex;
        justify-content: space-between;
        margin-top: 5.5rem;

        p {
            font-size: 12px;
            font-weight: 600;
            color: #1A1A1A;
            font-family: "Orbitron", serif;
            // letter-spacing: 1px;
             }


        .projects {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .contact {
            display: flex;
            flex-direction: column;
            gap: 8px;
            p{
                padding-bottom: 4px;
                width: fit-content;
                
                border-bottom: solid 1px;

                
            }
            

            .email {
                margin-bottom: 1rem;

            }
        }
    }
}

.image-container {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;

   align-items: flex-end;
    .image {
        flex: 1;
        width: 100%;
        // background-color: black;

    

        img {
            align-items: flex-end;
            width: 100%;
            height: 100%;
            object-fit: cover;
            // mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 100%, rgba(0, 0, 0, 0.8) 100%);
        }
    }
    .image1 {
        height: 20vh;
    }
    .image2 {
height: 25vh;
    }
    .image3 {
        height: 30vh;

    }
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