import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/main.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';

const app = createApp(App);
app.use(router);
app.mount('#app');
AOS.init();
    // Initialize AOS for scroll animations