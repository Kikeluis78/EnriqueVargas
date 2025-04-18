<script setup>
import Banner from '../components/Banner.vue';
import Cards from '../components/Cards.vue';
import ButtonWhatsApp from '../components/ButtonWhatsApp.vue';
</script>

<template>
  <div>
    <!-- Mostrar el Banner -->
    <Banner />
    <Cards />
    <ButtonWhatsApp/>


    <router-link to="/about">

    </router-link>
  </div>
</template>
