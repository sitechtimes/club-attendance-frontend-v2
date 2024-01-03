<template>
  <div class="">
    <!-- <button
      class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-14 sm:w-auto"
      @click="clubStore.changeData()"
    >
      Import Image
    </button> -->
    <!-- <label for="file-input"> -->
    <img src="https://placehold.it/" />
    <!-- </label> -->
    <input id="file-input" type="file" />

    <button
      class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-14 sm:w-auto"
      @click="clubStore.changeData()"
    >
      Import Image
    </button>
  </div>
</template>

<script setup lang="ts">
// import ArrowDownTrayIcon from "@/components/ArrowDownTrayIcon";
</script>
