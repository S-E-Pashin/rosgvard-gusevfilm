<script setup>
import NavigationItem from '@/components/NavigationItem.vue';
</script>

<template>
  <div class="menu-info">
    <h4>Информация</h4>
    <NavigationItem name="База знаний" img="icon-knowledge-base.svg" path="base"/>
    <NavigationItem name="Обновления" img="icon-updates.svg" path="404" />
  </div>
</template>

<style scoped>
  .menu-info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 1.76rem;

    h4 {
      align-self: start;
      padding-left: 1rem;
      padding-bottom: 0.75rem;
      color: rgb(161, 167, 196);
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1rem;
      letter-spacing: 0;
      text-align: left;
    }
  }
</style>
