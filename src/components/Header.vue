<template>
    <div class="presection">
        <div class="section1">

            <header class="header">
                <router-link to="/">
                <div class="logo">
                        <h1 role="button" tabindex="0">Quotech</h1>
                        
                        
                    </div>
                </router-link>
                <nav class="nav-bar">
                    <ul class="nav-links">
                        <div class="nav-item">
                            <router-link to="/About">
                                <p>About Us</p>
                </router-link>

                        </div>
                        <div class="nav-item">
                            <p>Services</p>
                        </div>
                        <div class="nav-item">
                            <p>Contact</p>
                        </div>
 
                    </ul>
                </nav>
            
            </header>


        </div>
    </div>

</template>

<style lang="scss" scoped>

@import '../sass/variables';


.presection {
    // background-color: rgb(45, 45, 49);
    // border: yellow solid;
    width: 100%;
    display: flex;
    justify-content: center;

    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 10;
   .section1 {      
        // margin-inline: auto;
        // border: solid green;
        width: 80rem;
        height: 100%;
        // padding-inline: 1rem  ;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;

        .header {
            // border: solid red;
            // width: 62rem;
            width: 100%;
            background-color:                 #004c80; /* Solid black background */
            backdrop-filter: blur(20px);
            height: 3.2rem;
            // border-radius: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;
            top: 0rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;
            z-index: 20;
            -webkit-tap-highlight-color: transparent;

            .logo{
                // borderight: solid 2px #7cae65;
                // border: solid red;
                padding-right: 1rem;
                // letter-spacing: 6px;
                font-size: 12px;
                position: relative; /* Ensure proper layering */
                background: transparent;

                
                
                
                h1 {
                    color: $textcolorwhite;
                    position: relative; /* Ensure it stays in front */
                    z-index: 2; /* Ensures it stays in front */
                    cursor: pointer; /* Make it behave like a button */

                    }
                h1:active {
                transform: scale(1.1);
                }
            }
            .nav-bar {
                // border: solid red;
                // width: 100%;
                display: flex;
                justify-content: right;
                
                
                .nav-links {
                    display: flex;
                    gap: 3rem;
                    // width: 30rem;
                    min-width: fit-content;
                    overflow: hidden;
                    .nav-item {
                        
                        flex-shrink: 0;
                        position: relative;
                        // border : solid black;
                        // padding-inline: 0.2rem;
                        p {
                            -webkit-tap-highlight-color: transparent;

                            font-size: 14px;
                            font-weight: 600;
                            letter-spacing: 1px;
                            font-family: "Poppins", serif;
                            cursor: pointer;
                            color: $textcolorwhite;
                            // border-bottom: solid 1.5px;
                        

     


                        }
                        p:active {
                            transform: scale(1.1);
                        }
                    }

                }
                
            }

        }      
    }
}
@media (max-width: 800px) {

.presection {
  .section1 {
    width: 100%;
    .header {
    width: 100%;
    // border: solid red;

    .nav-bar {
        // display: none;
    }

    }
                  }
                }



}




</style>