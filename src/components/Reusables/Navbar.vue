<template>
  <div>
    <nav class="bg-black text-white flex flex-nowrap
    h-[107px] items-center z-10 relative overflow-hidden">
      <RouterLink to="/">
        <!-- <img src="@/assets/SeagullCalendarNT.png" 
      alt="A seagull sitting on top of a calendar" 
      class="h-[107px]"> -->
      </RouterLink>
      <h1 class="text-white text-[64px] font-kranky ml-3">
        Club Attendance</h1>
      <div class="absolute right-[1rem]">
        <RouterLink to="/confirmation" class="font-normal font-katibeh text-[2rem] mr-[3rem]">
          Student</RouterLink>
        <!-- currently routed to confirmation for testing, in future confirmation will be reached via qr code-->
        <RouterLink v-if="userStore.user.role == 'Club President'" to="/president"
          class="font-normal font-katibeh text-[2rem] mr-[3rem]">
          President</RouterLink>
        <RouterLink v-if="userStore.user.role == 'Admin'" to="/admin"
          class="font-normal font-katibeh text-[2rem] mr-[3rem]">
          Admin</RouterLink>
        <!-- <RouterLink to="/calendar" class="font-normal font-katibeh text-[2rem]">
          Calendar</RouterLink> -->
        <button v-if="userStore.loggedIn" class="p-4 shadow-xl cursor-pointer rounded-md font-Katibeh
          hover:scale-110 ease-in-out duration-300 w-36 h-18 flex 
          justify-evenly items-center text-black bg-gold rounded-[2rem]
          inline-flex ml-[1rem]" @click="deleteCookies">
          Log Out
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/users';
import { useRouter } from 'vue-router'
const router = useRouter()

function routePush(route: string) {
  router.push(`${route}`)
}

const userStore = useUserStore()

function deleteCookies() {
  document.cookie.split(";").forEach(
    function (c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  userStore.loggedIn = false
  userStore.user.isAuthenticated = false
  routePush('/')
}
</script>