import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Precios from './views/Precios.vue';
import Plantillas from './views/Plantillas.vue';
import Demo from './views/Demo.vue';
import Confianza from './views/Confianza.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/precios', component: Precios },
  { path : '/plantillas', component: Plantillas },
  { path : '/demo', component: Demo },
  {  path: '/confianza', component: Confianza},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
