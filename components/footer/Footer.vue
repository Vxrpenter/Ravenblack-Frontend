<script setup lang="ts">
</script>

<template>
  <div data-aos="fade-down">
    <footer class="px-4 py-4 max-w-screen-xl mx-auto">
      <UContainer>
        <UDivider class="py-4 gap-2"/>
      </UContainer>
      <UContainer class="flex py-4 gap-2 lg:gap-52">
        <div>
          <h2>Getting Started</h2>
          <p><NuxtLink to="/regelwerk/scp">Lies die SL Regeln</NuxtLink></p>
          <p><NuxtLink to="/servers">Suche dir einen Server aus</NuxtLink></p>
        </div>
        <div>
          <h2>Community</h2>
          <p><NuxtLink to="https://discord.gg/3uGrFYr98n">Discord</NuxtLink></p>
          <p><NuxtLink to="https://www.tiktok.com/@ravenblacksl?_t=8qXazWhGLYX&_r=1">TikTok</NuxtLink></p>
          <p><NuxtLink to="https://www.instagram.com/ravenblacksl/profilecard/">Instagram</NuxtLink></p>
          <p><NuxtLink to="https://youtube.com/@ravenblacksl?feature=shared">Youtube</NuxtLink></p>
        </div>
        <div>
          <h2>Ravenblack</h2>
          <p><NuxtLink to="/ueber-uns">Über Uns</NuxtLink></p>
          <p><NuxtLink to="/team">Unser Team</NuxtLink></p>
        </div>
        <div>
          <h2>Terms</h2>
          <p><NuxtLink to="/impressum">Impressum</NuxtLink></p>
          <p><NuxtLink to="/terms">Terms</NuxtLink></p>
          <p><NuxtLink to="/">Privacy Policy</NuxtLink></p>
          <p><NuxtLink to="/guidelines">Nutzer Richtlinien</NuxtLink></p>
        </div>
      </UContainer>
      <UContainer>
        <UDivider class="my-4"/>
      </UContainer>
      <div class="">
        <UContainer class="py-4 gap-2 ">
          <div class="float-left">
            <NuxtLink to="/"><h1 id="align_text">Ravenblack</h1></NuxtLink>
          </div>
          <div class="float-right">
            <NuxtLink to="https://github.com/Vxrpenter/Ravenblack-Frontend/blob/master/LICENCE"><p id="align_text">© 2024 Ravenblack</p></NuxtLink>
          </div>
        </UContainer>
      </div>
    </footer>
  </div>

</template>

<style scoped>
h1 {
  font-size: 25px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  color: white;
}
h2 {
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 15px;
}

p {
  color: gray;
  font-size: 14px;
}
#align_text {
  margin-top: -20px;
}
p:hover {
  text-decoration: underline;
}
</style>