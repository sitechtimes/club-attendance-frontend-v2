<template>
  <div class="bg-white w-full h-screen flex justify-center">
    <div class="w-[calc(50%-5rem)] h-full bg-[#F1F1F1]">
      <div class="text-black text-5xl font-normal font-['Itim']">
        Next Meeting
      </div>

      <LogOut></LogOut>
    </div>

    <div class="page w-[calc(50%+5rem)] h-full">
      <div class="bg-[#FFD700] py-[1%] px-[2%] w-full">
        <h1 class="text-black">Next Meetings</h1>
        <SearchBar></SearchBar>
        <!-- <div
          class="flex min-h-full justify-end p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="rounded-lg bg-white text-left shadow-xl transition-all w-[25%]"
          ></div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import LogOut from "@/components/LogOut.vue";
</script>

<style scoped>
.page {
  background: black;
  border-left: 10rem solid #f1f1f1;
  border-bottom: 58rem solid transparent;
  box-sizing: border-box;
}
</style>
