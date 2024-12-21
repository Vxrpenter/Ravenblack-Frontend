<script setup lang="ts">
</script>

<template>
  <NuxtLink class="icon_discord" to="https://discord.gg/EMJXrt26r2"><Icon size="25" name="i-bxl:discord-alt"/></NuxtLink>
  <NuxtLink class="icon_instagram" to="https://www.tiktok.com/@ravenblacksl?_t=8qXazWhGLYX&_r=1"><Icon size="25" name="i-bxl:tiktok"/></NuxtLink>
  <NuxtLink class="icon_tiktok" to="https://www.instagram.com/ravenblacksl/profilecard/"><Icon size="25" name="i-bxl:instagram-alt"/></NuxtLink>
  <NuxtLink class="icon_youtube" to="https://youtube.com/@ravenblacksl?feature=shared"><Icon size="25" name="i-bxl:youtube"/></NuxtLink>
</template>

<style scoped>
.icon_discord {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon_instagram {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon_tiktok {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon_youtube {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon_discord:hover {
  color: #4f4dd9;
  transform: scale(1.2);
}

.icon_instagram:hover {
  color: #25F4EE;
  transform: scale(1.2);
}

.icon_tiktok:hover {
  color: #833AB4;
  transform: scale(1.2);
}

.icon_youtube:hover {
  color: #FF0000;
  transform: scale(1.2);
}
</style>