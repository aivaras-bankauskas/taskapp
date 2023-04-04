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
const badgeColor = (status) => {
  if (status === 'Done') return 'success'
  if (status === 'In progress') return 'warning'
  if (status === 'Closed') return 'danger'
  return 'info'
}
</script>
<template>
  <div class="card">
    <div class="card-body pb-3">
      <h5 class="card-title">{{ task.title }}</h5>
      <span :class="`badge rounded-pill fw-normal my-2 px-3 text-bg-${badgeColor(task.status)}`">
        {{ task.status }}
      </span>
      <p class="card-description card-text">{{ task.description }}</p>
      <ButtonGroup :show-buttons="task.showButtons" :id="task.id" />
    </div>
  </div>
</template>
