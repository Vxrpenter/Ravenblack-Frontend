<script setup lang="ts">
import Navbar from "~/components/navbar/Navbar.vue";
import Footer from "~/components/footer/Footer.vue"
</script>

<template>
  <video autoplay loop muted>
    <source src="~/public/videos/video.webm" type="video/webm">
  </video>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="px-4 flex-grow">
      <slot />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>