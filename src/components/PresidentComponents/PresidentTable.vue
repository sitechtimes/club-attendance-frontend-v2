<template> 
<div class="lg:p-10 p-4 bg-black h-ful rounded-lg font-['Itim']">
    <div class="relative overflow-x-auto overflow-y:auto bg-black">
        <table class="w-full text-sm text-left rtl:text-right text-black">
            <thead class="text-xl uppercase bg-black text-white">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Student Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        OSIS
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Position
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gold border-b text-xl" v-for="member in userStore.clubMembers">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                        {{member['First Name']}} {{ member['Last Name'] }}
                    </th>
                    <td class="px-6 py-4">
                        {{ member.UID }}
                    </td>
                    <td class="px-6 py-4">
                        {{ member.Email }}
                    </td>
                    <td class="px-6 py-4">
                        {{ member.Position }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script setup>
import { useUserStore, usePresidentStore } from "@/stores/users"
const userStore = useUserStore(); 

</script>