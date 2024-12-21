<script setup lang="ts">
import RavenblackOverview from "~/components/home/RavenblackOverview.vue";
</script>

<template>
  <video autoplay loop muted>
    <source src="~/public/videos/video.webm" type="video/webm">
  </video>

  <section>
    <div class="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8">
      <div>
        <div class="py-1 space-y-5 max-w-4xl mx-auto text-center">
          <h1>Ravenblack</h1>
        </div>
        <p class="dark:text-white">SCP Secret Laboratory und GMOD an einem Ort</p>
      </div>
      <div class="py-3 space-x-4 space-y-5 max-w-4xl mx-auto text-center">
        <UButton to="/ueber-uns" label="Über Uns" leading-icon="i-heroicons:pencil-square-16-solid" variant="outline" color="gray" size="xl"/>
        <UButton to="/regelwerk" label="Regelwerk" leading-icon="i-heroicons:book-open-16-solid" variant="solid" color="primary" size="xl"/>
      </div>
      <div class="py-3 space-x-4 space-y-5 max-w-4xl mx-auto text-center">
        <UButton label="ravenblack.de:7777"  trailing-icon="i-heroicons:clipboard-document-16-solid" varient="soft" color="gray" size="xl"/>
      </div>
    </div>
    <div>
      <UContainer class="info">
        <RavenblackOverview />
      </UContainer>
    </div>
    <div data-aos="fade-up" class="seperator">
      <UContainer class="rules">
        <p>test</p>
      </UContainer>
    </div>
    <div class="seperator">

    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: 45px;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-align: center;
}

h2 {
  font-size: 25px;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-align: center;
}

p {
  color: white;
  font-family: Inter, sans-serif;
  text-align: center;
}

.seperator {
  margin-top: 400px;
}

.rules {
  background-color: #121212;
  width: 600px;
  height: 600px;
  border-radius: 15px;
}

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