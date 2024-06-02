<template>
  <div class="bg-p[#F1F1F1] w-full h-screen flex justify-center">
    <div class="w-[calc(50%-5rem)] h-full bg-black">
      <div class="h-[8%] flex justify-center items-center space-x-4">
        <h1 class="text-white text-2xl font-['Itim']">Other Club Meetings</h1>
        <SearchBar></SearchBar>
      </div>
      <div class="p-6 flex flex-col h-[75%] overflow-y-auto justify-evenly items-center gap-6 md:flex-row md:flex-wrap">
      <div
        class="p-6 flex flex-col h-[75%] overflow-y-auto justify-evenly items-center gap-6 md:flex-row md:flex-wrap"
      >
        <StudentCard
          v-for="club in clubStore.club"
          :key="club.id"
          :name="club.clubName"
          :nextMeeting="club.nextMeeting"
        />
        <!-- <ClubCard name="Coding Club" next-meeting="8/12/2023" />
        <ClubCard name="Robotics Club" next-meeting="8/12/2023" />
        <ClubCard name="Swimming Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" /> -->
      </div>
    </div>

    <div class="page w-[calc(50%+5rem)] h-full">
      <div class="bg-[#FFD700] py-[1%] w-[80%] flex justify-center space-x-[5%] text-lg">
        <h1 class="text-black text-2xl font-['Itim']">Other Meetings</h1>
        <SearchBar></SearchBar>
      <div class="py-[1%] flex justify-center space-x-[5%] text-lg">
        <div class="text-black text-5xl font-normal font-['Itim']">
          Next Meeting
        </div>
        <LogOut class="ml-10 w-1/4"></LogOut>

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
import SearchBar from "@/components/Reusables/SearchBar.vue";
import LogOut from "@/components/Reusables/LogOut.vue";
import StudentCard from "@/components/ClubComponents/StudentCard.vue";
</script>

<style scoped>
.page {
  background: #f1f1f1;
  border-left: 10rem solid black;
  border-bottom: 58rem solid transparent;
  box-sizing: border-box;
}
</style>
