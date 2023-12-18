<template>
  <div class="flex flex-col">
    <div>
      <img
        src="@/assets/coding.jpeg"
        alt="coding"
        class="h-[228px] rounded-t-[20px]"
      />
      <div
        class="bg-white w-full flex flex-col items-center justify-center rounded-b-[20px] h-[4.5rem]"
      >
        <div class="text-[#c2b669] text-xl">{{ name }}</div>
        <div class="text-[#c2b669] flex items-center">
          <CalendarDaysIcon class="h-10" />
          {{ nextMeeting }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarDaysIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const props = defineProps({
  name: String,
  nextMeeting: String,
});
const changeDate = ref(false);
</script>

<style scoped>
.box {
  border-radius: 20px;
  width: 300px;
  height: 300px;
  background: #fafafa;
  box-shadow: 30px 30px 30px #cccccc, 0 0 0 #ffffff, 0 0 0 #cccccc inset,
    2px 2px 2px #ffffff inset;
}
</style>
