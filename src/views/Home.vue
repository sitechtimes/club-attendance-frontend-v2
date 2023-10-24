<template>
  <div class="overflow-hidden bg-white pt-20 lg:pt-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 2xl:ml-40">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-[#c2b669]">
              Attendance, made faster
            </h2>
            <p
              class="mt-2 text-3xl font-bold bg-yellow tracking-tight text-gray-900 sm:text-4xl skew-x-12"
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
            <Calender />
          </div>
        </div>
        <img
          src="@/assets/sammy.jpg"
          alt="screenshot"
          class="w-[28rem] sm:w-[50rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[45rem] xl:w-[50rem] 2xl:w-[70rem] md:-ml-4 lg:-ml-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Login from "@/components/Login.vue";
import Calender from "@/components/Calender.vue";
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
// import * as THREE from "three";
// import BIRDS from vanta.birds.min.js
// import {onBeforeUnmount, onMounted } from "vue";

// let vantaEffect = null

// onMounted(()=>{
//  if(loginPageRef.value)
//  {
//   vantaEffect = BIRDS({
//  el:loginPageRef.value,
//  THREE,mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   backgroundColor: 0x0,
//   color1: 0x7d5c2a,
//   color2: 0xcaa7a7,
//   wingSpan: 25.00,
//   speedLimit: 4.00,
//   separation: 40.00,
//   alignment: 30.00,
//   cohesion: 11.00
// })}
//   console.log(vantaEffect)
// })

// onBeforeUnmount(()=>{
//   if(vantaEffect) vantaEffect.destroy()
// })
const store = useUserStore();
// token starts as string, make the unstringify the string then use the object
// const parseCookie = (str) =>
//   str
//     .split(";")
//     .map((v) => v.split("="))
//     .reduce((acc, v) => {
//       acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[0].trim());
//       return acc;
//     }, {});

// function getCookie(name: string) {
//   const value: any = `; ${document.cookie}`;
//   const parts: any = value.split(`; ${name}=`);
//   const cookieString: any = parts.pop().split(";").shift();
//   if (parts.length === 2) console.log(cookieString);

//   const parsedString = parseCookie(cookieString);
//   console.log(JSON.parse(JSON.stringify(parsedString)));
// }

// onMounted(() => {
//   getCookie("user_data");
// });
</script>
