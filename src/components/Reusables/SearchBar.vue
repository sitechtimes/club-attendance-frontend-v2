<template>
  <input class="w-[55%] border-2 border-black h-[45%] rounded-full pl-2 ml-2 " placeholder="Search"
    @input="modifyProp(); $emit('search')" v-model="query" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({ modelValue: String })
const emit = defineEmits(['search'])
const query = ref('')
const modifyProp = () => {
  props.modelValue = query.value
}
</script>
