import { createRouter, createWebHistory } from 'vue-router'
import AllTasks from '../views/pages/AllTasks.vue'
import CreateTask from '../views/pages/CreateTask.vue'
import ShowTask from '../views/pages/ShowTask.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'allTasks',
      component: AllTasks
    },
    {
      path: '/tasks/:id',
      props: true,
      name: 'showTask',
      component: ShowTask
    },
    {
      path: '/tasks/create',
      name: 'createTask',
      component: CreateTask
    }
  ]
})

export default router
