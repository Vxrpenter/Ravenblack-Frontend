<script setup lang="ts">
import Brand from "~/components/navbar/Brand.vue";
import NavbarButtons from "~/components/navbar/NavbarButtons.vue";
import NavbarSelection from "~/components/navbar/NavbarSelection.vue";
</script>

<template>
  <header class="header mb-4">
    <UContainer class="flex py-4 gap-2 lg:gap-x-10">
      <Brand />
      <div class="flex items-center mx-28">
        <NavbarSelection />
      </div>
      <div class="flex items-center ml-auto lg:gap-4">
        <NavbarButtons />
      </div>
    </UContainer>
  </header>
</template>

<style>
.header {
  background-color: #121212;
  z-index: 99;
  position: sticky;
  top: 0;
}
</style>