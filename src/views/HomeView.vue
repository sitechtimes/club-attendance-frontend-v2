<template>
  <div class="w-screen h-screen overflow-hidden relative">
    <Navbar></Navbar>
    <img src="@/assets/SeagullCalendar.png" alt="A seagull sitting on top of a calendar"
      class="w-[240px] mt-[30px] ml-[30px]">
    <div class="bg-gold 
    w-[160rem] h-[45rem] origin-bottom -rotate-[30deg]
    overflow-hidden shrink-0 -ml-[35rem] -mt-[15vh] border">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 2xl:ml-40 ">
        <div class="mx-auto grid max-w-2xl grid-cols-1 
        gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4 rotate-[30deg] ml-[15rem] mt-[9vh]">
            <div v-if="!userStore.loggedIn" class="lg:max-w-lg ">
              <h2 class="text-base font-semibold leading-7 text-black">
                Attendance, made faster
              </h2>
              <p class="mt-2 text-3xl font-bold tracking-tight 
              text-gray-900 sm:text-4xl">
                Club Attendance
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Club attendance has never been easier! Just scan the QR code
                provided by the club president and login with your school email to
                log your attendance.
              </p>
            </div>
            <div v-if="userStore.loggedIn" class="lg:max-w-lg ">
              <h2 class="text-base font-semibold leading-7 text-black">
                Attendance, made faster
              </h2>
              <p class="mt-2 text-3xl font-bold tracking-tight 
              text-gray-900 sm:text-4xl">
                Welcome, {{ userStore.user["First Name"] }} {{ userStore.user["Last Name"] }}
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Club attendance has never been easier! Just scan the QR code
                provided by the club president and login with your school email to
                log your attendance.
              </p>
            </div>
            <div class="flex flex-col mt-8">
              <Login v-if="!userStore.loggedIn" class="" />
            </div>
          </div>
        </div>
      </div>
      <img src="@/assets/CroppedSammy.png" alt="Sammy the Seagull"
        class="h-[30rem] ml-[103rem] -mt-[19rem] rotate-[30deg]" />
    </div>
    <div class="
  bg-black 
  w-[255rem] h-[45rem] -rotate-[30deg]
  overflow-hidden shrink-0 -ml-[110rem]
  ">
      <img src="@/assets/SiTechLogo.png" alt="Staten Island Technical High School Logo"
        class="h-[20rem] ml-[225rem] mt-[5rem] rotate-[30deg]" />
    </div>
  </div>
</template>

<script setup lang="ts">
//anyone can see
import Navbar from "@/components/Reusables/Navbar.vue";
import Login from "@/components/HomeComponents/Login.vue";
import { onBeforeMount, onMounted } from "vue";
import { useUserStore } from "@/stores/users";
import { useClubStore } from "@/stores/club"
import { useRouter, useRoute, loadRouteLocation } from 'vue-router'
let store = useUserStore();

const userStore = useUserStore()
const router = useRouter()
function routePush(route: string) {
  router.push(`${route}`)
}

const route = useRoute()

function getCookie(name: string) {
  const b = RegExp(name + "=[^;]+").exec(document.cookie)
  const a = decodeURIComponent(!!b[0] ? b[0].toString().replace(/^[^=]+./, "") : "")
  const c = JSON.parse(a.replace("j:", ""))
  return c
}

async function verifyAuth(ssoObject: any) {
  const response = await fetch(`http://localhost:3000/ssoAuth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    mode: "cors",
    body: JSON.stringify(ssoObject)
  })
}

onMounted(async () => {
  const codeString = route.query.code?.toString()
  const clubString = route.query.club?.toString()
  userStore.qrCodeClub = clubString

  console.log(userStore.qrCodeClub)
  const stringObj = {
    code: codeString
  }

  if (document.cookie.split('; ').filter(function (c) { return /user_data=/.test(c) }).toString()) {
    const userCookie = getCookie("user_data");

    store.updateUser(userCookie)
    userStore.loggedIn = true
    userStore.user.isAuthenticated = true

    console.log(userStore.user, userStore.user["First Name"], userStore.user["Last Name"])
    if (userStore.user["Client Authority"] === "Admin") {
      userStore.getAllClubData(userStore.user.uid)
      userStore.getUnapprovedClubs(userStore.user.uid)
      setTimeout(function push() { routePush("admin") }, 1000)
    }
  } else {
    if (codeString) {
      await verifyAuth(stringObj)
      const userDataCookie = document.cookie.split('; ').filter(function (c) { return /user_data=/.test(c) }).toString()

      if (!userDataCookie) {

        console.log(document.cookie)

        const queryVal = route.query.club
        const queryStr: string | undefined = queryVal?.toString()

        if (queryStr !== undefined) {
          document.cookie = `qrCodeClub=${queryStr}`
        }
      } else {
        const userCookie = getCookie("user_data");

        store.updateUser(userCookie)
        userStore.loggedIn = true
        userStore.user.isAuthenticated = true

        console.log(userStore.user, userStore.user["First Name"], userStore.user["Last Name"])

        if (userStore.user["Client Authority"] === "Admin") {
          userStore.getAllClubData(userStore.user.uid)
          userStore.getUnapprovedClubs(userStore.user.uid)
          routePush("admin")
          // setTimeout(function push() { routePush("admin") }, 1000)
        }
      }
    } else {
      console.log("you're cooked")
    }
  }
}
)

</script>
