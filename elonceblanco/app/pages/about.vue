<script setup lang="ts">



  import MainHeader from '~/components/MainHeader.vue';
  import MainMenu from '~/components/MainMenu.vue';
</script>

<template>
  <div id="about_page" class="page">
    <MainHeader />
    <MainMenu :activo="3" />
    <main id="main_content" class="container w-auto my-5 h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-center">Nosotros</h1>
      <p class="text-center">Aquí puedes encontrar información sobre nosotros.</p>
    </main>
  </div>
</template>

<style scoped>

</style>