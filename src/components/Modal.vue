<template>
    <div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="modalMensaje"
        tabindex="-1"
        aria-labelledby="modalMensajeLabel"
        aria-hidden="true"
        ref="modalElement"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content rounded-4 shadow">
            <div class="modal-header">
              <h5 class="modal-title" id="modalMensajeLabel">
                📢   ! Ponte Pilas ¡ 
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div class="modal-body fs-5">
              Voy a <strong>Regar 10 Aplicaciones Web</strong> para crecer mi
              portafolio de Cleintes. Se parte de este "Proyecto" y mandame  tus <strong>DATOS.</strong>
            </div>
            <div class="modal-footer">
              <router-link to="/formulario" class="btn btn-success">
                Registro
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  
  // Importa Modal desde Bootstrap
  import { Modal } from 'bootstrap'
  
  const modalElement = ref(null)
  
  onMounted(() => {
    setTimeout(() => {
      const modal = new Modal(modalElement.value)
      modal.show()
    }, 3000) // 3 segundos
  })
  </script>
  