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
            <div class="lg:max-w-lg ">
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
            <div class="flex flex-col mt-8">
              <Login class="" />
              <!-- <img
             src="@/assets/sammy.jpg"
             alt="Sammy the Seagull"
             class="rounded-xl shadow-xl
              ring-1 ring-gray-400/10 lg:w-[45rem] xl:w-[50rem] 
              2xl:w-[70rem] md:-ml-4 lg:-ml-0 h-[1vh]"
             /> -->
              <!-- <Calender /> -->
              <!-- for testing -->
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
// import Calender from "@/components/HomeComponents/Calender.vue";
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/users";
import { useClubStore } from "@/stores/club"
import { useRouter } from 'vue-router'
let store = useUserStore();
let clubStore = useClubStore()

const userStore = useUserStore()
const router = useRouter()
function routePush(route: string) {
  router.push(`${route}`)
}

// function parseGoogleCookie(str: string) {
//   let cookieObj = str.split('{')[1]
//     .split('}')[0]
//     .split(',')
//     .map((element) => element.replace(/"([^"]+(?="))"/g, '$1'))
//     .map((element) => element.split(':'))
//     .reduce((obj: any, cookie) => {
//       obj[decodeURIComponent(cookie[0].trim())]
//         = decodeURIComponent(cookie[1].trim());
//       return obj
//     }, {})
//   return cookieObj
// };
//function turns google link cookie string into 2 arrays: categories and values
//2 arrays are then merged into one object with categories as seen in user store

function getCookie(name: string) {
  const b = RegExp(name + "=[^;]+").exec(document.cookie)
  const a = decodeURIComponent(!!b ? b.toString().replace(/^[^=]+./, "") : "")
  const c = JSON.parse(a.replace("j:", ""))
  return c

  // const value: any = `; ${document.cookie}`;
  // const parts: any = value.split(`; ${name}=`);
  // const cookieString: any = parts.pop().split(";").shift();
  // if (parts.length === 2) console.log(cookieString);
  // let parsedString = parseGoogleCookie(decodeURIComponent(cookieString))
  // parsedString.isAuthenticated = true
  // return parsedString
}

onMounted(() => {
  let loggedIn = false
  if (!document.cookie) {
    console.log("no user data")
  } else {
    const userCookie = getCookie("user_data");
    store.updateUser(userCookie)
    loggedIn = true

    if (userStore.user.role === "Admin") {
      userStore.getAllClubData(userStore.user.uid)
      userStore.getUnapprovedClubs(userStore.user.uid)
      setTimeout(function push() { routePush("admin") }, 1000)
    } else if (userStore.user.role === "Club President") {
      routePush("president")
    } else if (userStore.user.role === "user") {
      console.log("user is reg")
    } else {
      console.log("user is not authorized")
    }
    return loggedIn
  }
});
</script>
