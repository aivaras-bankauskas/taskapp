<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar">
    <div class="container">
      <RouterLink class="navbar-brand text-white fs-3" to="/">Task Manager</RouterLink>
      <RouterLink class="btn btn-primary px-3" to="/tasks/create">Add task</RouterLink>
    </div>
  </nav>
</template>
