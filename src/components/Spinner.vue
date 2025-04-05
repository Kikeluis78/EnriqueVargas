<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const isLoading = ref(true);
const progress = ref(0);
const progressText = ref("0%");
const textIndex = ref(0);

const textOptions = [
  '"Diseño Web"',
  '"Innovación en cada clic"',
 ' "Aplicaciones Android"',
  '"De la creatividad al código"',
  '"Aplicaciones Web"',
  "¡ Lo piensas !",
  " ¡ Se Crea !",
  '"Economico"',
  '" y Además " ',
  " ¡ Profesional !"
];

const colors = ["#ff5733", "#33ff57", "#3375ff", "#ff33a1", "#f4d03f"];

const startAnimation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to(".loading-screen", { opacity: 0, duration: 1, onComplete: () => isLoading.value = false });
    }
  });

  // 🔹 Efecto de rebote ligero en el texto (solo hasta que inicie la barra)
  const bounce = gsap.fromTo("#animated-text",
    { y: -5 }, // Subida inicial ligera
    { y: 5, duration: 0.8, ease: "power1.inOut", repeat: -1, yoyo: true }
  );

  // Animación de los textos (empieza inmediatamente)
  for (let i = 0; i < textOptions.length; i++) {
    tl.to("#changing-text", { opacity: 0, duration: 0.2 })
      .call(() => { textIndex.value = i; })
      .to("#changing-text", { opacity: 1, duration: 0.7 });
  }

  // Barra de progreso (empieza después de los textos)
  tl.to(progress, {
    duration: textOptions.length * 0.4, // Misma duración que los textos
    value: 100,
    ease: "power2.out",
    onUpdate: () => {
      progressText.value = `${Math.round(progress.value)}%`;
      changeColor(progress.value);
    },
    onStart: () => bounce.kill() // 🔹 Detiene el rebote al iniciar la barra
  }, `+=1`); // Retardo de  segundo antes de la barra
};

const changeColor = (value) => {
  const index = Math.floor((value / 100) * colors.length);
  document.documentElement.style.setProperty("--progress-color", colors[index]);
};

onMounted(() => {
  startAnimation();
});
</script>

<template>
  <div v-if="isLoading" class="loading-screen">
    <h1 id="animated-text" class="mb-3">Enrique Vargas</h1>
    <h5 id="changing-text" class="mt-3">{{ textOptions[textIndex] }}</h5>

    <div class="progress-container mt-5">
      <div class="progress-bar" :style="{ width: progressText }"></div>
      <span class="progress-text">{{ progressText }}</span>
    </div>
  </div>
</template>

<style scoped>
.loading-screen {
  position: fixed; /* Fija el spinner en toda la pantalla */
  top: 0;
  left: 0;
  width: 100vw; /* Ocupa el ancho completo */
  height: 100vh; /* Ocupa el alto completo */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #222;
  color: white;
  z-index: 9999; /* Asegura que esté por encima de otros elementos */
}


#animated-text {
  font-size: 3.2rem;
  font-weight: bold;
  color: var(--progress-color, #ff5733);
}

#changing-text {
  font-size: 1.9rem;
  font-weight: bold;
  color: #23f123;
  transition: opacity 0.3s ease-in-out;
}

.progress-container {
  width: 80%;
  background-color: #444;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
  position: relative;
}

.progress-bar {
  height: 20px;
  background-color: var(--progress-color, #e74c3c);
  transition: width 0.2s ease-in-out;
}

.progress-text {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
