<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import TaskService from '../../services/TaskService'
import TaskCard from '../../views/components/TaskCard.vue'

const tasks = ref([])

onMounted(() => {
  getAllTasks()
})

const getAllTasks = async () => {
  try {
    const response = await TaskService.getTasks()
    tasks.value.push(...response.data)
  } catch (error) {
    console.error(error.message)
  }
}
</script>
<template>
  <div class="my-2">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-1">
      <div class="col p-2" v-for="task in tasks" :key="task.id">
        <RouterLink
          class="text-decoration-none text-black"
          :to="{ name: 'showTask', params: { id: task.id } }"
        >
          <TaskCard :title="task.title" :description="task.description" :status="task.status" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
