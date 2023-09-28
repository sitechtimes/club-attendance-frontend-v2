<template>
  <div>
    <vue-changedate>
      <input
        type="text"
        class="nextDate"
        placeholder="New Date"
        v-model="nameInput"
      />
      <button
        class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-14 sm:w-auto"
        @click="handleSubmit"
      >
        Change date
      </button>
    </vue-changedate>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useClubStore } from "../stores/club";
import { nextMeeting } from "./ClubCard.vue";
import { onMounted } from "vue";

const nameInput = ref("");
const nextMeeting = useClubStore.date;

const handleSubmit = () => {
  nameInput.value = nextMeeting.value;
  // useClubStore.changeName(nameInput.value);
  // nameInput.value = nextMeeting.value;
  // nextMeeting.value = "";
};
</script>
