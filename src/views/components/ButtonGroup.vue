<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  id: Number,
  showButtons: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div class="text-end" v-if="props.showButtons">
    <button class="btn btn-link btn-sm text-danger mx-1">
      <i class="bi bi-x-octagon"></i> Delete task
    </button>
    <RouterLink
      class="btn btn-link btn-sm text-warning mx-1"
      :to="{ name: 'editTask', params: { id: props.id } }"
    >
      <i class="bi bi-pencil-square"></i> Edit task
    </RouterLink>
    <RouterLink class="btn btn-link btn-sm text-primary mx-1" :to="{ name: 'allTasks' }">
      <i class="bi bi-x-lg"></i> Close
    </RouterLink>
  </div>
</template>
