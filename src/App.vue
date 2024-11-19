<script setup>

import Header from '@/components/header/Header.vue';
import MainField from '@/components/main-field/MainField.vue';
</script>

<template>
  <Header />
    <main>
      <MainField />
    </main>
</template>

<style scoped>

  main {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    min-height: 500px;
    background-color: rgb(245, 246, 250);
  }
</style>
