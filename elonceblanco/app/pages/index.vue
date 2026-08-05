<script setup lang="ts">

  definePageMeta({
    title: 'Inicio - El Once Blanco'
  });
  useHead({
    title: 'Inicio - El Once Blanco',
    meta: [
      {
        name: 'description',
        content: 'Bienvenidos al Podcast dedicado al Real Madrid',
      },
    ],
  });

  import MainHeader from '~/components/MainHeader.vue';
</script>

<template>
  <div id="home_page" class="page">
    <MainHeader />
  </div>
</template>

<style scoped>

</style>