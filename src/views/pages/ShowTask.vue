<script setup>
import data from '../../database/data.json'
import TaskCard from '../components/TaskCard.vue'
import SidebarLayout from '../layout/SidebarLayout.vue'

const props = defineProps({ id: String })

const task = data.tasks.find((task) => task.id === Number(props.id))
</script>
<template>
  <div v-if="task" class="my-2">
    <div class="row">
      <div class="col-12 col-lg-9">
        <TaskCard :title="task.title" :description="task.description" :status="task.status" />
      </div>
      <div class="col-12 col-lg-3">
        <SidebarLayout />
      </div>
    </div>
  </div>
</template>
