import './assets/main.css'

import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import { createPinia } from 'pinia'
import App from './App.vue'
import NothingIsSelected from '@/components/page/NothingIsSelected.vue';
import PageKnowledgeBase from '@/components/page/PageKnowledgeBase.vue';

const router = createRouter({
  routes: [
    {
    path: '/',
    name: 'base',
    component: PageKnowledgeBase
  },
    {
      path: '/404',
      name: '404',
      component: NothingIsSelected
    }
  ],
  history: createWebHistory()
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
