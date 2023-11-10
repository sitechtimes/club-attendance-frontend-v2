<template>
  <div>
    <vue-changedate>
      <input class="border rounded-md" type="date" placeholder="M" v-model="dateInput" />
      <button
        class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-14 sm:w-auto"
        @click="changeDate()"
      >
        Change date
      </button>
    </vue-changedate>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePresidentStore } from "../stores/users";
import { ComputerDesktopIcon } from "@heroicons/vue/24/solid";

// console.log(nextMeeting.value);
const dateInput = ref("");
const presidentStore = usePresidentStore()

function changeDate() {
  const inputtedDate = dateInput.value
  const inputArr = inputtedDate.split('-')
  const yearInput:number = Number(inputArr[0])
  const monthInput:number = Number(inputArr[1])
  const dayInput:number = Number(inputArr[2])
  
  const yearToday = new Date().getFullYear()
  const monthToday = new Date().getMonth() + 1
  const dayToday = new Date().getDate()

  const nextMeeting = dayToday + monthToday
  try {
    if(yearInput >= yearToday && monthInput >= monthToday && dayInput >= dayToday){
      console.log("allowed")
    } else {
      console.log("please put in a valid date")
    }
  } catch(error) {
    console.log(error)
  }

  // console.log(presidentStore.selectedClub, presidentStore.year)
}
// clubStore.ChangeData();
// const handleSubmit = () => {
//   let date = clubStore.nextMeeting;
//   let input = nameInput.value;
//   date = input;
//   console.log(date);
//   // console.log(input);
//   input = "";
// };
</script>
