<script setup lang="ts">
import RavenblackOverview from "~/components/home/RavenblackOverview.vue";
import ModdedServerCard from "~/components/home/ModdedServerCard.vue";
import VanillaServerCard from "~/components/home/VanillaServerCard.vue";
import EventServerCard from "~/components/home/EventServerCard.vue";
</script>

<template>
  <UContainer>
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
          <UButton to="/team" label="Das Team" leading-icon="i-heroicons:user-16-solid" variant="solid" color="primary" size="xl"/>
        </div>
      </div>
      <div>
        <UContainer data-aos="zoom-in" class="info">
          <RavenblackOverview />
        </UContainer>
      </div>
    </section>

    <section>
      <div class="seperator grid grid-cols-2 gap-4">
        <div data-aos="fade-right">
          <ModdedServerCard />
        </div>

        <div></div>
        <div></div>

        <div class="seperator grid grid-cols-3 gap-4">
          <div data-aos="fade-left">
            <VanillaServerCard />
          </div>
        </div>

        <div></div>
        <div></div>

        <div class="seperator grid grid-cols-3 gap-4">
          <div data-aos="fade-right">
            <EventServerCard />
          </div>
        </div>
      </div>

      <div class="seperator"></div>
      <div class="seperator"></div>
    </section>
  </UContainer>
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
  margin-top: 350px;
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