import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/main.css'
import "animate.css"; //
import WOW from "wow.js";

//  Wow.js
const wow = new WOW();
wow.init();

const app = createApp(App)
app.use(router)
app.mount('#app')


