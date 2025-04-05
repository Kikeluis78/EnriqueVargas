<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '../components/Header.vue';
import Modal from '../components/Modal.vue';

onMounted(() => {
  AOS.init({ duration: 1000, once: true })

  gsap.from('.card', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  })
})

// Paquetes de páginas web con clasificaciones
const paquetes = ref([
  {
    titulo: 'Landing Page Básica',
    categoria: 'Diseño Web',
    descripcion: 'Página de una sola sección ideal para promociones o productos individuales.',
    precio: '$30 USD',
    imagen: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    titulo: 'Sitio Web Corporativo',
    categoria: 'Negocios',
    descripcion: 'Diseño profesional con varias secciones (inicio, nosotros, servicios, contacto).',
    precio: '$100 USD',
    imagen: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    titulo: 'Portafolio Profesional',
    categoria: 'Diseño Web',
    descripcion: 'Ideal para freelancers, incluye galería, CV, y formulario de contacto.',
    precio: '$100 USD',
    imagen: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    titulo: 'Tienda Online',
    categoria: 'E-commerce',
    descripcion: 'Carrito de compras, pasarela de pago, productos ilimitados.',
    precio: '$250 USD',
    imagen: 'https://via.placeholder.com/300x200',
    link: '#'
  },
  {
    titulo: 'Blog Personal',
    categoria: 'Contenido',
    descripcion: 'Diseño limpio con sistema de entradas, categorías y comentarios.',
    precio: '$80 USD',
    imagen: 'https://via.placeholder.com/300x200',
    link: '#'
  }
])
</script>

<template>
  <div class="contenedor principal">
    <Header />
    <Modal />
    
    <!-- Intro -->
    <section class="intro text-center py-5">
      <div class="container">
        <h1 class="mb-3">Descubre lo que ofrecemos</h1>
        <p class="lead">
          Servicios diseñados para cubrir tus necesidades. Elige el que mejor se adapte a ti.
        </p>
      </div>
    </section>

    <!-- Tarjetas de servicios -->
    <section class="servicios py-5 bg-white">
      <div class="container">
        <h2 class="text-center mb-2">Nuestros Paquetes Web</h2>
        <div class="row justify-content-center g-4">
          <div class="col-12 col-sm-6 col-lg-4 col-xl-2" 
               v-for="(paquete, index) in paquetes" 
               :key="index" 
               data-aos="fade-up">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h6 class="text-muted small">
                  <i class="bi bi-tags iconos"></i> {{ paquete.categoria }}
                </h6>
                <h5 class="card-title">{{ paquete.titulo }}</h5>
                <p class="card-text">{{ paquete.descripcion }}</p>
                <p class="fw-bold  precio">{{ paquete.precio }}</p>
                <a :href="paquete.link" class="btn btn-primary w-100">Ver más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Outro -->
    <section class="outro text-center py-5 bg-light">
      <div class="container">
        <h3>¿Listo para empezar?</h3>
        <p class="mb-4">
          Contacta con nosotros hoy mismo y da el siguiente paso.
        </p>
        <a href="#" class="btn btn-success">Contáctanos</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.principal {
  background-color: #f8f9fa;
  min-height: 100vh;
  padding-top: 60px;
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.precio{
  color:green;
  font-size: 25px;
}

.iconos{
  font-size: 28px;
}
.intro,
.outro {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.servicios {
  background-color: #ffffff;
}

h2,
h3 {
  font-weight: bold;
}
</style>
