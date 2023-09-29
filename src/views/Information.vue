<template>
  <div class="w-screen h-auto flex flex-col">
    <div
      class="w-full h-[15vh] border-b-2 flex flex-row items-center justify-center"
    >
      <div class="w-[30%] text-2xl pl-6">clubName</div>
      <UserIcon class="pl-[48vw] h-[25vh]"></UserIcon>
      <div class="w-[65%] text-2xl">123</div>
    </div>
    <div class="w-full h-[85vh] flex flex-col justify-start items-center pt-3">
      <a
        href="https://www.youtube.com/watch?v=RbhVgdDoY3Q"
        target="_blank"
        class="bg-black h-[7vh] w-[50vh] flex flex-col items-center justify-center rounded-full text-[#fff]"
        >Photo Attendance Link</a
      >
      <p>Advisor: advisor name</p>
      <p>President: president name</p>
      <StudentCard></StudentCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import StudentCard from "@/components/StudentCard.vue";
import { UserIcon } from "@heroicons/vue/20/solid";
import { onMounted } from "vue";
import { useClubStore } from '../stores/club'
import { useRoute, useRouter } from 'vue-router'

const clubStore = useClubStore()

const route = useRoute()

onMounted(() => {
  console.log(route.params.id.toString())
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
