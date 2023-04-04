<script setup>
import { RouterView } from 'vue-router'
import NavbarLayout from './views/layout/NavbarLayout.vue'
</script>

<template>
  <NavbarLayout />
  <div class="container">
    <RouterView />
  </div>
</template>
