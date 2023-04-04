<script setup>
import Swal from 'sweetalert2'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TaskService from '../../services/TaskService'
import BaseButton from '../components/base/BaseButton.vue'

const router = useRouter()
const task = ref({
  title: '',
  description: ''
})
const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 2000
})

const createTask = async () => {
  try {
    await TaskService.storeTask({
      id: Date.now(),
      title: task.value.title,
      description: task.value.description,
      status: 'Opened'
    })
    await router.push('/')
    await Toast.fire({
      icon: 'success',
      title: 'Task created successfully!'
    })
  } catch (error) {
    console.error(error.message)
  }
}
</script>
<template>
  <div class="card m-auto" style="max-width: 24rem">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title text-center">Create new task</h5>
        <RouterLink class="text-black" :to="{ name: 'allTasks' }">
          <i class="bi bi-x-lg"></i>
        </RouterLink>
      </div>
      <form @submit.prevent="createTask">
        <div class="mb-3 mt-3">
          <label for="task-title" class="form-label">Title</label>
          <input
            v-model="task.title"
            type="text"
            id="task-title"
            class="form-control"
            placeholder="First Task"
            maxlength="200"
            minlength="5"
            required
          />
        </div>
        <div class="mb-3">
          <label for="task-description" class="form-label">Description</label>
          <textarea
            v-model="task.description"
            id="task-description"
            class="form-control"
            rows="5"
            maxlength="2000"
            required
          ></textarea>
        </div>
        <BaseButton>Create Task</BaseButton>
      </form>
    </div>
  </div>
</template>
