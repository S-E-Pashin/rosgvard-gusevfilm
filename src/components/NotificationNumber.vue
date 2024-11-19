<script setup>
// import {inject} from 'vue';

// const number = inject('notificationsNumber');
// console.log(number);
let props = defineProps(['notificationsNumber']);
</script>

<template>
        <span class="notification-number">
          <span>
            {{props.notificationsNumber}}
          </span>
        </span>
</template>

<style scoped>
.notification-number {
  position: absolute;
  top: -0.2rem;
  left: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: rgb(30, 94, 255);

  span {
    padding-left: 0.1rem;
    color: rgb(255, 255, 255);
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1rem;
    letter-spacing: 0;
    text-align: center;
  }
}
</style>
