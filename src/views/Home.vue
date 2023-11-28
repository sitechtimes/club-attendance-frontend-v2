<template>
  <div 
  class="w-screen h-screen overflow-hidden">
    <div
    class="py-80 pt-20 lg:pt-24 bg-[#c2b669] 
    w-[150vw] h-[2vh] -rotate-12 -ms-[20vw]
    overflow-hidden"
    >
    <div class="mx-auto max-w-7xl px-6 lg:px-8 2xl:ml-40 ">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 
        gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4 rotate-12 ">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-black">
              Attendance, made faster
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight 
              text-gray-900 sm:text-4xl"
            >
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
            <img
             src="@/assets/sammy.jpg"
             alt="Sammy the Seagull"
             class="rounded-xl shadow-xl
              ring-1 ring-gray-400/10 lg:w-[45rem] xl:w-[50rem] 
              2xl:w-[70rem] md:-ml-4 lg:-ml-0 h-[1vh]"
             />
            <Calender />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-80 pt-20 lg:pt-24 bg-black 
    w-[150vw] h-[2vh] -rotate-12 -ms-[20vw]
    overflow-hidden">
  </div>
  </div>
</template>

<script setup lang="ts">
//anyone can see
import Login from "@/components/HomeComponents/Login.vue";
import Calender from "@/components/HomeComponents/Calender.vue";
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/users";
// import * as THREE from "three";
// import BIRDS from vanta.birds.min.js
// import {onBeforeUnmount, onMounted } from "vue";

// const userStore = useUserStore();
// token starts as string, make the unstringify the string then use the object
// const parseCookie = (str) =>
//    str
//      .split(';')
//      .map((v) => v.split('='))
//      .reduce((acc, v) => {
//        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[0].trim());
//        return acc;
// }, {});

// token starts as string, make the unstringify the string then use the object

function parseGoogleCookie(str){
  console.log(str)
 let cookieOBJ = str.split('{')[1]
 .split('}')[0]
 .split(',')
 .map((element) => element.replace(/"([^"]+(?="))"/g, '$1'))
 .map((element) => element.split(':'))
 .reduce((obj, cookie) => {
   obj[decodeURIComponent(cookie[0].trim())] 
   = decodeURIComponent(cookie[1].trim());
   return obj
 }, {}) 
 return cookieObj
} ;

function getCookie(name: string) {
  const value: any = `; ${document.cookie}`;
  const parts: any = value.split(`; ${name}=`);
  const cookieString: any = parts.pop().split(";").shift();
  if (parts.length === 2) console.log(cookieString);
  let parsedString = parseGoogleCookie(decodeURIComponent(cookieString))
  return parsedString
}


onMounted(() => {
  let loggedIn = false
  const store = useUserStore();
  if (!document.cookie){
  console.log("no user data")
  console.log(store.user)
  } else {
  let userCookie = getCookie("user_data");
  store.user = userCookie
  console.log(store.user)
  loggedIn = true
  return loggedIn
  }
}); 
</script>
@/stores/users