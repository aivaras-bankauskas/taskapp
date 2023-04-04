<script setup>
import { defineProps } from 'vue'
import ButtonGroup from './ButtonGroup.vue'

const task = defineProps({
  id: Number,
  title: String,
  description: String,
  status: String,
  showButtons: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div class="card">
    <div class="card-body pb-3">
      <h5 class="card-title">{{ task.title }}</h5>
      <span class="badge rounded-pill fw-normal my-2 px-3 text-bg-info">{{ task.status }}</span>
      <p class="card-description card-text">{{ task.description }}</p>
      <ButtonGroup :show-buttons="task.showButtons" :id="task.id" />
    </div>
  </div>
</template>
