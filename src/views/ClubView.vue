<template>
  <div v-if="!store.user.isAuthenticated">
    <NotLoggedPageGuard />
  </div>
  <div v-else-if="store.user.role !== 'Admin'">
    <NoPermsPageGuard />
  </div>
  <div v-else-if="store.user.isAuthenticated &&
    store.user.role == 'Admin'">
    <div class="w-screen h-auto flex flex-col">
      <div class="w-full h-[15vh] border-b-2 flex flex-row items-center justify-center">
        <div class="w-[30%] text-2xl pl-6">{{ clubStore.clubName }}</div>
        <UserIcon class="pl-[48vw] h-[12vh]"></UserIcon>
        <div class=" text-2xl">{{ clubStore.room }}</div>
      </div>
      <div class="w-full flex flex-col justify-start items-center pt-3">
        <a href="https://www.youtube.com/watch?v=RbhVgdDoY3Q" target="_blank"
          class="bg-black h-[7vh] w-[50vh] flex flex-col items-center justify-center rounded-full text-[#fff]">Photo
          Attendance Link</a>
        <p>Advisor: {{ clubStore.clubAdvisor }}</p>
        <p>President: {{ clubStore.clubPresident }}</p>
      </div>
      <div class="w-full flex flex-col justify-start items-center pt-3">
        First Name | Last Name | Position | # of Attendances
        <div v-for="student in store.clubMembers">
          {{ student["First Name"] }}
          {{ student["Last Name"] }}
          {{ student["Position"] }}
          {{ student["# of Attendances"] }}
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Error
  </div>
</template>

<script setup lang="ts">
//admin only 
// import StudentCard from "@/components/StudentCard.vue";
import { UserIcon } from "@heroicons/vue/20/solid";
import { onMounted } from "vue";
import { useClubStore } from '../stores/club'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from "@/stores/users";
import NotLoggedPageGuard from '@/components/Reusables/NotLoggedPageGuard.vue'
import NoPermsPageGuard from '@/components/Reusables/NoPermsPageGuard.vue'
let store = useUserStore();
const clubStore = useClubStore()
const route = useRoute()


onMounted(() => {
  const queryVal = route.query.name
  const queryStr: string | undefined = queryVal?.toString()
  const year = "2024-2025"
  clubStore.getData(queryStr, year)

  console.log(clubStore.club)
});

defineProps({
  clubName: String,
  memberAmount: Number,
  president: String,
  advisor: String,
  lastMeeting: Date,
  nextMeting: Date,
  dayOfWeek: String,
  meetingAmount: Number,
});
</script>
