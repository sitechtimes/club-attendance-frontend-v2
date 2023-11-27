<template>
  <div class="flex justify-center items-center">
    <div
      v-if="open == false && close == false"
      class="box"
      @click="open = !open"
    >
      <CalendarDaysIcon />
    </div>
    <div
      v-else-if="open == true && close == false"
      class="box-open flex"
      @click="closeCalender"
    >
      <CalendarDaysIcon class="h-[3.75rem]" />
      <img src="@/assets/calender.png" alt="placeholder" />
    </div>
    <div v-else-if="close == true && open == true" class="box-close">
      <CalendarDaysIcon class="h-[3.75rem]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CalendarDaysIcon } from "@heroicons/vue/24/solid";

let open = ref(false);
let close = ref(false);

function closeCalender() {
  close.value = !close.value;
  setTimeout(() => {
    close.value = !close.value;
    open.value = !open.value;
  }, 500);
}
</script>

<style scoped>
.box {
  border-radius: 20px;
  margin: 1rem;
  width: 60px;
  height: 60px;
  background: #f0f0f0;
  box-shadow: 0 0 0 #cccccc, 0 0 0 #ffffff, 10px 10px 10px #cccccc inset,
    -10px -10px 10px #ffffff inset;
}

.box-open {
  border-radius: 20px;
  margin: 1rem;
  width: 60px;
  height: 60px;
  background: #f0f0f0;
  box-shadow: 0 0 0 #cccccc, 0 0 0 #ffffff, 10px 10px 10px #cccccc inset,
    -10px -10px 10px #ffffff inset;
  animation: calender-open 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1s alternate;
  animation-fill-mode: forwards;
}

.box-close {
  border-radius: 20px;
  margin: 1rem;
  width: 480px;
  height: 240px;
  background: #fafafa;
  box-shadow: 40px 40px 40px #cccccc, 0 0 0 #ffffff, 0 0 0 #cccccc inset,
    2px 2px 2px #ffffff inset;
  animation: calender-open 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1s reverse;
  animation-fill-mode: forwards;
}

@keyframes calender-open {
  0% {
    width: 60px;
    height: 60px;
    background: #f0f0f0;
    box-shadow: 0 0 0 #cccccc, 0 0 0 #ffffff, 10px 10px 10px #cccccc inset,
      -10px -10px 10px #ffffff inset;
  }

  25% {
    width: 60px;
    height: 60px;
    background: #f8f8f8;
    box-shadow: 10px 10px 10px #cccccc,
      10px 10px 10px #ffffff 0 0 0 #cccccc inset, 0 0 0 #ffffff inset;
  }

  50% {
    width: 60px;
    height: 240px;
    background: #f8f8f8;
    box-shadow: 10px 10px 10px #cccccc, 10px 10px 10px #ffffff,
      0 0 0 #cccccc inset, 0 0 0 #ffffff inset;
  }

  75% {
    widows: 270;
    height: 240px;
    background: #fafafa;
    box-shadow: 20px 20px 20px #cccccc, 5px 5px 5px #ffffff, 0 0 0 #cccccc inset,
      0 0 0 #ffffff inset;
  }

  100% {
    width: 480px;
    height: 240px;
    background: #fafafa;
    box-shadow: 40px 40px 40px #cccccc, 0 0 0 #ffffff, 0 0 0 #cccccc inset,
      2px 2px 2px #ffffff inset;
  }
}
</style>
