<script setup lang="ts">
  import MainHeader from '~/components/MainHeader.vue';
  import MainMenu from '~/components/MainMenu.vue';
  import axios from 'axios';
  type Video = {
    idshow: number;
    titulo: string;
    extracto: string;
    youtube: string;
    pub_date: string;
  };

  async function getLastVideo()
  {
    const base_url_api = import.meta.env.VITE_BASE_URL_API;
    const conexurl=`${base_url_api}/lastvideo`;
    try {
      const response = await axios.get(conexurl);
      return response.data;
    } catch (error) {
      console.error("Error fetching last video:", error);
    }
  }
  const lastvideo = await getLastVideo();
  console.log("last video",lastvideo);
  //const lastvideoJson = JSON.parse(lastvideo);
  //console.log("last Video Json",lastvideoJson);

</script>

<template>
  <div id="home_page" class="page">
    <MainHeader />
    <MainMenu :activo="1" />
    <main id="main_content" class="container w-auto my-5 h-100 d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-center">Bienvenido a mi sitio web</h1>
      <p class="text-center">Este es un ejemplo de página de inicio.</p>
    </main>
  </div>
</template>

<style scoped>

</style>