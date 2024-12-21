<script setup lang="ts">
</script>

<template>
  <NuxtLink to="/" class="icon-and-text">
    <NuxtImg class="navbar-logo mx-2" id="navbar-logo" format="gif" src="/logos/logo.gif" width="40"/>
    <p>Ravenblack</p>
  </NuxtLink>
</template>

<style scoped>
p {
  font-size: 26px;
  font-family: "Inter", sans-serif;
  text-align: center;
  font-weight: bold;
  color: white;
}

.navbar-logo {
  width: 40px;
  height: 40px;
  object-fit: cover;
  display: block;
  border-radius: 50%;
}

.icon-and-text {
  display: flex;
  align-items: center;
}
</style>