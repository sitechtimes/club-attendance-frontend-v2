<template>
  <!-- <div class=""> -->
  <!-- <button
      class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-14 sm:w-auto"
      @click="clubStore.changeData()"
    >
      Import Image
    </button> -->
  <!-- <label for="file-input"> -->
  <!-- <img src="https://placehold.it/" /> -->
  <!-- </label> -->
  <!-- <input id="file-input" type="file" /> -->
  <form>
    <input type="file" id="imageFile" />
    <button
      class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-14 sm:w-auto"
      type="submit"
    >
      Import Club Image
    </button>
    <img
      src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D"
      alt="ClubImage"
      class="w-[25%] h-"
    />
  </form>
  <!-- </div> -->
</template>

<script setup lang="ts">
// import ArrowDownTrayIcon from "@/components/ArrowDownTrayIcon";
</script>
