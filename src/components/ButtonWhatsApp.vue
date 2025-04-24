<template>
  <div>
    <!-- Modal WhatsApp -->
    <div
      v-if="showModal"
      id="whatsapp-modal"
      class="whatsapp-modal d-block fade show"
      ref="whatsappModal"
    >
      <div class="whatsapp-modal-dialog">
        <div class="whatsapp-modal-content text-center p-3 position-relative">
          <!-- Botón de cierre en la esquina superior derecha -->
          <button
            type="button"
            class="btn-close position-absolute top-0 end-0 m-2"
            aria-label="Cerrar"
            @click="closeModal"
          ></button>

          <div class="mb-3">
            <i class="bi bi-person-lines-fill fs-1 text-primary me-2"></i>
            <i class="bi bi-whatsapp fs-1 text-success"></i>
          </div>
          <h5 class="modal-title mb-1 ">¿Necesitas ayuda?</h5>
          <p class="mb-2">En que puedo apoyarte</p>
          <div class="d-flex justify-content-center">
            <button class="btn btn-success" @click="goToWhatsapp">
              Pide Informes
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Botón flotante -->
    <div
      v-if="showButton"
      id="whatsapp-float-btn"
      class="whatsapp-float pulse"
      @click="goToWhatsapp"
      ref="floatBtn"
    >
      <i class="bi bi-whatsapp fs-3 text-white"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

const showModal = ref(false)
const showButton = ref(false)

// Número de WhatsApp y mensaje predefinido
const whatsappNumber = '5568656962' // Reemplaza con tu número real
const presetMessage = 'Hola, me gustaría obtener más información sobre sus servicios.' // Mensaje predefinido

let modalTimer = null
let autoCloseTimer = null
let buttonTimer = null

const showModalWithAnimation = () => {
  showModal.value = true
  gsap.fromTo(
    '#whatsapp-modal',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1 }
  )
}

const closeModal = () => {
  showModal.value = false
  showButton.value = true
  animateFloatButton()
  // Iniciar temporizador para mostrar el modal nuevamente después de 2 minutos
  buttonTimer = setTimeout(() => {
    showButton.value = false
    showModalWithAnimation()
    // Reiniciar temporizador de cierre automático
    autoCloseTimer = setTimeout(() => {
      if (showModal.value) {
        closeModal()
      }
    }, 45000) // 45 segundos
  }, 60000) // 1 minuto
}

const goToWhatsapp = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(presetMessage)}`
  window.open(url, '_blank')
}

const animateFloatButton = () => {
  gsap.fromTo(
    '#whatsapp-float-btn',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' }
  )
}

onMounted(() => {
  // Mostrar el modal después de 20 segundos
  modalTimer = setTimeout(() => {
    showModalWithAnimation()
    // Cerrar automáticamente el modal después de 45 segundos si no se cierra manualmente
    autoCloseTimer = setTimeout(() => {
      if (showModal.value) {
        closeModal()
      }
    }, 45000) // 45 segundos
  }, 20000) // 20 segundos
})

onBeforeUnmount(() => {
  clearTimeout(modalTimer)
  clearTimeout(autoCloseTimer)
  clearTimeout(buttonTimer)
})
</script>

<style scoped>
/* Modal personalizado */
.whatsapp-modal {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1055;
}

.whatsapp-modal-dialog {
  max-width: 320px;
  margin: 0;
}

.whatsapp-modal-content {
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #03aa40;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  padding: 15px;
  z-index: 1050;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Animación de pulso */
.pulse {
  animation: pulse 1.8s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

@media (max-width: 576px) {
  .whatsapp-modal-dialog {
    max-width: 90%;
    margin: 0 auto;
  }
  .modal-title{
    font-size: 22px;
  }
p{
  font-size: 15px;
  color:blue;
}
  .whatsapp-float {
    bottom: 10px;
    right: 10px;
  }
}

</style>
