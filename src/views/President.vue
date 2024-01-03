<template>
  <div class="h-screen">
    <div class="p-6 flex flex-col justify-evenly items-center gap-6 md:flex-row md:flex-wrap">
      <!-- <ClubCard v-for="club in userStore.userClubData.PresidentOf" :name="club" /> -->
      <ClubCard v-for="club in clubStore.club" :name="club.clubName" :nextMeeting="club.nextMeeting"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ClubCard from '@/components/PresidentComponents/ClubCard.vue';
  import { useUserStore } from '@/stores/users'
  import { useClubStore } from '@/stores/club'
  const clubStore = useClubStore()
  const userStore = useUserStore()
  userStore.userClubData.PresidentOf.forEach((club: string) => {
    clubStore.getData(club, "2023-2024")
  });
  console.log(clubStore.club)
</script>
