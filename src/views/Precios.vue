<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '../components/Header.vue'

onMounted(() => {
  AOS.init({ duration: 1000, once: true })

  gsap.from('.card', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  })
})
</script>

<template>
  <div class="contenedor principal">
    <Header />

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
        <h2 class="text-center mb-5">Nuestros Servicios</h2>
        <div class="row justify-content-center g-4">
          <div
            class="col-12 col-sm-6 col-lg-4 col-xl-2"
            v-for="i in 5"
            :key="i"
            data-aos="fade-up"
          >
            <div class="card h-100 shadow-sm">
              <img
                src="https://via.placeholder.com/300x200"
                class="card-img-top"
                alt="Servicio"
              />
              <div class="card-body">
                <h5 class="card-title">Servicio {{ i }}</h5>
                <p class="card-text">
                  Descripción breve del servicio {{ i }}. Ideal para destacar características principales.
                </p>
                <a href="#" class="btn btn-primary w-100">Ver más</a>
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

.intro,
.outro {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.servicios {
  background-color: #ffffff;
}

h2, h3 {
  font-weight: bold;
}
</style>
