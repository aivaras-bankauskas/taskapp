<script setup></script>
<template>
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
</template>
