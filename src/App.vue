<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importación de componentes
import Spinner from './components/Spinner.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


// Estado de carga
const isLoaded = ref(false);

onMounted(() => {
  // Inicializar AOS
  AOS.init();

  // Registrar ScrollTrigger en GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Simulación de carga
  setTimeout(() => {
    isLoaded.value = true;
  }, 14000); // Reducido el tiempo a 14s para pruebas más rápidas
});
</script>
<template>
  <div class="app-container"> <!-- Contenedor principal -->
    <!-- Spinner de carga, se muestra solo cuando isLoaded es false -->
    <Spinner v-if="!isLoaded" />
    
    <!-- Contenido del sitio, incluyendo Header y Banner, se muestra cuando isLoaded es true -->
    <div v-if="isLoaded" class="content-wrapper">
      <Header />
      <router-view />
    </div>
    
    <Footer />
  </div>
</template>

<style scoped>
/* Estilos globales para prevenir overflow */
html, body {
  overflow-x: hidden; /* Previene desplazamiento lateral */
  width: 100%;
}

.app-container {
  width: 100vw;  /* Evita que el contenido sea más ancho que la pantalla */
  overflow-x: hidden; /* Asegura que no haya desplazamiento horizontal */
}

.content-wrapper {
  width: 100%;  /* Se asegura de que el contenido se mantenga dentro */
  max-width: 100vw; /* Previene el desbordamiento */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido */
  justify-content: center;
}

</style>