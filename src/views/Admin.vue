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

async function getData(url = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

getData("http://localhost:3000/getAllClubData").then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
</script>
