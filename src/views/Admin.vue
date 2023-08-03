<template>
  <section class="w-screen h-screen">
    <div class="w-full h-[15%] border-b-2 justify-center flex items-center">
      <div class="w-[32%] text-lg font-medium">Administration</div>
      <SearchBar></SearchBar>
    </div>
    <div class="w-full h-auto justify-center flex flex-col items-center">
      <AdminClubCard></AdminClubCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import AdminClubCard from "@/components/AdminClubCard.vue";
import SearchBar from "@/components/SearchBar.vue";
</script>
