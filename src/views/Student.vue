<template>
  <div>
    <div class="relative bg-white">
      <div class="text-black text-5xl font-normal font-['Itim']">
        Next Meeting
      </div>
      <LogOut></LogOut>
    </div>
    <div class="bg-black w-[100%] h-[45rem] -rotate-[60deg]">
      <div
        class="bg-[#FFD700] py-[1%] px-[2%] flex justify-center-start space-x-[2%] w-[50%] ml-96 auto rotate-[60deg]"
      >
        <h1 class="text-black">Next Meetings</h1>
        <SearchBar class="w-[50%]"></SearchBar>
        <!-- <div
          class="flex min-h-full justify-end p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="rounded-lg bg-white text-left shadow-xl transition-all w-[25%]"
          ></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useClubStore } from "../stores/club";
import SearchBar from "@/components/SearchBar.vue";
import LogOut from "@/components/LogOut.vue";

const open = ref(false);
</script>
