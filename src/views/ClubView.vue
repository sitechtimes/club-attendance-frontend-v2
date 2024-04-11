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
      <div class="w-full h-[30vh] flex flex-row 
      border-b-[0.15rem] overflow-hidden">
      <div>
         <img
             src="@/assets/sammy.jpg"
             alt="Sammy the Seagull"
             class="w-[300px] h-[30vh]"
         />
        <!-- club photo placeholder -->
      </div>
      <div class="flex flex-col">
        <div class="flex flex-row">
         <div class="w-[30vw] h-[10vh] text-2xl border-black p-1
         pb-[2.5rem] pl-6 border-b-[0.15rem] text-gold text-clip
         text-drop-shadow-[0_1.2px_1.2px_rgba(0,0,0)]">{{ clubStore.clubName }}</div>
         <UserIcon class="h-[12vh]  border-l-[0.15rem] border-b-[0.15rem]"></UserIcon>
         <div class=" text-2xl border-b-[0.15rem] h-[12vh]"> Room {{ clubStore.room }}</div>
        <RouterLink to="/admin" class="font-normal text-[2rem] 
        w-[10vw] p-1 h-[12vh] border-b-[0.15rem] flex flex-row-reverse">Admin</RouterLink>
       </div>
       <div class="flex flex-row">
        <div class="flex-col w-[30vw] pl-6">
          <div>Advisor: {{ clubStore.clubAdvisor }}</div>
          <div>President: {{ clubStore.clubPresident }}</div>
        </div>
        <div class="w-full flex flex-col justify-start items-center pt-3">
        <a href="https://www.youtube.com/watch?v=RbhVgdDoY3Q" target="_blank"
          class="bg-black h-[7vh] w-[50vh] flex flex-col items-center justify-center rounded-full text-[#fff]">Photo
          Attendance Link</a>
      </div> 
       </div>
      </div>
      </div>
       <table class="table-auto border-collapse border border-slate-400 w-[80vw] m-auto overflow-auto">
  <thead>
    <tr>
      <th class="border border-slate-300 border-2">Name</th>
      <th class="border border-slate-300 border-2">Position</th>
      <th class="border border-slate-300 border-2">Number of Attendences</th>
      <th class="border border-slate-300 border-2">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="student in store.clubMembers">
      <td class="border border-slate-300 text-center border-2">{{ student["First Name"] }} {{ student["Last Name"] }}</td>
      <td class="border border-slate-300 text-center border-2">{{ student["Position"] }}</td>
      <td class="border border-slate-300 text-center border-2">{{ student["# of Attendances"] }}</td>
      <td class="border border-slate-300 text-center border-2">{{ student["Email"] }}</td>
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

function logOut() {
  document.cookie.split(";").forEach(
    function (c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  store.loggedIn = false
  store.user = {
    uid: '',
    firstName: '',
    lastName: '',
    email: '',
    picture: '',
    role: '',
    isAuthenticated: false,
    ClubData: ({
      PresidentOf: [],
      MemberOf: []
    })
  }
  routePush('/')
}

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
