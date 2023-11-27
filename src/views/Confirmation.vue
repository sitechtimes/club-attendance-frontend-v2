<template>
<div class="overflow-hidden bg-white pt-20 lg:pt-24">
    <div v-if="!present"
    class = "flex flex-col items-center justify-center">
        <h1 
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
         Please Confirm Your Attendance
        </h1>
        <div
        class="flex flex-col mt-8">
            <button 
            class="p-4 text-[#c2b669] shadow-xl cursor-pointer rounded-md hover:scale-110 ease-in-out duration-300 bg-black w-36 h-18 flex justify-evenly items-center"
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
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount, ref, computed, watch } from "vue";
import { useUserStore } from "@/stores/users";
//import { useClubStore } from "@/stores/club";
const userStore = useUserStore();
//const clubStore = useClubStore();
let present = ref(false)
const logAttendance = function(){
present.value = true 
}
onMounted(()=>{
//clubStore.getData();
})
</script>@/stores/users