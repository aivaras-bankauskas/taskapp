<script setup>
import { defineProps } from 'vue'

const task = defineProps({
  id: Number,
  title: String,
  description: String,
  status: String
})
</script>
<template>
  <div class="card">
    <div class="card-body pb-5">
      <h5 class="card-title">{{ task.title }}</h5>
      <span class="badge rounded-pill fw-normal my-2 px-3 text-bg-info">{{ task.status }}</span>
      <p class="card-description card-text">{{ task.description }}</p>
    </div>
  </div>
</template>
