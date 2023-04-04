<script setup>
import TaskCard from './views/components/TaskCard.vue'
import NavbarLayout from './views/layout/NavbarLayout.vue'
</script>

<template>
  <NavbarLayout />
  <div class="container">
    <div class="my-2">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-1">
        <div class="col p-2">
          <TaskCard title="First Task" description="Lorem Ipsum" status="Opened" />
        </div>
        <div class="col p-2">
          <TaskCard title="Second Task" description="Lorem Ipsum" status="In Progress" />
        </div>
        <div class="col p-2">
          <TaskCard title="Third Task" description="Lorem Ipsum" status="Done" />
        </div>
      </div>
    </div>
  </div>
</template>
