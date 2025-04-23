<template>
    <Header/>
    <ButtonWhatsApp/>
    <div class="mt-5">
      <!-- Encabezado -->
      <div class="bg-primary text-white text-center py-5 mt-2">
        <h1>¡Tu Aplicación Android a Medida!</h1>
        <p class="lead">Moderna, rápida y funcional para cualquier negocio</p>
      </div>
  
      <main class="container my-5">
        <!-- ¿Qué es una app Android? -->
        <section class="mb-5">
          <h2>¿Qué es una app Android?</h2>
          <p>
            Es una aplicación diseñada para funcionar en celulares o tablets con sistema Android.
            Permite ofrecer servicios, vender productos, mejorar la comunicación con clientes y mucho más.
          </p>
        </section>
  
        <!-- Ventajas de tener una app -->
        <section class="mb-5">
          <h2>¿Por qué deberías tener una?</h2>
          <ul class="list-group">
            <li class="list-group-item">
              <i class="bi bi-phone text-success"></i> Presencia directa en el celular del cliente
            </li>
            <li class="list-group-item">
              <i class="bi bi-bell-fill text-warning"></i> Notificaciones en tiempo real
            </li>
            <li class="list-group-item">
              <i class="bi bi-globe2 text-primary"></i> Funciona sin necesidad de navegador
            </li>
            <li class="list-group-item">
              <i class="bi bi-cart-fill text-danger"></i> Puedes vender productos o servicios directamente
            </li>
          </ul>
        </section>
  
        <!-- Proceso de desarrollo -->
        <section class="mb-5">
          <h2>¿Cómo desarrollo tu app?</h2>
          <p>
            Utilizo tecnologías modernas para transformar aplicaciones web en apps Android reales.
          </p>
          <p>
            Tu app será <strong>rápida, responsiva y publicable en la Play Store</strong> si lo deseas.
          </p>
        </section>
  
        <!-- Características que puedes incluir -->
        <section class="mb-5">
          <h2>¿Qué puede tener tu app?</h2>
          <div class="row text-center">
            <div class="col-md-3">
              <i class="bi bi-person-check-fill display-4 text-success"></i>
              <p>Registro de usuarios</p>
            </div>
            <div class="col-md-3">
              <i class="bi bi-cash-stack display-4 text-info"></i>
              <p>Pasarela de pagos</p>
            </div>
            <div class="col-md-3">
              <i class="bi bi-geo-alt-fill display-4 text-warning"></i>
              <p>Ubicación en tiempo real</p>
            </div>
            <div class="col-md-3">
              <i class="bi bi-chat-dots-fill display-4 text-primary"></i>
              <p>Soporte por chat</p>
            </div>
          </div>
        </section>
  
        <!-- Contacto -->
        <section class="text-center">
          <h2>¿Listo para tener tu propia app Android?</h2>
          <p>Contáctame y convierte tu idea en una aplicación real.</p>
          
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue'
  import ButtonWhatsApp from '../components/ButtonWhatsApp.vue'
  </script>
  
  <style scoped>
  /* Personaliza más si lo deseas */
  </style>
  