<template>
  <div
    class="w-full h-auto flex flex-row items-center justify-center border-y-2"
  >
    <h2 class="text-lg font-medium">Student {{ props.studentName }}</h2>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  studentName: String,
});
</script>
