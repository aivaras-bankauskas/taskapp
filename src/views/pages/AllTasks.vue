<script setup>
import { RouterLink } from 'vue-router'
import data from '../../database/data.json'
import TaskCard from '../../views/components/TaskCard.vue'
</script>
<template>
  <div class="my-2">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-1">
      <div class="col p-2" v-for="task in data.tasks" :key="task.id">
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
