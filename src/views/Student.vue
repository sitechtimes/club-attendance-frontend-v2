<template>
  <div class="w-screen">
    <div class="relative bg-white h-96">
      <div class="text-black text-5xl font-normal font-['Itim']">
        Next Meeting
      </div>
    </div>
    <div>
      <button class="bg-yellow w-[4%] rounded-full" @click="open = true">
        <PlusCircleIcon></PlusCircleIcon>
      </button>
    </div>
    <div
      class="bg-black w-[255rem] h-[180vh] -rotate-[50deg] overflow-hidden shrink-0 -ml-[50rem]"
    >
      <LogOut></LogOut>
    </div>
  </div>
  <div v-show="open">
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white w-[50%] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-yellow sm:p-6 sm:pb-4 flex justify-center">
              <div class="sm:flex sm:items-start">
                <div class="text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h1>Next Meetings</h1>
                  <SearchBar class="w-[50%]"></SearchBar>
                  <button
                    type="button"
                    class="justify-center rounded-md bg-red-600 px-3 py-1 text-sm font-semibold bg-red text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    @click="open = false"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-4 sm:flex sm:px-6"></div>
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
import { PlusCircleIcon } from "@heroicons/vue/24/outline";

const clubStore = useClubStore();
const nextMeeting = clubStore.nextMeeting;

const open = ref(false);
</script>
