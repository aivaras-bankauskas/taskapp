<script setup>
import BaseTableRow from '../components/base/BaseTableRow.vue'
</script>
<template>
  <div class="card bg-light w-100 h-100 my-4 my-lg-0">
    <div class="card-body">
      <table class="table table-borderless table-sm align-middle">
        <tbody>
          <BaseTableRow title="Project" option="Task manager" color="text-primary" />
          <BaseTableRow title="Priority" option="Normal" color="text-info" />
          <BaseTableRow title="Type" option="bug" color="text-danger" />
          <BaseTableRow title="Assignee" option="Unnasigned" color="text-primary" />
          <BaseTableRow title="Release Date" option="22 Feb 2023" color="text-primary" />
          <BaseTableRow title="Estimations" option="5h" color="text-info" />
        </tbody>
      </table>
    </div>
  </div>
</template>
