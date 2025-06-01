<template>
  <div id="oliven-main" style="width: 100%">
    <!-- Header & Slider -->
    <header
      id="home"
      class="header valign bg-img parallaxie"
      data-background="../assets/images/bg_celestial_homepage.jpeg"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center caption">
            <h1
              class="animate-box fadeInUp animated"
              data-animate-effect="fadeInUp"
            >
              Ne pare rău!
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="arrow bounce text-center">
              <i class="ti-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="footer2">
      <div class="oliven-narrow-content">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="mb-3">
              <a href="/#"
                ><img src="../assets/images/logo.png" alt="footer" /><span
                  >Andreea <small>&amp;</small> Andrei</span
                ><span class="secondary">Sara Ștefania</span></a
              >
            </h2>
            <p class="copyright">27 Iulie 2025 – Buzău</p>
            <p class="mb-0">Andreea: 0729 925 786</p>
            <p class="mt-0">Andrei: 0768 875 797</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "../assets/images/bg_celestial_homepage.jpeg";

import { ref, onMounted } from "vue";
</script>

<style>
@import "../assets/css/animate.css";
@import "../assets/css/bootstrap.css";
@import "../assets/css/magnific-popup.css";
@import "../assets/css/owl-carousel.min.css";
@import "../assets/css/owl.theme.default.min.css";
@import "../assets/css/style.css";
@import "../assets/css/themify-icons.css";

main {
  padding: 0 !important;
}
</style>
