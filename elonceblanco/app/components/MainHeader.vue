<script setup lang="ts">
 const page_title = "El Once Blanco";
 const menu_social = [
   {"id":1,"net":"Youtube","logo":"bi bi-youtube","url":"#"},
     {"id":2,"net":"Facebook","logo":"bi bi-facebook","url":"#"},
 ]
</script>

<template>
  <header id="main_header" class="px-3 py-3">
     <div id="main_header_left" class="ps-3">
       <h1 class="h2 text-light fw-bold">{{ page_title }}</h1>
     </div>
    <div id="main_header_right" class="pe-3">
       <ul id="menu-social" class="d-inline-flex gap-3 mb-0">
         <li class="nav-item" v-for="item in menu_social" :key="item.id">
           <a :href="item.url" target="_blank" :title="item.net">
             <i :class="item.logo + ' text-light fs-4'"></i>
           </a>
         </li>
       </ul>
    </div>
  </header>
</template>

<style scoped>
 #main_header {
  display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   background-color: var(--indigo-accent3);
   width: 100%;

 }

 #main_header_left {
   display: flex;
   flex-direction: row;
   align-items: center;

 }

 #main_header_right {
   display: flex;
   flex-direction: row;
   align-items: center;

 }

 #menu-social {
   list-style: none;
 }
</style>