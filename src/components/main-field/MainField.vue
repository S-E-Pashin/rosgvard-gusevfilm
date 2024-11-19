<script setup>

import NavigationMenu from '@/components/NavigationMenu.vue';
import MainPlace from '@/components/MainPlace.vue';
import MainNavigation from '@/components/MainNavigation.vue';
</script>

<template>
  <article class="main-field">
    <MainNavigation />
    <MainPlace />
  </article>
</template>

<style scoped>
  .main-field {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    max-width: 1440px;
  }
</style>
