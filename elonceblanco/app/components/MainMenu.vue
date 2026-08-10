<script setup lang="ts">

 defineProps(
     {
       activo:Number
     }
 );
 const mainmenuitem = [
  {
    id: 1,
    name: 'Inicio',
    route: '/',
  },
  {
    id: 2,
    name: 'Episodios',
    route: '/about',
  },
  {
    id: 3,
    name: 'Nosotros',
    route: '/about',
  },
   {
    id: 4,
    name: 'Contacto',
    route: '/contacto'
   }
 ];
</script>

<template>
  <div id="main-menu" class="w-100 bg-light d-flex justify-content-center align-items-center py-3">
    <ul class="list-unstyled d-flex gap-3 m-0 p-0">

      <li v-for="item in mainmenuitem" :key="item.id">
        <router-link :to="item.route" class="text-decoration-none text-dark menuitems" :class="{ active: item.id === activo }">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
 .menuitems {
   font-size: 1.3rem;
 }

 .menuitems:active {
   font-size: 1.3rem;
   font-weight: bold;
 }
</style>