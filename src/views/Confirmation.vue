<template>
<div>
    <h1>Confirm Your Attendance</h1>
<button
class="p-4 text-[#c2b669] shadow-xl cursor-pointer rounded-md hover:scale-110 ease-in-out duration-300 bg-black w-36 h-18 flex justify-evenly items-center"
@click="logAttendance">
 Click Here
</button>
</div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount, ref, computed, watch } from "vue";
let present = ref(false)
const logAttendance = function(){
present.value = true 
}
</script>