<template>
  <section class="w-screen h-screen">
    <div
      class="h-[15%] justify-center space-x-[3%] flex items-center sticky top-0 bg-black"
    >
      <div class="w-[8%] text-white text-lg font-medium">Administration</div>
      <SearchBar></SearchBar>
      <!-- <BellIcon class="bg-white" /> -->
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
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/users";
import { useClubStore } from "@/stores/club";
import { useRouter } from "vue-router";
import { BellIcon } from "@heroicons/vue/24/solid";

let query = ref()
const userStore = useUserStore();
const clubStore = useClubStore();
const router = useRouter();

function pushToInfo(clubName: string) {
  clubStore.clubName = clubName  
  const clubJSON = JSON.stringify(clubName)
  console.log(clubJSON)
  function routePush() {
    router.push(`/club/?name=${clubStore.clubName}`);
  }
  setTimeout(routePush, 1000)
}

const onInput = function(){
  if (query.value == ''){
    userStore.getAllClubData()
  }
  else if (query.value == undefined){
    userStore.getAllClubData()
  }
  else {
    userStore.clubs = userStore.clubs.filter((item: object) => searchFilter(item, query.value)) 
  }
} 

const searchFilter = function(club: object, query: any){
 const splitQuery = query.split('')
 const splitClubName = club.clubName.split('')
//  console.log(splitQuery)
//  console.log(splitClubName)
 let i = 0
 let result = false
 splitQuery.forEach((character: any) => {
  if(i == (splitQuery.length - 1) && character.toLowerCase() == splitClubName[i].toLowerCase()){
    result = true    
  }
  else if(character.toLowerCase() != splitClubName[i].toLowerCase()){
    result = false
  }
  else if( character.toLowerCase() == splitClubName[i].toLowerCase()){
    i++
  }
 });
 return result
}
</script>