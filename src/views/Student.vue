<template>
  <div class="w-screen">
    <div class="relative bg-white h-96">
      <div class="text-black text-5xl font-normal font-['Itim']">
        Next Meeting
      </div>
      <LogOut></LogOut>
    </div>
    <div
      class="bg-black w-[255rem] h-[180vh] -rotate-[40deg] overflow-hidden shrink-0 -ml-[50rem]"
    ></div>
  </div>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div
      class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
    >
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[50%]"
      >
        <div class="bg-[#FFD700] sm:p-4 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h1>Next Meetings</h1>
              <SearchBar></SearchBar>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-4 sm:flex sm:px-6"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useClubStore } from "../stores/club";
import SearchBar from "@/components/SearchBar.vue";
import LogOut from "@/components/LogOut.vue";
import { PlusIcon } from "@heroicons/vue/24/outline";

const open = ref(false);
</script>

<style scoped>
.message {
  visibility: hidden;
  background: yellow;
}

.viewMeetings:hover .message {
  visibility: visible;
}
</style>
