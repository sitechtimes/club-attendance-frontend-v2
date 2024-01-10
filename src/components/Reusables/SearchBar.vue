<template>
  <input
    class="w-[55%] border-2 border-black h-[35%] rounded-full pl-2 ml-2 "
    placeholder="Search"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>