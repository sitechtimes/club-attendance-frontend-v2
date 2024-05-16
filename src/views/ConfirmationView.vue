<template>
<div v-if="!userStore.user.isAuthenticated">
<NotLoggedPageGuard/>
</div>
<div v-else>
    <div class="w-[100vw] h-[100vh] overflow-hidden flex justify-center items-center">   
    <div class="w-[75vw] h-[70vh] bg-[#D8C377] rounded-4xl border-[1.5vw]">
        <div v-if="!present"
    class = "flex flex-col items-center justify-center">
        <h1 
        class="text-3xl font-bold tracking-tight 
        text-gray-900 sm:text-4xl">
         Please Confirm Your Attendance to {{ $route.query.club }}
        </h1>
        <div
        class="flex flex-col mt-8">
            <button 
            class="p-4 text-gold shadow-xl cursor-pointer rounded-md hover:scale-110 ease-in-out duration-300 bg-black w-36 h-18 flex justify-evenly items-center"
            @click="logAttendance">
             Click Here
            </button>
        </div>
    </div>
    <div v-else-if="present"
    class="flex flex-col items-center justify-center">
        <h1 
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Thank You!</h1>
    </div>
    <div v-else>
        <p>Error</p>
    </div>
    </div>
   </div>
 </div>
</template>

<script setup lang="ts">
//anyone can see
import NotLoggedPageGuard from '@/components/Reusables/NotLoggedPageGuard.vue'
import { onMounted, onBeforeMount, ref, computed, watch } from "vue";
import { useUserStore } from "@/stores/users";
import Navbar from "@/components/Reusables/Navbar.vue";
import { useRouter, useRoute } from 'vue-router'
//import { useClubStore } from "@/stores/club";
const userStore = useUserStore();
//const clubStore = useClubStore();
let present = ref(false);
const route = useRoute()
async function logAttendance(){
    present.value = true 
    const attendanceData = {
        year: "2024-2025",
        uuid: userStore.user.uid,
        clubName: route.query.club,
    };
    userStore.updateAttendance(attendanceData)
    localStorage.removeItem("currentClub")
};

defineProps({
});

onMounted(()=>{
})
</script>