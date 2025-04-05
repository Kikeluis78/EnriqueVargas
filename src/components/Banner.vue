<template>
  <div class="banner" ref="banner">
    <img src="../assets/banner1.jpg" class="img-fluid banner-img"  alt="Banner">
    <div class="overlay" data-aos="fade-up" data-aos-duration="1500"></div>
    <div class="banner-text">
      <h1 class="title" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
        ¡ No busques más !
      </h1>
      <p class="subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        " Sé qué necesitas para hacer crecer tu negocio. "
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

const banner = ref(null);

onMounted(() => {
  AOS.init();
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    banner.value,
    { opacity: 0, y: -100 },
    { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
  );
});
</script>

<style scoped>


/* Solución para desbordamiento en móviles */
html, body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}
.banner {
  position: relative;
  width: 100vw;
  height: 95vh; /* Se adapta al tamaño completo de la pantalla */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 85%; /* Ajustamos para que ocupe toda la pantalla */
  object-fit: cover;
  position:absolute;
  top: 0;
  left: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 85%; /* Ocupa toda la pantalla */
  background: rgba(0, 0, 0, 0.5); /* Fondo oscuro con transparencia */
  z-index: 1;
}

.banner-text {
  position: absolute; 
  z-index: 2;
  color: white;
  text-align: center;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centra el texto */
  width: 100%; 
}

.title {
  font-size: 3rem; /* Aumentamos el tamaño en PC */
  margin: 0;
}

.subtitle {
  font-size: 1.5rem; /* Ajustamos el tamaño */
  margin-top: 10px;
}

/* Ajustes para tabletas */
@media screen and (max-width: 1024px) {
  .title {
    font-size: 2.7rem;
  }

  .subtitle {
    font-size: 1.4rem;
  }
}




@media screen and (max-width: 586px) {  
  .banner {
    height: 40vh; /* Ajustar altura para que no sea muy pequeña en móviles */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .banner-img {
    width: 100%;
    height: 78%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 78%;
    background: rgba(0, 0, 0, 0.5); /* Fondo oscuro con transparencia */
    z-index: 1;
  }

  .banner-text {
    position: absolute;
    z-index: 2;
    color: white;
    text-align: center;
    width: 100%;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centrar exactamente el texto */
  }

  .title {
    font-size: 1.8rem; /* Ajuste de tamaño para móviles */
    margin-bottom: 5px;
  }

  .subtitle {
    font-size: 1rem; /* Ajuste de tamaño para móviles */
  }
}


</style>
