<template>
  <div
    class="p-4 text-[#c2b669] shadow-xl cursor-pointer rounded-md hover:scale-110 ease-in-out duration-300 bg-black w-36 h-18 flex justify-evenly items-center"
    @click="logIn">
    <div>Login</div>
    <ArrowLeftOnRectangleIcon class="w-8" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/users";
import { ArrowLeftOnRectangleIcon } from "@heroicons/vue/24/outline";
const userStore = useUserStore();

async function logIn() {
  // await userStore.googleLink();
  try {
    window.location.href = 'http://localhost:8000/o/authorize/?response_type=code&client_id=xzCx3rgs07o8C0uvil1hhkaXejsbE370aBci2Bb4&redirect_uri=http%3A%2F%2Flocalhost%3A5173&code_challenge=yJaxHcB8M4d_dj7ApOPFNLIkPV2Bk8N82tnl-PaGLDk&code_challenge_method=S256'
  } catch (error) {
    console.log(error)
  }
}
</script>
@/stores/users