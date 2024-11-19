<script setup>
  import {pageMocks} from '@/mocks/data.js';
  const heading = pageMocks['База знаний'].heading;
  const sections = pageMocks['База знаний'].sections;

  // let content = () => {
  //   sections.map(section => (
  //       // <SectionName name={section.name} active={section.active} />
  //   ))
  // }
</script>

<template>
  <div class="main-place">
    <div class="main-place-header">
      <router-link class="main-return" :to="{name: 'base'}">
        Назад
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.main-place {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  background: rgb(245, 246, 250);
}

.main-place-header {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  width: 100%;
  padding: 1.85rem 0 0 2.55rem;
}

.main-return {
  text-decoration: none;
  align-self: start;
  padding-left: 1rem;
  border: none;
  color: rgb(90, 96, 127);
  font-size: 0.81rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0;
  text-align: left;
  background-image: url('src/images/icon-navigate/icon-return.svg');
  background-repeat: no-repeat;
  background-position: 0 center;
  background-color: transparent;
}
</style>
