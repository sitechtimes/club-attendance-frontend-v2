<template>
<div v-if="!present">
    <h1>Confirm Your Attendance</h1>
<button 
class="p-4 text-[#c2b669] shadow-xl cursor-pointer rounded-md hover:scale-110 ease-in-out duration-300 bg-black w-36 h-18 flex justify-evenly items-center"
@click="logAttendance">
 Click Here
</button>
</div>
<div v-else-if="present">
    <p>Thank you for confirming.</p>
</div>
<div v-else>
 <p>Error</p>
</div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount, ref, computed, watch } from "vue";
import { useUserStore } from "@/stores/user";
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
</script>