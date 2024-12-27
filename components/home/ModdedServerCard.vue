<script setup lang="ts">
const toast = useToast()

function copyToClipBoard({textToCopy}: { textToCopy: any }){
  navigator.clipboard.writeText(textToCopy);

  toast.add({
    id: 'ip_copied',
    title: 'Ip Kopiert',
    description: 'Die Ip für den Modded Server wurde erfolgreich in dein Clipboard kopiert',
    icon: 'i-heroicons:check-16-solid',
    timeout: 5000,
  })
}
</script>

<template>
  <UCard class="moddedCard card rounded-xl">
    <UCard class="innerCard" style="background-color: #121212">
      <div class="icon-and-text">
        <p class="clause">[</p><span class="ger"><span>G</span><span>E</span><span>R</span></span><p class="clause">]</p>
        <p class="ravenblack">Ravenblack</p><br>
      </div>
      <div class="icon-and-text">
        <p class="beginner">Anfängerfreundlich</p> <p style="color: transparent">t</p><p class="lineSeperator"> | </p><p style="color: transparent">t</p>
        <p class="friendlyFire">FF:Aus</p> <p style="color: transparent">t</p><p class="lineSeperator"> | </p><p style="color: transparent">t</p>
        <p class="discord">discord.gg/UFytdZxeeR</p> <p style="color: transparent">t</p><p class="lineSeperator"> | </p><p style="color: transparent">t</p>
        <p class="community">Communitybasiert</p>
      </div>

      <div>
        <p style="color: transparent;">seperator</p>
      </div>

      <div class="icon-and-text">
        <div class="playersText icon-and-text">
          <p>0/30</p>
        </div>

        <p style="color: transparent">This is a</p>

        <div class="moddedText icon-and-text">
          <Icon name="heroicons:wrench-16-solid"/>
          <p>Modded</p>
        </div>
      </div>
    </UCard>

    <div class="m-3 grid grid-cols-3 gap-2">
      <UButton to="/servers" label="Mehr Erfahren" leading-icon="i-heroicons:academic-cap-16-solid" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
      <UButton @click="copyToClipBoard({textToCopy : 'ravenblack.de:7777'})" label="Ip Kopieren" icon="i-heroicons:clipboard-document-16-solid" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
      <UButton to="/regelwerk/scp" label="Regeln Lesen" leading-icon="i-heroicons:book-open-16-solid" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-lg'}"/>
    </div>

    <UNotifications>
      <template #title="{ title }">
        <span v-html="title" />
      </template>

      <template #description="{ description }">
        <span v-html="description" />
      </template>
    </UNotifications>
  </UCard>
</template>

<style scoped>
.clause {
  font-size: 45px;
  font-weight: bold;
  color: white;
}

.ger {
  font-size: 45px;
  font-weight: bold;
}

.ger span:nth-child(1) {
  color: #000000;
}

.ger span:nth-child(2) {
  color: #ff0000;
}

.ger span:nth-child(3) {
  color: #F2C305;
}

.ravenblack {
  font-size: 45px;
  font-weight: bold;
  background: linear-gradient(90deg,
  #ff00f2, #e102ff, #9900ff, #9305e5, #7306d2, #4607b3, #390588, #5100ff, #1c0034, #000000);
  -webkit-background-clip: text;
  color: transparent;
  background-size: 500% 100%;
  background-position: 0 0;
}

.beginner {
  font-size: 13px;
  font-weight: bold;
  color: #F1C40F;
}

.friendlyFire {
  font-size: 13px;
  font-weight: bold;
  color: red;
}

.discord {
  font-size: 13px;
  font-weight: bold;
  color: #21c7d5ff;
}

.community {
  font-size: 13px;
  font-weight: bold;
  color: #ffd966;
}

.lineSeperator {
  font-size: 13px;
  font-weight: bold;
  color: #f8f7faff;
}

.playersText {
  font-size: 20px;
}

.moddedText {
  font-size: 20px;
}

.innerCard {
  border-radius: 10px;
  border: 1px solid gray;
  margin-top: -20px
}

.moddedCard {
  background-color: transparent;
  width: 600px;
  height: 265px;
  border-radius: 15px;
  cursor: pointer;
}

.icon-and-text {
  display: flex;
  align-items: center;
}
</style>