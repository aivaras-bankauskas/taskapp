<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import BaseForm from '../components/base/BaseForm.vue'

const props = defineProps({ id: String })
</script>
<template>
  <div class="card m-auto" style="max-width: 24rem">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title text-center">Edit task</h5>
        <RouterLink class="text-black" :to="{ name: 'showTask', params: { id: props.id } }">
          <i class="bi bi-x-lg"></i>
        </RouterLink>
      </div>
      <BaseForm />
    </div>
  </div>
</template>
