import { createRouter, createWebHistory } from 'vue-router'
import AllTasks from '../views/pages/AllTasks.vue'
import CreateTask from '../views/pages/CreateTask.vue'
import EditTask from '../views/pages/EditTask.vue'
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
    },
    {
      path: '/tasks/:id/edit',
      props: true,
      name: 'editTask',
      component: EditTask
    }
  ]
})

export default router
