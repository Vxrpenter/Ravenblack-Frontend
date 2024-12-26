<script setup lang="ts">
const items = [{
  label: 'Robuste Server',
  defaultOpen: true,
  icon: 'i-heroicons:bolt-16-solid',
  content: 'Unsere Server laufen fast Fehlerfrei und halten eine große Menge von Spielern aus. Auch vor DDOS Attacken sind wir geschützt. Sollten fehler auftreten, wird unser Team sich diese sofort vornehmen und den server so schnell wie möglich wieder online nehmen'
}, {
  label: 'Professionelles und Kompetentes Team',
  icon: 'i-heroicons:user-group-16-solid',
  content: 'Das Serverteam steht die bei Fragen und Problemen zurseite und hilft dir diese zu lösen. Eröffne einfach ein Ticket auf unserem Discord oder nutze unsere Support Funktion'
}, {
  label: 'Qualitatives Modding',
  icon: 'i-heroicons:code-bracket-16-solid',
  content: 'Wir geben uns Mühe die besten Mods für unseren Modded Server auszusuchen und gut zu Konfigurieren, um den bestmöglichen Spielspaß bieten zu können'
}, {
  label: 'Schnelle Antwortzeiten',
  icon: 'i-heroicons:chart-bar-16-solid',
  content: 'Unser Team antworted auf Fragen so schnell wie möglich und konzentriert sich dabei darauf, dein Problem so schnell und präzise wie möglich zu lösen'
}, {
  label: 'Aktive Playerbase',
  icon: 'i-heroicons:identification-16-solid',
  content: 'Wir haben eine aktive Spielerschaft, bei der es sich lohnt vorbei zu schauen'
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

          <span class="m-2 truncate">{{ index + 1 }}. {{ item.label }}</span>

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