import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import { nextTick } from "vue";


const router = createRouter({
    history: createWebHistory(), 
      routes: [
        
        {
            path: '/',
            name: 'Home',
            component: Home,
          },
        {
            path: '/About',
            name: 'About',
            component: About,
          }
        
    ],

    // scrollBehavior(to, from, savedPosition) {
    //   if (savedPosition) {
    //     return savedPosition; // Restore previous scroll position when pressing back
    //   } else {
    //     return { top: 0 }; // Scroll to top for new navigations
    //   }
    // }

});

export default router