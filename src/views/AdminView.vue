<template>
  <div class="bg-[#363636]">
    <section class="w-100% h-screen">
      <div class="h-[15%] justify-center space-x-[3%] flex items-center sticky top-0 bg-black z-10">
        <div class="w-[8%] text-white text-lg font-medium ">Administration</div>
        <input class="w-[55%] border-2 border-black h-[45%] rounded-full pl-2 ml-2 " placeholder="Search" v-model="query"
          @input="onInput" />
        <BellIcon class="h-[40%] fill-white hover:scale-110 ease-in-out duration-500 cursor-pointer" />
        <LogOut></LogOut>
        <div
          class="p-3 w-[7%] cursor-pointer rounded-md hover:scale-105 ease-in-out duration-300 bg-yellow flex justify-evenly items-center"
          @click="function openCard() { open = true }">
          <div>Upload Image</div>
        </div>
      </div>
      <div v-show="open">
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                class="relative transform overflow-hidden bg-white text-left shadow-xl transition-all w-screen h-screen">
                <div class=" px-4 pb-4 pt-5 bg-[#c2b669] sm:p-6 sm:pb-4 flex flex-row-reverse ">
                  <div
                    class="py-3 px-12 w-[7%] cursor-pointer rounded-md hover:scale-105 ease-in-out duration-300 font-semibold bg-red text-white shadow-sm flex justify-evenly items-center"
                    @click="function closecard() { open = false }">
                    close
                  </div>
                </div>
                <div class="flex flex-row justify-evenly h-100vh">
                  <div v-for=" image  in  userStore.unapprovedImages " class="flex flex-col w-[30%]">
                    <img :src=image.thumbnailLink class="h-[228px] rounded-t-[20px]">
                    <h2> {{ image.name }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-[#363636] h-auto justify-evenly flex flex-col items-center p-6 items-center gap-6 md:flex-row md:flex-wrap">
        <div class="flex flex-col pt-3 w-[29%] hover:scale-105 ease-in-out duration-500 cursor-pointer"
          v-for=" item  in  userStore.clubs " @click="pushToInfo(item.clubName)">
          <img src="@/assets/coding.jpeg" alt="coding" class="h-[228px] rounded-t-[20px]" />
          <div class="box flex flex-col items-end ">
            <div class="bg-black w-full flex flex-col items-center justify-center rounded-b-[20px] h-[4.5rem]">
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
  </div>
</template>

<script setup lang="ts">
import LogOut from "@/components/Reusables/LogOut.vue";
import { ref } from "vue";
import { useUserStore } from "@/stores/users";
import { useClubStore } from "@/stores/club";
import { useRouter } from "vue-router";
import { BellIcon, UsersIcon } from "@heroicons/vue/24/solid";

const query = ref('')
let open = ref(false);
const userStore = useUserStore();
const clubStore = useClubStore();
const router = useRouter();

function pushToInfo(clubName: string) {
  clubStore.clubName = clubName
  const year = "2024-2025"
  userStore.getClubMembers(clubName, year, userStore.user.uid)
  function routePush() {
    router.push(`/club/?name=${clubStore.clubName}`);
  }
  setTimeout(routePush, 1000)
}

const searchFilter = function (club: object, query: any) {
  const splitQuery = query.split('')
  const splitClubName = club.clubName.split('')
  let i = 0
  let result = false
  splitQuery.forEach((character: any) => {
    if (i == (splitQuery.length - 1) && character.toLowerCase() == splitClubName[i].toLowerCase()) {
      result = true
    }
    else if (character.toLowerCase() != splitClubName[i].toLowerCase()) {
      result = false
    }
    else if (character.toLowerCase() == splitClubName[i].toLowerCase()) {
      i++
    }
  });
  return result
}

const onInput = function () {
  // console.log(userStore.clubs, "this is clubs")
  // console.log(userStore.allClubs, "this is allClubs")
  if (query.value == '') {
    userStore.clubs = userStore.allClubs
    // userStore.getAllClubData(userStore.uid)
  }
  else if (query == undefined) {
    userStore.clubs = userStore.allClubs
    // userStore.getAllClubData(userStore.uid)
  }
  else {
    userStore.clubs = userStore.allClubs.filter((item: object) => searchFilter(item, query.value))
  }
} 
</script>