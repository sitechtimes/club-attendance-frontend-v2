<template>
  <div
    class="p-4 text-[#c2b669] shadow-xl cursor-pointer rounded-md hover:scale-110 ease-in-out duration-300 bg-black w-36 h-18 flex justify-evenly items-center"
    @click="logIn"
  >
    <div>Login</div>
    <ArrowLeftOnRectangleIcon class="w-8" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ArrowLeftOnRectangleIcon } from "@heroicons/vue/24/outline";
const userStore = useUserStore();

async function logIn() {
  await userStore.googleLink();
  let cookies = document.cookie;
  console.log(cookies)
}
</script>
@/stores/users