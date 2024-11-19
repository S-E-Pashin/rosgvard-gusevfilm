<script setup>

import NavigationMenu from '@/components/NavigationMenu.vue';
import MenuInfo from '@/components/MenuInfo.vue';
import MenuSettings from '@/components/MenuSettings.vue';
</script>

<template>
  <nav class="main-navigation">
    <NavigationMenu />
    <MenuInfo />
    <MenuSettings />
  </nav>
</template>

<style scoped>
  .main-navigation {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 15.63rem;
    min-height: 100vh;
    padding-top: 1.1rem;

    box-shadow: inset -0.06rem 0 0 0 rgb(215, 219, 236);
    background: rgb(245, 246, 250);
  }
</style>
