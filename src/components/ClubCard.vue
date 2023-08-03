<template>
    <div class="flex flex-col">
        <div class="box flex flex-col items-end hover:scale-105 ease-in-out duration-500  cursor-pointer" @click="open = true">
            <img src="@/assets/coding.jpeg" alt="coding" class="h-[228px] rounded-t-[20px]">
            <div class="bg-black w-full flex flex-col items-center justify-center rounded-b-[20px] h-[4.5rem]">
                <div class="text-[#c2b669] text-xl">{{ name }}</div>
                <div class="text-[#c2b669] flex items-center">
                    <CalendarDaysIcon class="h-10"/>
                    {{ nextMeeting }}
                </div>
            </div>
        </div>
        <div v-show="open">
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{{ name }}</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-4 sm:flex sm:px-6 ">
                                <button type="button" class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto" >Generate QR Code</button>
                                <button type="button" class="w-full my-1 justify-center rounded-md px-3 bg-black hover:bg-slate-900 text-[#c2b669] py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto" >Add/Change meeting date</button>
                                <button type="button" class="w-full my-1 justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" @click="open = false">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    
</template>


<script setup lang="ts">
import { CalendarDaysIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
defineProps({
    name: String,
    nextMeeting: String,
})

const open = ref(false)

</script>

<style scoped>
.box{
    border-radius: 20px;
    width: 300px;
    height: 300px;
    background: #fafafa;
    box-shadow:  30px 30px 30px #cccccc,
                    0 0 0 #ffffff,
                    0 0 0 #cccccc inset,
                    2px 2px 2px #ffffff inset; 


}</style>