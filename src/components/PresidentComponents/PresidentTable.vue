<template> 
<div class="p-10 bg-black h-auto rounded-lg font-['Itim']">
    <div></div>
    <div class="relative overflow-x-auto overflow-y:auto bg-black">
        <table class="w-full text-sm text-left rtl:text-right text-black">
            <thead class="text-xs uppercase bg-black text-white">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gold border-b" v-for="member in userStore.clubMembers">
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