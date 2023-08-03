<template>
  <div class="flex flex-col pt-3 w-[80%]">
    <div
      class="box flex flex-col items-end hover:scale-105 ease-in-out duration-500 cursor-pointer"
      @click="push()"
    >
      <div
        class="bg-black w-full flex flex-col items-center justify-center rounded-[15px] h-[4.5rem]"
      >
        <div class="w-full flex flex-row items-center justify-center">
          <div class="text-[#c2b669] text-xl">name</div>
        </div>
        <div class="w-full flex justify-center items-center">
          <div class="text-[#c2b669] text-sm">president</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
defineProps({
  name: String,
  president: String,
});

const router = useRouter();

function push() {
  router.push({ path: "/information" });
}
</script>
