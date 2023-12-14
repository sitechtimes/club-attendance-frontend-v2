<template>
  <div v-if="!authenticated">
  <PageGuard/>
  </div>
  <div v-else-if="authenticated">
    <div class="h-screen">
    <!-- <div class="h-8 bg-[#c2b669]">
    </div> -->
      <div
      class="p-6 flex flex-col justify-evenly items-center gap-6 md:flex-row md:flex-wrap"
      >
        <ClubCard name="Coding Club" next-meeting="8/12/2023" />
        <ClubCard name="Robotics Club" next-meeting="8/12/2023" />
        <ClubCard name="Swimming Club" next-meeting="8/12/2023" />
        <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
      </div>
    </div>
  </div>
  <div v-else>
    Error
  </div>
</template>

<script setup lang="ts">
//only president+admin can see
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/users";
import ClubCard from '@/components/PresidentComponents/ClubCard.vue';
import PageGuard from '@/components/Reusables/PageGuard.vue'
const store = useUserStore();
let authenticated = false
console.log(store)
onMounted(()=>{
  authenticated = store.user.isAuthenticated
  return authenticated
})
</script>
