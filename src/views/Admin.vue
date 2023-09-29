<template>
  <section class="w-screen h-screen">
    <div class="w-full h-[15%] border-b-2 justify-center flex items-center">
      <div class="w-[32%] text-lg font-medium">Administration</div>
      <SearchBar v-model="query" @keyup.enter="onEnter"></SearchBar>
    </div>
    <div class="w-full h-auto justify-center flex flex-col items-center">
      <div class="flex flex-col pt-3 w-[80%]" v-for="item in searchedClubs">
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
import { onMounted, onBeforeMount, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const query = ref()
const userStore = useUserStore();
const router = useRouter();
let searchedClubs = userStore.clubs

function pushToClub() {
  router.push({ path: "/information" });
}
const onEnter = function(){
  if (query.value == ''){
    searchedClubs = userStore.clubs
    console.log("empty")
  }
  else if (query.value == undefined){
    searchedClubs = userStore.clubs
    console.log("empty")
  }
  else {
    searchedClubs = userStore.clubs.filter((item: object) => searchFilter(item, query.value)) 
    console.log(searchedClubs)
  }
} 
const searchFilter = function(club: object, query: any){
 const splitQuery = query.split('')
 const splitClubName = club.clubName.split('')
 console.log(splitQuery)
 console.log(splitClubName)
 for
}
onMounted(() => {
  userStore.getData();
});
</script>
