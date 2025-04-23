import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Precios from './views/Precios.vue';
import Terminos from './views/Terminos.vue';
import Demo from './views/Demo.vue';
import Confianza from './views/Confianza.vue';
import Politica from  './views/Politica.vue';
import Paginas from './views/Paginas.vue';
import Android from './views/Android.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/precios', component: Precios },
  { path: '/demo', component: Demo },
  { path: '/confianza', component: Confianza },
  { path: '/terminos', component: Terminos },
  { path: '/politica', component: Politica },
  { path: '/paginas', component: Paginas },
  { path: '/android', component: Android },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;
