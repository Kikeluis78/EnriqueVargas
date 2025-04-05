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
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <!-- Usando router-link en lugar de <a> -->
                                <li><router-link to="/link1" class="text-white">Terminos y Condiciones</router-link></li>
                                <li><router-link to="/link2" class="text-white">Politica de Calidad</router-link></li>
                                <li><router-link to="/link3" class="text-white">Cursos</router-link></li>
                                <li><router-link to="/link4" class="text-white">Blog</router-link></li>
                            </ul>
                        </div>
                        <!-- Otros enlaces -->
                        <div class="col-6 col-lg-4 mt-3">
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <!-- Usando router-link en lugar de <a> -->
                                <li><router-link to="/link1" class="text-white">Edicion de Video</router-link></li>
                                <li><router-link to="/link2" class="text-white">creacion de Audio</router-link></li>
                                <li><router-link to="/link3" class="text-white">Noticias</router-link></li>
                                <li><router-link to="/link4" class="text-white">Cripto Monedas</router-link></li>
                            </ul>
                        </div>

                        <!-- Otros enlaces -->
                        <div class="col-6 col-lg-4 mt-3">
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <!-- Usando router-link en lugar de <a> -->
                                <li><router-link to="/link1" class="text-white">Edicion de Video</router-link></li>
                                <li><router-link to="/link2" class="text-white">creacion de Audio</router-link></li>
                                <li><router-link to="/link3" class="text-white">Noticias</router-link></li>
                                <li><router-link to="/link4" class="text-white">Cripto Monedas</router-link></li>
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

                <section class="mb-1 text-center ">
                    <router-link to="/facebook" class="btn btn-outline-light btn-floating m-1 mx-2" role="button">
                        <i class="bi bi-facebook"></i>
                    </router-link>

                    <router-link to="/tiktok" class="btn btn-outline-light btn-floating m-1 mx-2" role="button">
                        <i class="bi bi-tiktok"></i>
                    </router-link>

                    <router-link to="/instagram" class="btn btn-outline-light btn-floating m-1 mx-2" role="button">
                        <i class="bi bi-instagram"></i>
                    </router-link>

                    <router-link to="/linkedin" class="btn btn-outline-light btn-floating m-1 mx-2" role="button">
                        <i class="bi bi-li bi-threads"></i>
                    </router-link>

                    <router-link to="/youtube" class="btn btn-outline-light btn-floating m-1 mx-2" role="button">
                        <i class="bi bi-youtube"></i>
                    </router-link>
                </section>
            </div>

            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                © 2025 Copyright:
                <router-link to="/" class="text-white"> <span class="Enrique">Enrique</span> <span class="Vargas">Vargas</span></router-link>
            </div>
        </footer>
    </div>
</template>
