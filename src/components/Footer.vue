<template>

    <div class="app-container" data-aos="fade-up" data-aos-duration="1000">
        <!-- Contenido de la página -->
        <div class="content">
            <!-- Aquí va todo el contenido de tu página -->
        </div>

        <!-- Footer -->
        <footer class="footer text-center text-lg-start text-white" style="background-color: #3456f0">
            <!-- Grid container -->
            <div class="container p-4 pb-0">
                <section class="">
                    <div class="row  ">
                        <div class="col-6 col-lg-4 mt-3  ">

                            <ul class="list-unstyled mb-0">
                                <!-- Usando router-link en lugar de <a> -->
                                <li><router-link to="/terminos" class="text-white">Terminos y Condiciones</router-link>
                                </li>
                                <li><router-link to="/politica" class="text-white">Politica de Privacidad</router-link></li>

                            </ul>
                        </div>
                        <!-- Otros enlaces -->
                        <div class="col-6 col-lg-4 mt-3">

                            <ul class="list-unstyled mb-0">
                                <!-- Usando router-link en lugar de <a> -->
                                <li><router-link to="" class="text-white">Edicion de Video</router-link></li>
                                <li><router-link to="" class="text-white">creacion de Audio</router-link></li>

                            </ul>
                        </div>

                    </div>

                </section>

                <hr class="mb-2" />

                <section>
                    <p class="d-flex justify-content-center align-items-center">
                        <span class="me-3">Registrate Gratis</span>
                        <button type="button" class="btn btn-outline-light btn-rounded">
                            Crear Cuenta
                        </button>
                    </p>
                </section>

                <hr class="mb-4" />
                <section class="mb-1 text-center">

                    <a href="https://www.facebook.com/share/168GbGt5Ri/" target="_blank"
                        class="btn btn-outline-light btn-floating m-1 mx-2" role="button">
                        <i class="bi bi-facebook"></i>
                    </a>

                    <a href="https://vm.tiktok.com/ZMB9UdUPj/" target="_blank"
                        class="btn btn-outline-light btn-floating m-1 mx-2" role="button">
                        <i class="bi bi-tiktok"></i>
                    </a>

                    <a href="https://www.instagram.com/enrique_vargas78/profilecard/?igsh=MWRkZXp2c3A1cHN0OQ=="
                        target="_blank" class="btn btn-outline-light btn-floating m-1 mx-2" role="button">
                        <i class="bi bi-instagram"></i>
                    </a>

                    <a href="https://www.threads.net/@enrique_vargas78" target="_blank"
                        class="btn btn-outline-light btn-floating m-1 mx-2" role="button">
                        <i class="bi bi-threads"></i>
                    </a>

                    <a href="https://youtube.com/@enriqueg_v078?si=m_gI9SrgtDmNYPx8" target="_blank"
                        class="btn btn-outline-light btn-floating m-1 mx-2" role="button">
                        <i class="bi bi-youtube"></i>
                    </a>
                </section>

            </div>

            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                © 2025 Copyright:
                <router-link to="/" class="text-white"> <span class="Enrique">Enrique</span> <span
                        class="Vargas">Vargas</span></router-link>
            </div>
        </footer>
    </div>
</template> 

<style scoped>
a {
  text-decoration: none !important;
}

a:hover {
  text-decoration: underline; /* Opcional: si quieres que se subraye al pasar el mouse */
}

li {
  margin: 10px 0;
}

</style>