<script setup lang="ts">
</script>

<template>
  <UButton to="/team" leading-icon="i-heroicons:user-16-solid" label="Team" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-xl'}"/>
  <UButton to="/serverstatus" leading-icon="i-heroicons:server-16-solid" label="Server Status" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-xl'}"/>
  <UPopover mode="hover" :popper="{ placement: 'bottom-start', strategy: 'absolute' }">
    <UButton leading-icon="i-heroicons:book-open-16-solid" label="Regelwerk" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-xl'}"/>

    <template #panel>
      <div class="p-4 w-64">
        <div>
          <UButton to="/regelwerk/discord" leading-icon="i-heroicons-chevron-right-16-solid" label="Discord" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-xl'}"/>
        </div>
        <div>
          <UButton to="/regelwerk/scp" leading-icon="i-heroicons-chevron-right-16-solid" label="SCP Secret Laboratory" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-xl'}"/>
        </div>
      </div>
    </template>
  </UPopover>
  <UButton to="/support" leading-icon="i-heroicons:chat-bubble-left-ellipsis-16-solid" label="Support" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-xl'}"/>
</template>

<style scoped>
</style>