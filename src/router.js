import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Precios from './views/Precios.vue';
import Terminos from './views/Terminos.vue';
import Demos from './views/Demos.vue';
import Confianza from './views/Confianza.vue';
import Politica from  './views/Politica.vue';
import Paginas from './views/Paginas.vue';
import Android from './views/Android.vue';
import Contacto from './views/Contacto.vue';
import Free from './views/Free.vue';
import Basica from './views/Basica.vue';
import Form from './views/Form.vue';

const routes = [
  { path: '/',  component: Home },
  { path: '/precios',  component: Precios },
  { path: '/demos',  component: Demos },
  { path: '/confianza',  component: Confianza },
  { path: '/terminos',  component: Terminos },
  { path: '/politica',  component: Politica },
  { path: '/paginas',  component: Paginas },
  { path: '/android',  component: Android },
  { path: '/contacto',   component: Contacto},
  { path: '/free',    component: Free},
  { path: '/basica',  component: Basica},
  { path: '/form',   component: Form},
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
