<template>
  <section class="w-screen h-screen">
    <div class="w-full h-[15%] border-b-2 justify-center flex items-center">
      <div class="w-[32%] text-lg font-medium">Administration</div>
      <div class="w-[5%]">🔎</div>
      <input
        class="w-[55%] border-2 border-black h-[35%] rounded-full pl-2 ml-2"
        placeholder="Search"
      />
    </div>
    <div class="w-full h-auto justify-center flex-col items-center">
      <ClubCard></ClubCard>
      <ClubCard></ClubCard>
      <ClubCard></ClubCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import ClubCard from "@/components/ClubCard.vue";
</script>
