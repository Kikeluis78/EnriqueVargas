<template>
    <Header/>
    <ButtonWhatsApp/>
    <div class="mt-5">
      <!-- Encabezado -->
      <div class="bg-primary text-white text-center py-5 mt-2 ">
        <h1>¡Tu Página Web 100% Responsiva!</h1>
        <p class="lead">Adaptable, moderna y lista para móviles</p>
      </div>
  
      <main class="container my-5">
        <!-- ¿Qué es una web responsiva? -->
        <section class="mb-5">
          <h2>¿Qué es una web responsiva?</h2>
          <p>
            Una página web responsiva se adapta automáticamente a cualquier
            dispositivo: celulares, tablets y computadoras, para ofrecer la mejor
            experiencia posible.
          </p>
        </section>
  
        <!-- Importancia -->
        <section class="mb-5">
          <h2>¿Por qué es importante?</h2>
          <ul class="list-group">
            <li class="list-group-item">
              <i class="bi bi-phone-fill text-success"></i> Mejora en móviles
            </li>
            <li class="list-group-item">
              <i class="bi bi-lightning-fill text-warning"></i> Carga rápida
            </li>
            <li class="list-group-item">
              <i class="bi bi-google text-danger"></i> Mejora tu posición en Google (SEO)
            </li>
            <li class="list-group-item">
              <i class="bi bi-bag-check-fill text-primary"></i> Aumenta tus ventas
            </li>
          </ul>
        </section>
  
        <!-- Beneficios -->
        <section class="mb-5">
          <h2>Beneficios para ti</h2>
          <div class="row text-center">
            <div class="col-md-3">
              <i class="bi bi-graph-up-arrow display-4 text-info"></i>
              <p>Más visitas</p>
            </div>
            <div class="col-md-3">
              <i class="bi bi-cursor-fill display-4 text-success"></i>
              <p>Más clics</p>
            </div>
            <div class="col-md-3">
              <i class="bi bi-phone-vibrate display-4 text-primary"></i>
              <p>100% móvil</p>
            </div>
            <div class="col-md-3">
              <i class="bi bi-laptop display-4 text-dark"></i>
              <p>Diseño adaptativo</p>
            </div>
          </div>
        </section>
  
        <!-- Cómo trabajo -->
        <section class="mb-5">
          <h2>¿Cómo trabajo?</h2>
          <p>
            Utilizo herramientas modernas como <strong>Vite</strong> para velocidad,
            <strong>Bootstrap 5</strong> para estructura y diseño responsivo, y
            <strong>Bootstrap Icons</strong> para mejorar visualmente la navegación.
          </p>
        </section>
  
        <!-- Contacto -->
        <section class="text-center">
          <h2>¿Listo para tener tu sitio responsivo?</h2>
          <p>Contáctame hoy y llevemos tu proyecto al siguiente nivel.</p>
        
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue'
  import ButtonWhatsApp from '../components/ButtonWhatsApp.vue'
  </script>
  
  <style scoped>
  /* Estilos extra si quieres personalizar más */
  </style>
  