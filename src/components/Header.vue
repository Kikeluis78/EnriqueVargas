<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import gsap from 'gsap';
import { useRouter } from 'vue-router';

const router = useRouter();
const header = ref(null);
const lastScrollTop = ref(0);
const isMenuOpen = ref(false); // Estado del menú

// Manejar la animación del header en el scroll
const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop.value) {
    gsap.to(header.value, { y: -100, duration: 0.5, ease: "power2.out" });
  } else {
    gsap.to(header.value, { y: 0, duration: 0.5, ease: "power2.out" });
  }

  if (scrollTop === 0) {
    gsap.to(header.value, { backgroundColor: "green", duration: 0.3 });
  } else {
    gsap.to(header.value, { backgroundColor: "#007bff", duration: 0.3 });
  }

  lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop;
};

// Alternar el menú hamburguesa
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Cerrar el menú cuando se selecciona un enlace
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Cerrar el menú cuando cambia la ruta
watch(() => router.currentRoute.value, closeMenu);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div ref="header" class="header-container">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
            <span class="Enrique">Enrique</span><span class="Vargas">Vargas</span>
          </router-link>
          <!-- Botón hamburguesa -->
          <button class="navbar-toggler" type="button" @click="toggleMenu" :aria-expanded="isMenuOpen.toString()">
            <span v-if="!isMenuOpen" class="navbar-toggler-icon"></span>
            <span v-else class="close-icon">✖</span>
          </button>
          <!-- Menú colapsable -->
          <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><router-link class="nav-link" to="/" @click="closeMenu">Home</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/precios" @click="closeMenu">Precios</router-link></li>
             
              <li class="nav-item"><router-link class="nav-link" to="/demo" @click="closeMenu">Demo</router-link></li>
              <li class="nav-item me-3"><router-link class="nav-link" to="/about" @click="closeMenu">About</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Boldonse&family=Knewave&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

.header-container {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  z-index: 1000;
  background-color: #3456f0;
}

.close-icon {
  font-size: 1.5rem;
  color: black;
}

.collapse.show {
  display: block !important;
}
</style>
