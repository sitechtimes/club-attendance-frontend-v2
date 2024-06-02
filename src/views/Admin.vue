<template>
  <section class="w-screen h-screen">
    <div
      class="h-[13%] justify-center space-x-[3%] flex items-center sticky top-0 bg-black"
    >
      <div class="w-[8%] text-white text-lg font-medium">Administration</div>
      <SearchBar></SearchBar>
      <LogOut></LogOut>
    </div>
    <div class="h-auto justify-center flex flex-col items-center bg-[#363636]">
      <div
        class="flex flex-col pt-3 w-[80%]"
        v-for="item in userStore.clubs"
        @click="pushToInfo(item.clubName)"
      >
        <div
          class="box flex flex-col items-end hover:scale-105 ease-in-out duration-500 cursor-pointer"
        >
          <div
            class="bg-black w-full flex flex-col items-center justify-center rounded-[15px] h-[4.5rem]"
          >
            <div class="w-full flex flex-row items-center justify-center">
              <div class="text-[#c2b669] text-xl">{{ item.clubName }}</div>
            </div>
            <div class="w-full flex justify-center items-center">
              <div class="text-[#c2b669] text-sm">{{ item.clubPresident }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import LogOut from "@/components/LogOut.vue";
import { onMounted, onBeforeMount } from "vue";
import { useUserStore } from "@/stores/user";
import { useClubStore } from "@/stores/club";
import { useRouter, useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import ConfirmImage from "./ConfirmImage.vue";

const userStore = useUserStore();
const clubStore = useClubStore();
const router = useRouter();
const route = useRoute();
// function pushToClub() {
//   router.push({ path: "/information" });
// }
function changeRoute() {
  location.reload();
  router.push({ path: "/confirmimage" });
}

function pushToInfo(clubName: string) {
  clubStore.clubName = clubName;
  const clubJSON = JSON.stringify(clubName);
  console.log(clubStore.clubName, "this is the club Name");
  console.log(clubJSON, "this is the club JSON");

  function routePush() {
    router.push(`/club/?name=${clubStore.clubName}`);
  }
  setTimeout(routePush, 1000);

  //router.push({path: "/information"})
}

onMounted(() => {
  userStore.getData();
});
</script>
