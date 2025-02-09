<template>

  <div class="content">
      <div class="sidebarcontainer">
      <div class="sidebarsection">
          <div class="sidebar">
            <div class="logo">
              <h1>Quotech</h1>
            </div>
              <div class="menu">
                  <router-link to="/" exact-active-class="active">
                      <div class="home" @click="handleItemClick">  
                          <p>Home</p>
                      </div>
                    </router-link>
                  <router-link to="/About" exact-active-class="active">
                      <div class="home" @click="handleItemClick">  
                          <p>About</p>
                      </div>
                    </router-link>
                  <router-link to="/Services" exact-active-class="active">
                      <div class="home" @click="handleItemClick">  
                          <p>Services</p>
                      </div>
                    </router-link>
                    
                  </div>
                 
          </div>
      </div>
      </div>
  </div>
</template>




<style lang="scss" scoped>
@import '../sass/variables';
@import '../sass/main';


.content {
  // border: solid green ;
  // overflow: hidden;
  
  .sidebarcontainer {
      // border: solid red;
      background-color: $bgcolordeepwhite; /* Solid black background */
      width: 100%;
      height: 40rem;
      padding-inline: 1rem;
      outline: none; /* Remove the default outline */
      box-shadow: 0 0 0 0.1px ;   //remove outline and use box shadow for thinnest line 
      


  .sidebarsection {
      // height: 50rem;
      width: 100%;
      // border: solid red;
      
      .sidebar {
        display: flex;
        flex-direction: column;
        gap: 2rem;
          // padding-top: 1.5rem;
          // border: solid blue;
          .logo {
            padding-left:1rem ;
            // letter-spacing: 6px;
                font-size: 12px;
                position: relative; /* Ensure proper layering */
                background: transparent;
                // border: solid;
                height: 3.2rem;
                display: flex;
                align-items: center;

                h1 {
                    color: $primarycolorblue;
                    position: relative; /* Ensure it stays in front */
          /* Make it behave like a button */
                }
          }
          .menu {
              // border: solid;
              display: flex;
              flex-direction: column;
              border-bottom: solid 1px rgba(255, 255, 255, 0.162);
              padding-bottom: 0.5rem;
              // gap: 1rem;
              div {
                  // border: solid;
                  padding-top: 0.5rem;
                  border-radius: 0.5rem;
                  padding-bottom: 0.5rem;
                  display: flex;
                  gap: 0.5rem;
                  align-items: center;
                  cursor: pointer;
                  padding-inline: 0.5rem;


                  p {
                -webkit-tap-highlight-color: transparent;

                      font-size: 20px;
                      font-weight: 500;
                      color: $primarycolorblue;
                    }
                    p:active {
                      
                      color: $primarycolorblue;
                  }

              }

              // .active {
              //     border-radius: 0.5rem;
              //     background-color: $primarycolorblue;

              //     p {
              //         color: $bgcolordeepwhite;
              //     }

              // }
              
          }
          }
          }
          }

        


}


@media (max-width: 800px) {
  .content {

      .sidebarcontainer {
          // width: fit-content;
          height: calc(100vh - 2.8rem);
      }
  }

} 




</style>

<script setup>
import { ref, computed } from 'vue';

import { useToggleStore } from '../stores/toggleStore';
import { useRouter } from 'vue-router';



const toggleStore = useToggleStore();
const router = useRouter();



const handleItemClick = () => {
if (toggleStore.isSidePanelOpen) {
  toggleStore.toggleSidePanel(); // used for buttons and  will toggle the side panel off
}
};



</script>
