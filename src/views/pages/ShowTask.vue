<script setup>
import data from '../../database/data.json'
import TaskCard from '../components/TaskCard.vue'

const props = defineProps({ id: String })

const task = data.tasks.find((task) => task.id === Number(props.id))
</script>
<template>
  <TaskCard :title="task.title" :description="task.description" :status="task.status" />
</template>
