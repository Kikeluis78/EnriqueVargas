<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { gsap } from 'gsap'
import Header from '../components/Header.vue'

onMounted(() => {
    AOS.init({
        duration: 1000,
        once: true,
    })

    // Animación del título al entrar la vista
    gsap.from('.titulo-principal', {
        y: -50,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5,
    })
})
</script>

<template>
    <Header />

    <div class="contenedor-principal py-5 px-3 mx-auto mt-3">
        <!-- Título animado con GSAP -->
        <h1 class="text-center text-primary mt-5 mb-4 titulo-principal">¿Por qué confiar en nosotros?</h1>

        <div class="row mt-5">
            <div class="col-12 tarjeta">

                <!-- Sección Confianza -->
                <section id="Confianza" class="mb-5" data-aos="fade-up">
                    <h2 class="text-primary">Nuestra Confianza</h2>
                    <p>
                        <img src="/src/assets/banner1.jpg " alt="" class="imagenes">
                        La confianza es el pilar fundamental de nuestra marca. Nos dedicamos a construir relaciones
                        duraderas y auténticas con nuestros clientes, ofreciendo un servicio transparente, honesto y siempre orientado a tus necesidades.
                        Cada decisión y acción que tomamos está pensada para brindarte seguridad y tranquilidad.
                    </p>
                </section>

            </div>
        </div>

        <!-- Sección Soporte -->
        <section id="Soporte" class="mb-5 mt-5" data-aos="fade-right">
            <h2 class="text-primary">Soporte Personalizado</h2>
            <p>
                <img src="/src/assets/css3.png" alt=""  class="imagenes">
                Nuestro equipo de soporte está siempre listo para ayudarte. Desde la primera consulta hasta la posventa, te
                acompañamos en todo momento. Brindamos atención personalizada, rápida y profesional para resolver
                cualquier duda o inconveniente.
            </p>
        </section>

        <!-- Sección Entrega -->
        <section id="Entrega" class="mb-5" data-aos="fade-left">
            <h2 class="text-primary">Entregas Rápidas y Seguras</h2>
            <p>
                <img src="/src/assets/javascript.png" alt="" class="imagenes">
                Trabajamos con sistemas logísticos eficientes y seguros que garantizan la llegada puntual y en óptimas condiciones de
                tus productos. Cada envío está monitoreado para que tengas control total y puedas disfrutar sin preocupaciones.
            </p>
        </section>
    </div>
</template>

<style scoped>
.contenedor-principal {
    max-width: 960px;
}

.imagenes{
    width: 150px;
}
section {
    scroll-margin-top: 100px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.titulo-principal {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
}
</style>
