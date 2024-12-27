<script setup lang="js">
const list = [
  {
    title: "Modded",
    version: "14.0",
    modded: true,
    exiled: "9.0.1",
    cedmod: true
  },
  {
    title: "Vanilla",
    version: "14.0",
    modded: false,
    exiled: "9.0.1",
    cedmod: true
  },
  {
    title: "Events",
    version: "14.0",
    modded: true,
    exiled: "9.0.1",
    cedmod: true
  }
]
</script>

<template>
  <UContainer>
    <div>
      <h1 class="customText">
        <span style="vertical-align:bottom" class="test type">
          <span>
            <span>Modded Server</span>
            <span>Vanilla Server</span>
            <span>Event Server</span>
          </span>
        </span>
      </h1>
    </div>
  </UContainer>
</template>

<style scoped>
h1 {
  font-size: 35px;
  font-weight: bold;
}

.type > span {
  display:grid;
  overflow: hidden;
  height:1.2em;
}
.type span span {
  width:0;
  max-width:max-content;
  overflow: hidden;
  height:inherit;
  word-break:break-all;
  animation:
      t 2s linear infinite alternate,
      m 12s steps(3) infinite;
}
.type span span:before {
  content:" ";
  display:inline-flex;
}

@keyframes t{
  90%,100% {width:100%}
}
@keyframes c{
  50% {box-shadow:2px 0 0 white  }
}

@keyframes m {
  100% {
    transform: translateY(-300%)
  }
}

.customText {
  margin-left: 440px;
  display:table;
  font-size: 50px;
  font-weight: bold;
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