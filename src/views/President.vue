<template>
  <div class="h-screen">
    <div class="p-6 flex flex-col justify-evenly items-center gap-6 md:flex-row md:flex-wrap">
      <ClubCard v-for="club in userStore.userClubData.PresidentOf" :name="club"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ClubCard from '@/components/PresidentComponents/ClubCard.vue';
  import { onMounted } from 'vue'
  import { useUserStore } from '@/stores/users'

  const userStore = useUserStore()

</script>
