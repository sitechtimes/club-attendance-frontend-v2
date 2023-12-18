<template>
  <div class="bg-p[#F1F1F1] w-full h-screen flex justify-center">
    <div class="w-[calc(50%-5rem)] h-full bg-black">
      <div class="h-[8%] flex justify-center items-center">
        <div class="text-white text-5xl font-normal font-['Itim']">
          Next Meeting
        </div>
        <LogOut class="ml-10"></LogOut>
      </div>
      <div
        class="p-6 flex flex-col h-[75%] overflow-y-auto justify-evenly items-center gap-6 md:flex-row md:flex-wrap"
      >
        <ClubCard name="Coding Club" next-meeting="8/12/2023" />
        <ClubCard name="Robotics Club" next-meeting="8/12/2023" />
        <ClubCard name="Swimming Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
      </div>
    </div>

    <div class="page w-[calc(50%+5rem)] h-full">
      <div
        class="bg-[#FFD700] py-[1%] w-full flex justify-center space-x-[5%] text-lg"
      >
        <h1 class="text-black text-2xl font-['Itim']">Other Meetings</h1>
        <SearchBar></SearchBar>
        <!-- <div
          class="flex min-h-full justify-end p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="rounded-lg bg-white text-left shadow-xl transition-all w-[25%]"
          ></div> -->
        <!-- </div> -->
      </div>

      <div class="bg-white w-1/2 h-1/2 mt-50rem"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import LogOut from "@/components/LogOut.vue";
import ClubCard from "@/components/ClubCard.vue";
</script>

<style scoped>
.page {
  background: #f1f1f1;
  border-left: 10rem solid black;
  border-bottom: 58rem solid transparent;
  box-sizing: border-box;
}
</style>
