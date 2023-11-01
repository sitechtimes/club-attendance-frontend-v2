<template>
  <div>
    <vue-changedate>
      <input type="text" placeholder="New Date" v-model="nameInput" />
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
import { useClubStore } from "../stores/club";

// console.log(nextMeeting.value);
const nameInput = ref("");
const clubStore = useClubStore();
function changeDate() {
  console.log(nameInput.value)
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
