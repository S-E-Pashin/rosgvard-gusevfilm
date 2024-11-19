<script setup>
const props = defineProps(['name', 'path', 'isActive']);


</script>

<template>
  <li class="section-item" :class="{'section-item--active': isActive}">
    <router-link :to="props.path">{{props.name}}</router-link>
  </li>
</template>

<style scoped>
.section-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15.94rem;
  height: 2.75rem;

  a {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 1.3rem;

    color: rgb(19, 21, 35);
    font-size: 0.88rem;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0;
    text-align: left;
    text-decoration: none;
  }
}

.section-item--active {
  border-radius: 4px;
  background: rgb(30, 94, 255);

  a {
    color: rgb(255, 255, 255);
    font-weight: 700;
  }
}
</style>
