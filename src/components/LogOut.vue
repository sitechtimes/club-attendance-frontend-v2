<template>
  <div
    class="p-4 shadow-xl cursor-pointer rounded-md hover:scale-110 ease-in-out duration-300 bg-black w-36 h-18 flex justify-evenly items-center"
    @click="logOut"
  >
    <div>Log Out</div>
  </div>
</template>

<script setup lang="ts">
// import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

async function logout() {
  await userStore.googleLink();
}
</script>
