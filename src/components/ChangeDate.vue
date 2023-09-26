<template>
  <div>
    <vue-changedate>
      <input type="text" placeholder="New Date" />
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

const store = useClubStore();
const nextMeeting = ref("");

onMounted(() => {
  console.log(store.date);
});
const handleSubmit = () => {
  store.date = nextMeeting.value;
};
</script>
