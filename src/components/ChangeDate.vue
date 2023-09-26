<template>
  <div>
    <vue-changedate>
      <input type="text" placeholder="New Date" />
      <button @click="handleSubmit">Change date</button>
    </vue-changedate>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../stores/club";

const store = useUserStore();
const nameInput = ref("");

const handleSubmit = () => {
  store.changeDate(nameInput.value);
  nameInput.value = "";
};
</script>
