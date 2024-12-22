<script setup lang="ts">
const items = [{
  label: 'Robuste Server',
  icon: 'i-heroicons-information-circle',
  content: 'Unsere Server laufen fast Fehlerfrei und halten eine große Menge von Spielern aus. Auch vor DDOS Attacken sind wir geschützt. Sollten fehler auftreten, wird unser Team sich diese sofort vornehmen und den server so schnell wie möglich wieder online nehmen'
}, {
  label: 'Professionelles und Kompetentes Team',
  icon: 'i-heroicons-arrow-down-tray',
  content: ''
}, {
  label: 'Qualitatives Modding',
  icon: 'i-heroicons-eye-dropper',
  content: ''
}, {
  label: 'Quality of Life Features',
  icon: 'i-heroicons-rectangle-group',
  content: ''
}, {
  label: 'Aktive Playerbase',
  icon: 'i-heroicons-square-3-stack-3d',
  content: ''
}]
</script>

<template>
  <UContainer class="info">
    <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }" multiple>
      <template #default="{ item, index, open }">
        <UButton color="gray" variant="ghost">
          <template #leading>
            <div class="w-6 h-6 flex items-center justify-center -my-1">
              <UIcon :name="item.icon" class="w-4 h-4 text-white" />
            </div>
          </template>

          <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

          <template #trailing>
            <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="w-5 h-5 ms-auto transform transition-transform duration-200"
                :class="[open && 'rotate-90']"
            />
          </template>
        </UButton>
      </template>
    </UAccordion>
  </UContainer>
</template>

<style scoped>
.info {
  background-color: transparent;
  width: 800px;
  height: 450px;
  border-radius: 15px;
}
</style>