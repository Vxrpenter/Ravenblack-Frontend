<script setup lang="ts">
import Navbar from "~/components/navbar/Navbar.vue";
import Footer from "~/components/footer/Footer.vue"
</script>

<template>
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