<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";


onMounted(() => {
  setTimeout(() => {
    AOS.init({

    });
  },0);
});


const handleClick = () => {
  alert("Aquí puedes agregar más detalles.");
};

</script>


<template>
  
  <div class="container text-center">
    <h1 class="titulo-cards">
      Bienvenid@s <span class="hand">👋</span>
    </h1>
  </div>
  <!--container cards-->
  <div class="container mt-2">
    <!--fila 1-->
    <div class="row mt-5 justify-content-center">
      <!--cards-->
      <div class="col-md-6 mb-4" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div class="tarjeta">
          <i class="bi bi-pc-display-horizontal icono"></i>
 
          <p class="texto-card">Paginas Web Echas a Medida , 100% responsivas</p>
          <router-link to="/plantillas" class="btn btn-primary">Ver Más</router-link>

        </div>
      </div>

      <div class="col-md-6 mb-4" data-aos="fade-left" data-aos-offset="250" data-aos-easing="ease-in-sine">
        <div class="tarjeta">
          <i class="bi bi-coin icono"></i>
          <p class="texto-card">Precios Accesibles y Plan de Financiamiento</p>
          <router-link to="/precios" class="btn btn-primary">Ver Más</router-link>

        </div>
      </div>
    </div>

    <!--fila 2-->
    <div class="row">
      <div class="col-md-6 mb-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <div class="tarjeta">
          <i class="bi bi-shield-check icono"></i>
          <p class="texto-card">Confianza y transparencia. Garantia Asegurada</p>
          <router-link :to="{ path: '/confianza', hash: '#Confiaza' }" class="btn btn-primary">ver mas</router-link>


        </div>
      </div>
     

      <div class="col-md-6 mb-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <div class="tarjeta">
          <i class=" bi bi-android2 icono"></i>
    <p class="texto-card">Aplicaciones Android</p>
    <router-link to="/Android" class="btn btn-primary">Ver Más</router-link>

        </div>
      </div>
    </div>

    <!--fila 3-->
    <div class="row">
      <div class="col-md-6 mb-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <div class="tarjeta">
          <i class="bi bi-tools icono"></i>
    <p class="texto-card">Soporte y mantenimiento continuo</p>
    <router-link :to="{ path: '/confianza', hash: '#Soporte' }" class="btn btn-primary">Soporte</router-link>
        </div>
      </div>
      <div class="col-md-6 mb-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <div class="tarjeta">
          <i class="bi bi-clock-history icono"></i>
          <p class="texto-card">Entregamos en 72 hrs.</p>
          <router-link :to="{ path: '/confianza', hash: '#Entrega' }" class="btn btn-primary">Ver mas</router-link>

        </div>
      </div>
    </div>
  </div>
  
  <!--Footer-->
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");


.titulo-cards {
  color: blue;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: italic;
  margin-top: -85px; /* Acerca las Cards al Banner */


}

.hand {
  display: inline-block;
  font-size: 1.5em;
  transform-origin: bottom right;
  animation: wave 1s infinite;
}

@keyframes wave {

  0%,
  100% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(15deg);
  }
}

.tarjeta {
  text-align: center;
  padding: 20px;
  border: 2px solid #007bff;
  border-radius: 15px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  background: #fff;
}

.tarjeta:hover {
  transform: translateY(-5px);
  box-shadow: 16px 16px 50px rgba(1, 15, 219, 0.3);
  background-color: rgb(80, 204, 8);
}

.icono {
  font-size: 3rem;
  color: #007bff;
}

.texto-card {
  font-size: .9rem;
  color: #333;
  margin: 15px 0;
}

.btn-primary {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 8px;
  transition: background 0.3s ease-in-out;
}

.btn-primary:hover {
  background: #bdab0d;
}
</style>
