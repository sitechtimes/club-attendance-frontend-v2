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

// console.log(nextMeeting.value);
const dateInput = ref("");
const presidentStore = usePresidentStore()

function changeDate() {
  const inputtedDate = dateInput.value
  console.log(inputtedDate)
  const yearToday = new Date().getFullYear()
  const monthToday = new Date().getMonth() + 1
  const dayToday = new Date().getDate()
  const today = yearToday + '-' + monthToday + '-' + dayToday
  console.log(today, 'today')
  console.log(presidentStore.selectedClub, presidentStore.year)
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
