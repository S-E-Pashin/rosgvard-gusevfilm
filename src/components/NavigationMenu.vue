<script setup>
import NavigationItem from '@/components/NavigationItem.vue';

const data = {
  request: 16,
}

</script>

<template>
  <div class="navigation-menu">
<!--    ul.navigation-list>li.navigation-item*8-->
    <div class="navigation-list">
      <NavigationItem name="Главная" img="icon-main.svg" path="404" />
      <NavigationItem name="Запросы" img="icon-requests.svg" :counter=data.request />
      <NavigationItem name="Заметки" img="icon-notes.svg" path="404" />
      <NavigationItem name="Категории" img="icon-categories.svg" path="404" />
      <NavigationItem name="Пользователи" img="icon-users.svg" path="404" />
      <NavigationItem name="Статистика" img="icon-statistics.svg" path="404" />
      <NavigationItem name="Избранное" img="icon-favourites.svg" path="404" />
      <NavigationItem name="Поддержка" img="icon-support.svg" path="404" />
    </div>
  </div>
</template>

<style scoped>
  .navigation-menu {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
