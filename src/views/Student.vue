<template>
  <div>
    <div>
      <div class="relative bg-white h-96">
        <div class="text-black text-5xl font-normal font-['Itim']">
          Next Meeting
        </div>
        <LogOut></LogOut>
      </div>
      <div class="justify-items-end bg-black w-[75%] h-[45rem] -rotate-[60deg]">
        <div class="">
          <div
            class="flex min-h-full justify-end p-4 text-center rotate-[60deg] sm:items-center sm:p-0"
          >
            <div
              class="rounded-lg bg-white text-left shadow-xl transition-all w-[25%]"
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
