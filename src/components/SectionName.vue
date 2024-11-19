<script setup>
  const props = defineProps(['name', 'active',]);

  let name = 'Первичная настройка';
  let active = true;

</script>

<template>
  <div class="section-name" :class="active ? 'section-name--active' : ''">
    {{name}}
  </div>
</template>

<style scoped>
  .section-name {
    width: 15.94rem;
    height: 2.75rem;
  }

  .section-name--active {
    border-radius: 4px;
    color: rgb(255, 255, 255);
    background-color: #1E5EFF;
  }
</style>
