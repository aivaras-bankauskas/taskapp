<script setup>
const props = defineProps({ title: String, option: String, color: String })
</script>
<template>
  <tr>
    <td>{{ props.title }}</td>
    <td :class="props.color">{{ props.option }}</td>
  </tr>
</template>
