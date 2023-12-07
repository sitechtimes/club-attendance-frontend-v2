<template>
  <div class="h-screen">
    <!-- <div class="h-8 bg-[#c2b669]">

        </div> -->
    <div
      class="p-6 flex flex-col justify-evenly items-center gap-6 md:flex-row md:flex-wrap"
    >
      <ClubCard name="Anime Club" />
      <ClubCard name="Robotics Club" />
      <ClubCard name="Swimming Club" />
      <ClubCard name="Table Tennis Club" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ClubCard from '@/components/PresidentComponents/ClubCard.vue';
  import { onMounted } from 'vue'
  import { useUserStore } from '@/stores/users'

  const userStore = useUserStore()
onMounted(() => {
  const userStore = useUserStore()
  console.log(userStore.userClubData.PresidentOf)

})
</script>
