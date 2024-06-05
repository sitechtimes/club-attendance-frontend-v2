<template>
    <div class="mt-4">
      <img :src=clubStore.qrCode />
    </div>
  </template>
  
  <script setup lang="ts">
  import { useClubStore } from "@/stores/club";
  const clubStore = useClubStore();
  </script>
  