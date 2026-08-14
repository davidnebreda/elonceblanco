<script setup lang="ts">
const props = defineProps(
    {
      youtube:String
    }
);
import VueFrame from '@vueframe/vueframe'
</script>

<template>
    <figure class="img-fluid">
      <LiteYouTubeEmbed :video-id="props.youtube" width="640" height="480" />
    </figure>
</template>

<style scoped>

</style>