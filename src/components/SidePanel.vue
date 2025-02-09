<template>
  <div class="content">
      <div class="sidebarcontainer">
      <div class="sidebarsection">
          <div class="sidebar">
              <div class="menu">
                  <router-link to="/" exact-active-class="active">
                      <div class="home" @click="handleItemClick">
                          <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='18' height='18'><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
  
                          <p>Home</p>
                      </div>
                    </router-link>
                  <router-link to="/About" exact-active-class="active">
                      <div class="home" @click="handleItemClick">
                          <svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24' fill='#000000' width='18' height='18'><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
  
                          <p>About</p>
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
      background-color: #004c80; /* Solid black background */
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
          padding-top: 1.5rem;
          // border: solid blue;
          .user-profile {
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 2rem; /* Adjust height as needed */
              padding: 0.5rem;
              border-radius: 8px;
              margin-bottom: 1rem;
              .profile-info {
                  h2 {
                      font-size: 14px;
              
                  }
              }
              .avatar {
                  border: solid 1.5px rgb(113, 109, 109);
                  width: 1.5rem; /* Adjust size of the avatar container */
                  height: 1.5rem; /* Same as width for a square avatar */
                  border-radius: 50%; /* Round shape */
                  overflow: hidden; /* Ensures the image stays within the bounds */
                  margin-left: 1rem; /* Adjust spacing */
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  svg {
                      
                      fill: $textcolorwhite;
                  }
                  img {
                  width: 100%;
                  height: auto;
                  object-fit: cover; /* Ensures the image covers the container */
                  }
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
                      font-size: 14px;
                      color: $textcolorwhite;
                  }
                  svg {
                      fill: $textcolorwhite;
                  }

                  &:hover {
                      background-color: rgb(58, 59, 58);
                      transition: all 0.1s;

                      
                  }
              }

              .active {
                  background-color: #eee; /* Highlight active tab */
                  border-radius: 0.5rem;
                  background-color: $bgcolorwhite;

                  p {
                      font-size: 14px;
                      color: $primarycolorblue;
                  }

                  :hover {
                      transition: all 0.1s;
                      background-color: $bgcolordeepgreen;


                      
                  }
              }
              
          }

          .signout {
              position: relative;
              top: 0.5rem;
              left: 0.5rem;
              width: fit-content;
              
              
              .signoutbutton {
                  // width: 4rem;
                  background-color: $bgcolordeepgreen;
                  border: none;
                  padding-block: 0.2rem;

                  padding-inline: 1rem;
                  border-radius: 1rem;
                  cursor: pointer;
                  color: $textcolorwhite;


              }
           
                  
                  &:hover {
                      // background-color: rgb(78, 137, 50);


                      
                  }
                  }
          .categories {
              // border: solid;
              padding-top: 0.7rem;
              padding-inline: 0.5rem;

              display: flex;
              flex-direction: column;
              
              h3 {
                  margin-bottom: 0.5rem;
                  font-size: 15px;
                  color: $textcolorwhite;
              }
              div {
                  height: 2rem;
                  display: flex;
                  align-items: center;
                  border-radius: 0.5rem;
                  cursor: pointer;

                  &:hover {
                      // background-color: rgb(86, 108, 78);
                      background-color: rgb(58, 59, 58);
                      // background-color: rgb(122, 143, 56);
                      transition: all 0.1s;

                      
                  }
              }
              p {
                  font-size: 13px;
                  margin-left: 0.7rem;
                  color: $textcolorwhite;
                  // height: 2rem;
              }
          }
          .discover {
              // border: solid;
              // padding-top: 0.7rem;
              padding-inline: 0.5rem;
              display: flex;
              flex-direction: column;
              // gap: 1rem;
              margin-top: 1rem;
              // border-bottom: solid 1px rgba(255, 255, 255, 0.162);
              padding-bottom: 1rem;

              h3 {
                  margin-bottom: 0.5rem;
                  font-size: 15px;
                  color: $textcolorwhite;

              }
              div {
                  height: 2rem;
                  display: flex;
                  align-items: center;
                  border-radius: 0.5rem;
                  cursor: pointer;

                  &:hover {
                      // background-color: rgb(86, 108, 78);
                      background-color: rgb(58, 59, 58);
                      // background-color: rgb(122, 143, 56);
                      transition: all 0.1s;

                      
                  }
              }
              p {
                  font-size: 13px;
                  margin-left: 0.7rem;
                  color: $textcolorwhite;

              }
          }

      }
  }
  
}


}


@media (max-width: 768px) {
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
