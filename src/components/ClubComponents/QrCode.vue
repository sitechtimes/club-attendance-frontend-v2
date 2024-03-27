<template>
    <div>
        <vue-qrcode :value=test() :options="{ width: 300 }"></vue-qrcode>
    </div>
</template>


<script setup lang="ts">
import { toRefs } from 'vue';
import { useUserStore } from '@/stores/users';


const props = defineProps({
    club : String
})


function test(){
    const club = props.club
    return `${import.meta.env.VITE_BACKEND_URL}/oauth2`
}

</script>