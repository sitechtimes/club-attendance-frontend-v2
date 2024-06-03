<template>
    <div v-if="!userStore.user.isAuthenticated">
        <NotLoggedPageGuard />
    </div>
    <div v-else>
        <Navbar></Navbar>
        <div v-if="userStore.qrCodeClub" class="overflow-hidden bg-white pt-20 lg:pt-24">
            <div v-if="!present" class="flex flex-col items-center justify-center">
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Please Confirm Your Attendance to {{ userStore.qrCodeClub }}
                </h1>
                <div class="flex flex-col mt-8">
                    <button
                        class="p-4 text-gold shadow-xl cursor-pointer rounded-md hover:scale-110 ease-in-out duration-300 bg-black w-36 h-18 flex justify-evenly items-center"
                        @click="logAttendance">
                        Click Here
                    </button>
                </div>
            </div>
            <div v-else-if="present" class="flex flex-col items-center justify-center">
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Thank You!</h1>
            </div>
            <div v-else>
                <p>Error</p>
            </div>
        </div>
        <div v-if="!userStore.qrCodeClub" class="flex flex-col items-center justify-center">
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                No Club Detected
            </h1>
            <div class="flex flex-col items-center justify-center">
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Please Scan the QR Code Provided by Your Club President Thank You!</h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NotLoggedPageGuard from '@/components/Reusables/NotLoggedPageGuard.vue'
import { ref } from "vue";
import { useUserStore } from "@/stores/users";
import Navbar from "@/components/Reusables/Navbar.vue";
import { useRouter } from 'vue-router';
const userStore = useUserStore();
let present = ref(false);
const router = useRouter()

function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

const logAttendance = function () {
    present.value = true
    const attendanceData = {
        year: "2024-2025",
        uuid: userStore.user.uid,
        clubName: userStore.qrCodeClub
    };
    userStore.updateAttendance(attendanceData)
    deleteCookie(userStore.qrCodeClub)
    userStore.qrCodeClub = ''
    router.push('/')
};


defineProps({
    clubName: String,
});

</script>