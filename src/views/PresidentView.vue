<template>
  <errorScreen v-if="userStore.user['Client Authority'] !== 'Club President'" />
  <div v-if="userStore.user['Client Authority'] == 'Club President'" class=" h-screen">
    <Navbar></Navbar>
    <div class="p-6 flex flex-col justify-evenly items-center gap-6 md:flex-row md:flex-wrap">
      <ClubCard v-for="club in clubStore.club" :name="club.clubName" :nextMeeting="club.nextMeeting" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ClubCard from '@/components/PresidentComponents/ClubCard.vue';
import Navbar from "@/components/Reusables/Navbar.vue";
import errorScreen from "@/components/Reusables/NoPermsPageGuard.vue";
import { useUserStore } from '@/stores/users'
import { useClubStore } from '@/stores/club'
import { onMounted } from 'vue'

const clubStore = useClubStore()
const userStore = useUserStore()

onMounted(() => {
  clubStore.club = []
  userStore.user['Club Data'].PresidentOf.forEach((club: string) => {
    clubStore.getData(club, "2024-2025")
  });
})

</script>
