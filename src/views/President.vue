<template>
    <div class="h-screen">
        <!-- <div class="h-8 bg-[#c2b669]">

        </div> -->
        <div class="p-6 flex flex-col justify-evenly items-center gap-6 md:flex-row md:flex-wrap">
            <ClubCard name="Coding Club" next-meeting="8/12/2023" />
            <ClubCard name="Robotics Club" next-meeting="8/12/2023" />
            <ClubCard name="Swimming Club" next-meeting="8/12/2023" />
            <ClubCard name="Table Tennis Club" next-meeting="8/12/2023" />
        </div>
    </div>
</template>


<script setup lang="ts">
    import ClubCard from '@/components/ClubCard.vue';
</script>