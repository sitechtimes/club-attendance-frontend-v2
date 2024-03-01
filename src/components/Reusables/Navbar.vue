<template>
<div>
    <nav class="bg-black text-white flex flex-nowrap
    h-[107px] items-center z-10 relative overflow-hidden">
      <RouterLink to="/">
      <img src="@/assets/SeagullCalendarNT.png" 
      alt="A seagull sitting on top of a calendar" 
      class="h-[107px]">
      </RouterLink>
      <h1 
      class="text-white text-[64px] font-kranky ml-3">
      Club Attendance</h1>
      <div class="absolute right-[1rem]">
        <RouterLink to="/confirmation/anime" 
        class="font-normal font-katibeh text-[2rem] mr-[3rem]">
        Student</RouterLink> <!-- currently routed to confirmation for testing, in future confirmation will be reached via qr code-->
        <RouterLink to="/president" 
        class="font-normal font-katibeh text-[2rem] mr-[3rem]">
        President</RouterLink>
        <RouterLink to="/admin" 
        class="font-normal font-katibeh text-[2rem] mr-[3rem]">
        Admin</RouterLink>
        <RouterLink to="/calendar" 
        class="font-normal font-katibeh text-[2rem]">
        Calendar</RouterLink>
        <button
          class="p-4 shadow-xl cursor-pointer rounded-md font-Katibeh
          hover:scale-110 ease-in-out duration-300 w-36 h-18 flex 
          justify-evenly items-center text-black bg-gold rounded-[2rem]
          inline-flex ml-[1rem]">
          Log Out
        </button>
      </div>
    </nav>
</div>
</template>
    
<script setup lang="ts">

</script>