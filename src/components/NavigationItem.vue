<script setup>
  const props = defineProps(['name', 'img', 'counter', 'path']);
  const urlImg = 'url(src/images/icon-navigate/' + props.img + ')';
  const counter = props.counter !== undefined;
</script>

<template>
<router-link :to="{name: path}" class="item-body">
  <div class="item-image" :style="{ backgroundImage: `${urlImg}` }" ></div>
  <div class="item-text">{{props.name}}</div>
  <div class="item-info" v-if="counter">{{ props.counter }}</div>
</router-link>
</template>

<style scoped>
  .item-body {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 13.63rem;
    height: 2.75rem;
    padding-left: 1rem;
    border-radius: 4px;

    .item-image {
      width: 1.5rem;
      height: 1.5rem;
    }

    .item-text {
      padding-left: 1rem;
      color: rgb(90, 96, 127);
      font-size: 0.88rem;
      font-weight: 500;
      line-height: 1.25rem;
      letter-spacing: 0;
      text-align: left;
    }

    .item-info {
      width: 1.63rem;
      height: 1rem;
      margin-left: 3.9rem;
      border-radius: 12px;

      color: rgb(255, 255, 255);
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1rem;
      letter-spacing: 0;
      text-align: center;
      background: rgb(19, 21, 35);
    }
  }

  .item-body:hover, .item-body:active {

    .item-text {
      color: rgb(255, 255, 255);
    }
    background-color: #1E5EFF;
  }
</style>
