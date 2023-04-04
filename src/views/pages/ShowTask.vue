<script setup>
import { defineProps, onMounted, ref } from 'vue'
import TaskService from '../../services/TaskService'
import TaskCard from '../components/TaskCard.vue'
import SidebarLayout from '../layout/SidebarLayout.vue'

const props = defineProps({ id: String })

const task = ref(null)

onMounted(() => {
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
</script>
<template>
  <div v-if="task" class="my-2">
    <div class="row">
      <div class="col-12 col-lg-9">
        <TaskCard
          :title="task.title"
          :description="task.description"
          :status="task.status"
          :show-buttons="true"
          :id="Number(props.id)"
        />
      </div>
      <div class="col-12 col-lg-3">
        <SidebarLayout />
      </div>
    </div>
  </div>
</template>
