<template>
  <section class="w-screen h-screen">
    <div class="w-full h-[15%] border-b-2 justify-center flex items-center">
      <div class="w-[32%] text-lg font-medium">Administration</div>
      <SearchBar></SearchBar>
    </div>
    <div class="w-full h-auto justify-center flex flex-col items-center">
      <AdminClubCard name="Joe" president="Joe" />
    </div>
  </section>
</template>

<script setup lang="ts">
import AdminClubCard from "@/components/AdminClubCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import { useUserStore } from "@/stores/user";

const store = useUserStore();

console.log(store.user, "user");

// async function getData(url = "") {
//   const response = await fetch(url, {
//     method: "GET",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//   });
//   return response.json();
// }

// getData("http://localhost:3000/getAllClubData").then((data) => {
//   console.log(data);
</script>
