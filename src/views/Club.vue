<template>
  <div class="w-screen h-auto flex flex-col">
    <div
      class="w-full h-[15vh] border-b-2 flex flex-row items-center justify-center"
    >
      <div class="w-[30%] text-2xl pl-6">{{ clubStore.clubName }}</div>
      <UserIcon class="pl-[48vw] h-[12vh]"></UserIcon>
      <div class=" text-2xl">{{ clubStore.room }}</div>
    </div>
    <div class="w-full h-[85vh] flex flex-col justify-start items-center pt-3">
      <a
        href="https://www.youtube.com/watch?v=RbhVgdDoY3Q"
        target="_blank"
        class="bg-black h-[7vh] w-[50vh] flex flex-col items-center justify-center rounded-full text-[#fff]"
        >Photo Attendance Link</a
      >
      <p>Advisor: {{ clubStore.clubAdvisor }}</p>
      <p>President: {{ clubStore.clubPresident }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
//admin only 
// import StudentCard from "@/components/StudentCard.vue";
import { UserIcon } from "@heroicons/vue/20/solid";
import { onMounted } from "vue";
import { useClubStore } from '../stores/club'
import { useRoute, useRouter } from 'vue-router'

const clubStore = useClubStore()
const route = useRoute()


onMounted(() => {
  const queryVal = route.query.name
  const queryStr:string|undefined = queryVal?.toString()
  const year = "2023-2024"
  clubStore.getData(queryStr, year)

});

defineProps({
  clubName: String,
  memberAmount: Number,
  president: String,
  advisor: String,
  lastMeeting: Date,
  nextMeting: Date,
  dayOfWeek: String,
  meetingAmount: Number,
});
</script>
