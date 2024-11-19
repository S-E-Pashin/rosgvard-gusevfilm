<script setup>
import NavigationItem from '@/components/NavigationItem.vue';
</script>

<template>
  <div class="menu-settings">
    <h4>Настройки</h4>
    <NavigationItem name="Профиль" img="icon-profile.svg" path="404" />
    <NavigationItem name="Общие настройки" img="icon-general-settings.svg" path="404" />
  </div>
</template>

<style scoped>
.menu-settings {
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
