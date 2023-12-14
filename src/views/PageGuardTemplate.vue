<template>
    <div v-if="!store.user.isAuthenticated">
    <PageGuard/>
    </div>
    <div v-else-if="store.user.isAuthenticated">
    
    </div>
    <div v-else>
      Error
    </div>
  </template>

<script setup lang="ts">
//only president+admin can see
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/users";
import ClubCard from '@/components/PresidentComponents/ClubCard.vue';
import PageGuard from '@/components/Reusables/PageGuard.vue'
let store = useUserStore();
</script>