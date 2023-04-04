<script setup>
import data from './database/data.json'
import TaskCard from './views/components/TaskCard.vue'
import NavbarLayout from './views/layout/NavbarLayout.vue'
</script>

<template>
  <NavbarLayout />
  <div class="container">
    <div class="my-2">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-1">
        <div class="col p-2" v-for="task in data.tasks" :key="task.id">
          <TaskCard :title="task.title" :description="task.description" :status="task.status" />
        </div>
      </div>
    </div>
  </div>
</template>
