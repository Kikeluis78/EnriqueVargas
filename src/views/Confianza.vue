<script setup>
import Header from '../components/Header.vue';
import ButtonWhatsApp from '../components/ButtonWhatsApp.vue';
</script>

<template>
    <Header/>
    <ButtonWhatsApp/>
  <section class="container py-5 mt-5 " id="Transparencia">
    <h1 class="text-center mb-4">Confianza y Transparencia</h1>
    <p class="text-center fs-5 mb-4">
      Mi compromiso es brindarte un servicio claro, seguro y sin letras pequeñas. Cada proyecto que realizo está respaldado por una garantía de calidad.
    </p>

    <div class="row text-center justify-content-center">
      <div class="col-md-4 mb-4">
        <i class="bi bi-shield-lock-fill display-4 text-success"></i>
        <h5 class="mt-3">Garantía asegurada</h5>
        <p> Te ofrezco garantía sobre el funcionamiento y la calidad de tu página o aplicación. Si algo falla, lo corregimos sin costo adicional durante el periodo acordado.</p>
      </div>
      <div class="col-md-4 mb-4">
        <i class="bi bi-eye-fill display-4 text-primary"></i>
        <h5 class="mt-3">Transparencia total</h5>
        <p>Desde el primer contacto, sabrás exactamente qué incluye tu servicio, cuánto cuesta y cuánto tiempo tomará. Sin cargos ocultos, ni sorpresas.</p>
      </div>
    </div>
  </section>

  <section class="container py-5" id="Soporte">
    <h1 class="text-center mb-4">Soporte y Mantenimiento Continuo</h1>
    <p class="text-center fs-5 mb-4">
      Nuestro compromiso no termina con la entrega. Acompañamos tu proyecto en cada etapa, asegurando que siga funcionando correctamente y actualizado.
    </p>

    <div class="row text-center justify-content-center">
      <div class="col-md-4 mb-4">
        <i class="bi bi-tools display-4 text-warning"></i>
        <h5 class="mt-3">Actualizaciones periódicas</h5>
        <p>Nos encargamos de mantener tu sitio actualizado con las últimas versiones de tecnologías y estándares web.</p>
      </div>

      <div class="col-md-4 mb-4">
        <i class="bi bi-headset display-4 text-info"></i>
        <h5 class="mt-3">Asistencia técnica</h5>
        <p>¿Tienes dudas o surgió un problema? Estamos aquí para ayudarte, ya sea por correo, WhatsApp o videollamada.</p>
      </div>

      <div class="col-md-4 mb-4">
        <i class="bi bi-shield-check display-4 text-success"></i>
        <h5 class="mt-3">Seguridad garantizada</h5>
        <p>Monitoreamos vulnerabilidades y aplicamos correcciones para que tu página o app esté siempre protegida.</p>
      </div>
    </div>
  </section>

  <section class="container py-5" id="Entrega">
    <h1 class="text-center mb-4">Entregamos en 72 horas</h1>
    <p class="text-center fs-5 mb-4">
      Sabemos que el tiempo es valioso. Por eso, ofrecemos entregas rápidas para sitios web básicos: ¡tu página lista en tan solo 3 días hábiles!
    </p>

    <div class="row text-center justify-content-center">
      <div class="col-md-4 mb-4">
        <i class="bi bi-lightning-charge-fill display-4 text-warning"></i>
        <h5 class="mt-3">Desarrollo Exprés</h5>
        <p>Una estructura sólida, bien diseñada y completamente funcional en tiempo récord.</p>
      </div>

      <div class="col-md-4 mb-4">
        <i class="bi bi-laptop display-4 text-primary"></i>
        <h5 class="mt-3">Diseño Profesional</h5>
        <p>Interfaz limpia, moderna y adaptada a móviles para asegurar la mejor experiencia desde el primer clic.</p>
      </div>

      <div class="col-md-4 mb-4">
        <i class="bi bi-clock-history display-4 text-success"></i>
        <h5 class="mt-3">Entregas Puntuales</h5>
        <p>Recibe tu sitio web básico en solo 72 horas. ¡Cumplimos lo que prometemos!</p>
      </div>
    </div>

    <div class="alert alert-info text-center mt-5" role="alert">
      <strong>Nota:</strong> Esta entrega aplica únicamente para páginas web básicas con contenido e imágenes previamente proporcionadas por el cliente.  
      <br>
      <em>Aplican restricciones de acuerdo a la complejidad del sitio o aplicación.</em>
    </div>
  </section>
</template>

<style scoped>
/* Personaliza si deseas */
</style>
