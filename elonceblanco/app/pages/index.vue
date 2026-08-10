<script setup lang="ts">



  import MainHeader from '~/components/MainHeader.vue';
  import MainMenu from '~/components/MainMenu.vue';
</script>

<template>
  <div id="home_page" class="page">
    <MainHeader />
    <MainMenu :activo="1" />
  </div>
</template>

<style scoped>

</style>