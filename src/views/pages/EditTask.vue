<script setup>
import Swal from 'sweetalert2'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import TaskService from '../../services/TaskService'
import BaseButton from '../components/base/BaseButton.vue'

const router = useRouter()
const props = defineProps(['id'])
const task = ref(null)

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 2000
})

onMounted(async () => {
  showTask()
})

const showTask = async () => {
  try {
    const response = await TaskService.getTask(props.id)
    task.value = response.data
  } catch (error) {
    console.error(error.message)
  }
}

const editTask = async () => {
  try {
    await TaskService.updateTask(props.id, {
      title: task.value.title,
      status: task.value.status,
      description: task.value.description
    })
    await router.push({ name: 'showTask', params: { id: props.id } })
    await Toast.fire({
      icon: 'success',
      title: 'Task updated successfully'
    })
  } catch (error) {
    console.error(error.message)
  }
}

const statusList = computed(() => {
  const newList = []
  switch (task.value.status) {
    case 'Opened':
      newList.push('In progress', 'Closed')
      break
    case 'In progress':
      newList.push('Opened', 'Done', 'Closed')
      break
    case 'Done':
      newList.push('Closed')
      break
    case 'Closed':
      newList.push('Opened')
      break
  }
  return newList
})
</script>
<template>
  <div v-if="task" class="card m-auto" style="max-width: 24rem">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title text-center">Update task</h5>
        <RouterLink class="text-black" :to="{ name: 'showTask', params: { id: task.id } }">
          <i class="bi bi-x-lg"></i>
        </RouterLink>
      </div>
      <form @submit.prevent="editTask">
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
        <div class="mb-3 mt-3">
          <select class="form-select" v-model="task.status">
            <option selected>{{ task.status }}</option>
            <option v-for="(status, index) in statusList" :key="index">{{ status }}</option>
          </select>
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
        <BaseButton>Update task</BaseButton>
      </form>
    </div>
  </div>
</template>
