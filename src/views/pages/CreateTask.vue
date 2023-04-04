<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="card m-auto" style="max-width: 24rem">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title text-center">Create new task</h5>
        <RouterLink class="text-black" :to="{ name: 'allTasks' }">
          <i class="bi bi-x-lg"></i>
        </RouterLink>
      </div>
      <form>
        <div class="mb-3 mt-3">
          <label for="task-title" class="form-label">Title</label>
          <input
            type="text"
            id="task-title"
            class="form-control"
            placeholder="First Task"
            maxlength="200"
            minlength="5"
            required
          />
        </div>
        <div class="mb-3 mt-3">
          <select class="form-select">
            <option selected>Opened</option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="task-description" class="form-label">Description</label>
          <textarea
            id="task-description"
            class="form-control"
            rows="5"
            maxlength="2000"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Create task</button>
      </form>
    </div>
  </div>
</template>
