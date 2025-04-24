 
 <script setup>
 import Header from '../components/Header.vue';
</script>
 
 <template>
    <Header/>
    <h1> soy pagina About</h1>
    
      <!-- FORMULARIO DE CONTACTO -->
      <section class="container my-5">
        <h3 class="text-center mb-4">Contáctanos</h3>
        <!-- Aquí debes reemplazar el action con la URL generada en tu cuenta de Formspree -->
        <form action="https://formspree.io/f/mnqkldqe" method="POST" class="mx-auto" style="max-width: 600px;">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" id="nombre" name="nombre" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" id="email" name="email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="mensaje" class="form-label">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="4" class="form-control" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100">
            <i class="bi bi-send-fill me-2"></i>Enviar mensaje
          </button>
        </form>
      </section>
 </template>