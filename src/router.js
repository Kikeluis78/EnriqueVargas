import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Precios from './views/Precios.vue';
import Terminos from './views/Terminos.vue';
import Demo from './views/Demo.vue';
import Confianza from './views/Confianza.vue';
import Politica from  './views/Politica.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/precios', component: Precios },
  
  { path : '/demo', component: Demo },
  {  path: '/confianza', component: Confianza},
  { path: '/terminos', component : Terminos},
  { path: '/politica', component : Politica },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
