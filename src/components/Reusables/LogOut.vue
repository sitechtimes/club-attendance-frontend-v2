<template>
 <button v-if="userStore.loggedIn" class="p-4 shadow-xl cursor-pointer rounded-md font-Katibeh
   hover:scale-110 ease-in-out duration-300 w-36 h-18 flex 
   justify-evenly items-center text-black bg-gold rounded-[2rem]
   inline-flex" @click="logOut">
      Log Out
  </button>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/users';
import { useRouter } from 'vue-router'
const router = useRouter()

function routePush(route: string) {
  router.push(`${route}`)
}

const userStore = useUserStore()

function logOut() {
  document.cookie.split(";").forEach(
    function (c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  userStore.loggedIn = false
  userStore.user = {
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
</script>