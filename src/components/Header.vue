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
  gsap.to(header.value, { backgroundColor: "#e3f2fd", duration: 0.3 });
} else {
  gsap.to(header.value, { backgroundColor: "#6c757d", duration: 0.3 });
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

// contador carrito 
const contadorCarrito = ref(0); // Esto lo actualizaremos más adelante

// Más adelante puedes hacer: contadorCarrito.value = productos.length;



</script>
<!-- DENTRO DEL <template> antes del botón hamburguesa -->

<template>
  <div ref="header" class="header-container">
    <div class="container-fluid px-4">
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
              <li class="nav-item"><router-link class="nav-link" to="/demos" @click="closeMenu">Demos</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/contacto" @click="closeMenu">Contacto</router-link></li>
               <!-- Carrito de compras -->
    <li class="nav-item position-relative ms-3" id="carrito-compras">
      <router-link class="nav-link d-flex align-items-center" to="/carrito" @click="closeMenu">
        <!-- Ícono SVG moderno -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .49.598l-1.5 7A.5.5 0 0 1 13 13H4a.5.5 0 0 1-.49-.402L1.01 2H.5a.5.5 0 0 1-.5-.5zm3.14 4l1.25 6h8.22l1.25-6H3.14z"/>
          <path d="M5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
        <!-- Contador de productos -->
        <span class="badge bg-danger rounded-pill ms-1" id="contador-carrito">0</span>
      </router-link>
    </li>
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

#carrito-compras svg {
  transition: transform 0.2s ease;
}
#carrito-compras:hover svg {
  transform: scale(1.2);
}

#contador-carrito {
  font-size: 0.75rem;
  position: relative;
  top: -5px;
}


</style>
