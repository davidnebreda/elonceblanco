<script setup lang="ts">



  import MainHeader from '~/components/MainHeader.vue';
  import MainMenu from '~/components/MainMenu.vue';
</script>

<template>
  <div id="shows_page" class="page">
    <MainHeader />
    <MainMenu :activo="2" />
    <main id="main_content" class="container w-auto my-5 h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-center">Últimos Programas</h1>
      <p class="text-center">Aquí puedes encontrar los últimos programas disponibles.</p>
    </main>
  </div>
</template>

<style scoped>

</style>