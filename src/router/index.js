import { createRouter, createWebHistory } from 'vue-router'
import AllTasks from '../views/pages/AllTasks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'allTask',
      component: AllTasks
    }
  ]
})

export default router
