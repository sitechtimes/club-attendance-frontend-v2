<template>
  <div>
    <nav class="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Club Attendance
      </span>
      <!-- log out button -->
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

        <button type="button" class="text-black fixed bg-yellow hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log Out
      
      </button>

      <button @click="show = !show">
        <img src="@/assets/menu.png" alt="" class="w-10">
      </button>

      </div>
    </div>

  </nav>
  
      <!-- hamburger menu -->
      <div id="demo" class="relative"> 
        <Transition v-if="show" name="fade"> 
          <div class="absolute round-lg">
           <p v-if="show" class="text-white bg-white h-auto w-10 max-w-screen-xl mx-auto p-4" style="margin-top: 64px; z-index: 10;">hello</p>
          <ul> 
            <li class="hamburger-item hover:bg-sky-white">
              
            </li>
          </ul>
    
    
        </div>
        </Transition>
        </div>

      </div>
    
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

