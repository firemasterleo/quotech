import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaPersist from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';


const pinia = createPinia(); // Create the Pinia instance
pinia.use(piniaPersist);

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
