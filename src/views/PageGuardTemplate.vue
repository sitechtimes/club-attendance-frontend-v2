<template>
  <!-- templates for copy pasting -->
  <div v-if="!store.user.isAuthenticated">
  <NotLoggedPageGuard/>
  </div>
  <div v-else-if="store.user.isAuthenticated">
  </div>
  <div v-else>
    Error
  </div>

  <div v-if="!store.user.isAuthenticated">
  <NotLoggedPageGuard/>
  </div>
  <div v-else-if="store.user.role !== 'admin' && store.user.role !== 'president'">
  wow
  </div>
  <div v-else-if="store.user.isAuthenticated && 
  (store.user.role == 'admin' || store.user.role =='president')">
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
import NotLoggedPageGuard from '@/components/Reusables/NotLoggedPageGuard.vue'
let store = useUserStore();
</script>