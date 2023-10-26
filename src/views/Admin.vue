<template>
  <section class="w-screen h-screen">
    <div class="w-full h-[15%] border-b-2 justify-center flex items-center">
      <div class="w-[32%] text-lg font-medium">Administration</div>
      <SearchBar v-model="query" @input="onInput"></SearchBar>
    </div>
    <div class="w-full h-auto justify-center flex flex-col items-center" >
      <div class="flex flex-col pt-3 w-[80%]" v-for="item in userStore.clubs" @click="pushToInfo(item.clubName)">
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
import { onMounted, onBeforeMount, ref, computed, watch } from "vue";
import { useUserStore } from "@/stores/user";
import { useClubStore } from "@/stores/club";
import { useRouter } from "vue-router";
import { split } from "postcss/lib/list";
import { ComputerDesktopIcon } from "@heroicons/vue/24/solid";

let query = ref()
const userStore = useUserStore();
const clubStore = useClubStore();
const router = useRouter();
const route = useRoute()
// function pushToClub() {
//   router.push({ path: "/information" });
// }

function pushToInfo(clubName: string) {
  clubStore.clubName = clubName  
  const clubJSON = JSON.stringify(clubName)
  console.log(clubStore.clubName, "this is the club Name")
  console.log(clubJSON, 'this is the club JSON')
  
  function routePush() {
    router.push(`/club/?name=${clubStore.clubName}`)
  }
  setTimeout(routePush, 1000)

}

const onInput = function(){
  if (query.value == ''){
    userStore.getData()
  }
  else if (query.value == undefined){
    userStore.getData()
  }
  else {
    userStore.clubs = userStore.clubs.filter((item: object) => searchFilter(item, query.value)) 
  }
} 

const searchFilter = function(club: object, query: any){
 const splitQuery = query.split('')
 const splitClubName = club.clubName.split('')
 console.log(splitQuery)
 console.log(splitClubName)
 let i = 0
 let result = false
 splitQuery.forEach((character: any) => {
  console.log(character)
  console.log(splitQuery.length)
  console.log(splitClubName[i])
  if(i == (splitQuery.length - 1) && character.toLowerCase() == splitClubName[i].toLowerCase()){
    console.log("true")
    result = true    
  }
  else if(character.toLowerCase() != splitClubName[i].toLowerCase()){
    console.log("false")
    result = false
  }
  else if( character.toLowerCase() == splitClubName[i].toLowerCase()){
    console.log("loop")
    i++
  }
 });
 console.log(result)
 return result
}


onMounted(()=>{
  userStore.getData();
})
</script>
