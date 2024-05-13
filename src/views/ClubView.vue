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
      <div class="w-[150vw] h-[30vh] flex flex-row 
      border-b-[0.15rem] overflow-hidden">
      <div>
         <img
             src="@/assets/sammy.jpg"
             alt="Sammy the Seagull"
             class="w-[20vw] h-[30vh]"
         />
        <!-- club photo placeholder -->
      </div>
      <div class="flex flex-col">
        <div class="flex flex-row">
         <div class="w-[30vw] h-[10vh] text-5xl border-black p-3
         font-katibeh border-b-[0.15rem] text-gold text-clip
          overflow-hidden">
          <div class="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">{{ clubStore.clubName }}</div> 
        </div>
         <div class="flex flex-row w-[30vw] overflow-hidden
          border-b-[0.15rem]  border-l-[0.15rem] border-r-[0.15rem] h-[12vh]">
         <UserIcon class="h-[12vh]"></UserIcon>
         <div class=" text-2xl
         h-[12vh] content-center"> # of members: {{ store.clubMembers.length }}</div>
         <div class=" text-2xl 
          pr-[2rem] h-[12vh] ml-20 content-center"> Room {{ clubStore.room }}</div>
         </div>
         <div class=" border-b-[0.15rem] overflow-hidden
         h-[12vh]  flex flex-row items-center w-[20vw] justify-center">
          <RouterLink to="/admin" class="font-normal text-[2rem]  
          \pt-2">Admin</RouterLink>
          <LogOut class="ml-[1rem]"></LogOut>
         </div>
       </div>
       <div class="flex flex-row">
        <div class="flex-col w-[60vw] font-katibeh pl-6 pb-[50rem] 
        p-3 text-3xl border-r-[0.15rem]">
          <div>Advisor: {{ clubStore.clubAdvisor }}</div>
          <div>President: {{ clubStore.clubPresident }}</div>
        </div>
        <div class="w-full flex flex-col justify-start items-center pt-8">
        <a href="https://www.youtube.com/watch?v=RbhVgdDoY3Q" target="_blank"
          class="bg-gold h-[7vh] w-[35vh] flex flex-col border-2 items-center 
          justify-center rounded-full text-black">Club
          Attendance Link</a>
      </div> 
       </div>
      </div>
      </div>
       <table class="table-auto border-collapse border border-slate-400 w-[80vw] mt-3 m-auto overflow-auto">
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
      <td class="border border-slate-300 text-center border-2">
        {{ student["First Name"] }} {{ student["Last Name"] }}</td>
      <td class="border border-slate-300 text-center border-2">
        {{ student["Position"] }}</td>
      <td class="border border-slate-300 text-center border-2">
        {{ student["# of Attendances"] }}</td>
      <td class="border border-slate-300 text-center border-2">
        {{ student["Email"] }}</td>
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
import { onMounted, ref, watch } from "vue";
import { useClubStore } from '../stores/club'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from "@/stores/users";
import NotLoggedPageGuard from '@/components/Reusables/NotLoggedPageGuard.vue'
import NoPermsPageGuard from '@/components/Reusables/NoPermsPageGuard.vue'
import LogOut from '@/components/Reusables/LogOut.vue'
let store = useUserStore();
const clubStore = useClubStore()
const route = useRoute()
let numberOfMembers = ref(0)

function getUserCount(userArray: any){
  let n= 0
    userArray.forEach((student: any) => {
      n = n+1
    });
  return n
}

onMounted(() => {
  const queryVal = route.query.name
  const queryStr: string | undefined = queryVal?.toString()
  const year = "2024-2025"
  clubStore.getData(queryStr, year)
  store.getClubMembers(queryStr, year, store.user.uid)
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
  //routePush('/')
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
