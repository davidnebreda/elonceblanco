<script setup lang="ts">



  import MainHeader from '~/components/MainHeader.vue';
  import MainMenu from '~/components/MainMenu.vue';
</script>

<template>
  <div id="contacto_page" class="page">
    <MainHeader />
    <MainMenu :activo="4" />
    <main id="main_content" class="container w-auto my-5 h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-center">Contacto</h1>
      <p class="text-center">Aquí puedes encontrar información de contacto.</p>
    </main>
  </div>
</template>

<style scoped>

</style>