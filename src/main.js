import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import router from './router'; // Importamos el router



import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';

// Inicializar AOS
AOS.init();

const app = createApp(App);
app.use(router);
app.mount('#app');