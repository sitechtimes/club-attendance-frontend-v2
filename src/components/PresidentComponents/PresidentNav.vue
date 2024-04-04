<template>
    <nav class="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Club Attendance
      </span>
      <!-- log out button -->
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

      <!-- hamburger menu -->
      <div id="demo"> 
    <button @click="show = !show">
      <img src="@/assets/menu.png" alt="" class="w-10">
    </button>
    <Transition  name="fade"> 
       <p v-if="show" class="text-white">hello</p>
    </Transition>
    </div>

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
import { Transition, Vue} from 'vue'

import { ref } from 'vue'
const show = ref(true)

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

