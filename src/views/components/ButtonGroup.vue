<script setup>
import Swal from 'sweetalert2'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import TaskService from '../../services/TaskService'

const router = useRouter()

const props = defineProps({
  id: Number,
  showButtons: {
    type: Boolean,
    default: false
  }
})

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 2000
})

const deleteTask = async (id) => {
  try {
    const result = await Swal.fire({
      text: 'Are you sure you want to delete this task?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0D6EFD',
      cancelButtonColor: '#6C757D',
      confirmButtonText: 'Yes, delete it!'
    })
    if (result.isConfirmed) {
      await TaskService.destroyTask(id)
      await router.push('/')
      await Toast.fire({
        icon: 'success',
        title: 'Task deleted successfully!'
      })
    }
  } catch (error) {
    console.error(error.message)
  }
}
</script>
<template>
  <div class="text-end" v-if="props.showButtons">
    <button @click="deleteTask(props.id)" class="btn btn-link btn-sm text-danger mx-1">
      <i class="bi bi-x-octagon"></i> Delete task
    </button>
    <RouterLink
      class="btn btn-link btn-sm text-warning mx-1"
      :to="{ name: 'editTask', params: { id: props.id } }"
    >
      <i class="bi bi-pencil-square"></i> Edit task
    </RouterLink>
    <RouterLink class="btn btn-link btn-sm text-primary mx-1" :to="{ name: 'allTasks' }">
      <i class="bi bi-x-lg"></i> Close
    </RouterLink>
  </div>
</template>
