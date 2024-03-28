<template>
    <nav class="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <!-- <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"> -->
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Club Attendance
      </span>
      <!-- </a> -->
      <!-- log out button -->
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

      <!-- hamburger menu -->
      <div> 
    <button  @click="show = !show" class="mr-10 inline-flex gap-x-1.5" type="button">
      <img src="@/assets/menu.png" alt="" class="w-10">
    </button>
    </div>

  <Transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"/>
   
  

<!-- logout button -->
      <button type="button" class="text-black bg-yellow hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out
      
      </button>
      </div>
    </div>

  </nav>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Transition } from 'vue'

var show = false;
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

