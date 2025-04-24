<template>

  <!-- ENCABEZADO PRINCIPAL -->
  <header class="bg-success text-white text-center py-5 mt-5" style="width: 80%; margin: auto;">
     <h1>Landing Page Básica</h1>
     <p class="lead">¡Gratis para siempre! Nosotros la creamos con los datos de tu negocio.</p>
   </header>
 
   <!-- SECCIÓN DE INFORMACIÓN -->
   <section class="container my-5 text-center">
     <h2 class="mb-3">¿Qué incluye?</h2>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">
         <i class="bi bi-palette2 text-success me-2"></i>
         Diseño limpio y moderno con tus colores y logotipo.
       </li>
       <li class="list-group-item">
         <i class="bi bi-megaphone-fill text-info me-2"></i>
         Publicidad integrada para cubrir el dominio y hosting. ¡Tú no pagas nada!
       </li>
       <li class="list-group-item">
         <i class="bi bi-whatsapp text-success me-2"></i>
         Botón flotante para contacto inmediato por WhatsApp o Messenger.
       </li>
       <li class="list-group-item">
         
       <a
        name=""
        id=""
        class="btn btn-primary"
        href="#"
        role="button"
        >Ver Demo</a
       >
       
       </li>
     </ul>
   </section>
 
   <!-- PLUS -->
   <div class="container my-3">
     <div class="alert alert-success text-center">
       <i class="bi bi-envelope-check-fill me-2"></i>
       <strong>PLUS:</strong> Recibe mensajes a tu correo. Gratis hasta 50 envíos mensuales.
     </div>
   </div>



    <!-- Acordion-->
   <div class="container my-5">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
          aria-expanded="true" aria-controls="collapseOne">
          Ver Precios Y Planes
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="table-responsive">
            <table class="table table-bordered table-hover text-center align-middle">
            <thead class="table-light">
              <tr>
                <th>Artículo</th>
                <th>Gratis</th>
                <th>Personal</th>
                <th>Profesional</th>
                <th>Negocio</th>
                <th>Costumbre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Precios</td>
                <td>$0 /mes<br><small>de por vida</small></td>
                <td>$85 /mes<br><small>Para sitios personales</small></td>
                <td>$210 /mes<br><small>Para autónomos</small></td>
                <td>$350 /mes<br><small>Para organizaciones</small></td>
                <td>???<br><small>Campañas grandes</small></td>
              </tr>
              <tr>
                <td>Miembros del equipo</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
              </tr>
              <tr>
                <td>Envíos mensuales</td>
                <td>50</td>
                <td>200</td>
                <td>2,000</td>
                <td>20,000</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
              </tr>
              <tr>
                <td>Archivo de envíos</td>
                <td>30 días</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
              </tr>
              <tr>
                <td>Correos vinculados</td>
                <td>2</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
              </tr>
              <tr>
                <td>Subidas de archivos</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td>1 GB</td>
                <td>5 GB</td>
                <td>10 GB</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
              </tr>
              <tr>
                <td>Exportación de envíos</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
              </tr>
              <tr>
                <td>Búsqueda de envíos</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
              </tr>
              <tr>
                <td>Privacidad y spam</td>
                <td colspan="5">Todas las opciones básicas están incluidas en todos los planes</td>
              </tr>
              <tr>
                <td>Control avanzado de spam</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
              </tr>
              <tr>
                <td>Honeypot personalizado</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
              </tr>
              <tr>
                <td>Motor de reglas</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
              </tr>
              <tr>
                <td>Soporte prioritario</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
              </tr>
              <tr>
                <td>Teléfono y SLA</td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-x-lg text-danger"></i></td>
                <td><i class="bi bi-check-lg text-success"></i></td>
              </tr>
              <!-- Botones de selección abajo -->
              <tr>
                <td>Seleccionar plan</td>
                <td><button id="btnGratis" class="btn btn-secondary btn-sm">Actual</button></td>
                <td><button id="btnPersonal" class="btn btn-primary btn-sm">Seleccionar</button></td>
                <td><button id="btnProfesional" class="btn btn-primary btn-sm">Seleccionar</button></td>
                <td><button id="btnNegocio" class="btn btn-primary btn-sm">Seleccionar</button></td>
                <td><button id="btnCostumbre" class="btn btn-outline-primary btn-sm">Contactar</button></td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Ver menos
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample">
      </div>
    </div>
  </div>
</div>



   </template>
 
 
   <script setup>
 
 </script>
 
 <style scoped>
 
body {
       font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     }
/* 🎨 Estilo general para la tabla */
.table {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* 🔲 Encabezado de la tabla */
.table thead th {
  background-color: #f8f9fa;
  font-weight: bold;
  color: #343a40;
}

/* 🧩 Filas intercaladas */
.table tbody tr:nth-child(odd) {
  background-color: #fdfdfd;
}
.table tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

/* ✅ Estilo para íconos de sí */
.bi-check-lg {
  font-size: 1.2rem;
  color: #28a745; /* Verde */
}

/* ❌ Estilo para íconos de no */
.bi-x-lg {
  font-size: 1.2rem;
  color: #dc3545; /* Rojo */
}

/* 🟢 Botones */
.btn-sm {
  border-radius: 20px;
  font-size: 0.85rem;
  padding: 6px 14px;
  transition: all 0.2s ease-in-out;
}

/* 🎯 Hover de los botones */
.btn-sm:hover {
  transform: scale(1.05);
}

/* ✨ Botón "Actual" */
#btnGratis {
  background-color: #6c757d;
  border-color: #6c757d;
  color: white;
  cursor: default;
}

/* 🧃 Botón de contacto */
#btnCostumbre {
  border: 2px dashed #007bff;
}

/* 👑 Accordion suave */
.accordion-button {
  background-color: #f0f4f8;
  font-weight: bold;
  color: #007bff;
}
</style>