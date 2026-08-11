<script setup lang="ts">

const props = defineProps(
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
    route: '/shows',
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
        <NuxtLink :to="item.route" class="text-decoration-none text-dark menuitems_active" v-if="props.activo === item.id">{{ item.name }}</NuxtLink>
        <NuxtLink :to="item.route" class="text-decoration-none text-dark menuitems" v-else>{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
 .menuitems {
   font-size: 1.3rem;
 }

 .menuitems_active {
   font-size: 1.3rem;
   font-weight: bold;
 }
</style>