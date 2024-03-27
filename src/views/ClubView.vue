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
      <div class="w-full h-[30vh] border-b-2 flex flex-row justify-center">
       <div>
        <img
             src="@/assets/sammy.jpg"
             alt="Sammy the Seagull"
             class="w-[300px] h-[30vh]"
        />
        <!-- club photo placeholder -->
        </div>
        <div class="w-[30%] text-2xl pl-6">{{ clubStore.clubName }}</div>
        <RouterLink to="/admin" class="font-normal text-[2rem] mr-[3rem]">Admin</RouterLink>
        <UserIcon class="pl-[40vw] h-[12vh]"></UserIcon>
        <div class=" text-2xl">{{ clubStore.room }}</div>
      </div>
      <div class="w-full flex flex-col justify-start items-center pt-3">
        <a href="https://www.youtube.com/watch?v=RbhVgdDoY3Q" target="_blank"
          class="bg-black h-[7vh] w-[50vh] flex flex-col items-center justify-center rounded-full text-[#fff]">Photo
          Attendance Link</a>
        <p>Advisor: {{ clubStore.clubAdvisor }}</p>
        <p>President: {{ clubStore.clubPresident }}</p>
      </div>
       <table class="table-auto border-collapse border border-slate-400 w-[80vw] m-auto">
  <thead>
    <tr>
      <th class="border border-slate-300">Name</th>
      <th class="border border-slate-300">Position</th>
      <th class="border border-slate-300">Number of Attendences</th>
      <th class="border border-slate-300">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="student in store.clubMembers">
      <td class="border border-slate-300 text-center">{{ student["First Name"] }} {{ student["Last Name"] }}</td>
      <td class="border border-slate-300 text-center">{{ student["Position"] }}</td>
      <td class="border border-slate-300 text-center">{{ student["# of Attendances"] }}</td>
      <td class="border border-slate-300 text-center">{{ student["Email"] }}</td>
    </tr>
  </tbody>
       </table>
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
  console.log(store.clubMembers)
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
