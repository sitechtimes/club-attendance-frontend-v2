<template> 
<div class="p-10 bg-black h-auto rounded-lg font-['Itim']">
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
            <tbody v-for="member in clubMembers.club">
                <tr class="bg-gold border-b">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                        {{member}}
                    </th>
                    <td class="px-6 py-4">
                        Silver
                    </td>
                    <td class="px-6 py-4">
                        Laptop
                    </td>
                    <td class="px-6 py-4">
                        $2999
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script setup>
import { useUserStore, usePresidentStore } from "@/stores/users";
import { useClubStore } from "@/stores/club";

const userStore = useUserStore();
const presidentStore = usePresidentStore()

console.log(userStore.userClubData)

</script>