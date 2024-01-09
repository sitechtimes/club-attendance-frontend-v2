<template>
<div>
    <nav class="bg-black text-white flex flex-wrap
    h-[107px] items-center z-10 relative overflow-hidden">
      <RouterLink to="/">
      <img src="@/assets/SeagullCalendarNT.png" 
      alt="A seagull sitting on top of a calendar" 
      class="h-[107px]">
      </RouterLink>
      <h1 
      class="text-white text-[64px] font-kranky ml-3">
      Club Attendance</h1>
      <div class="absolute right-[15rem]">
        <RouterLink to="/" 
        class="font-normal font-katibeh text-[2rem] mr-[3rem]">
        Student</RouterLink>
        <RouterLink to="/president" 
        class="font-normal font-katibeh text-[2rem] mr-[3rem]">
        President</RouterLink>
        <RouterLink to="/admin" 
        class="font-normal font-katibeh text-[2rem] mr-[3rem]">
        Admin</RouterLink>
        <RouterLink to="/calendar" 
        class="font-normal font-katibeh text-[2rem] ">
        Calendar</RouterLink>
      </div>
      <div
      class="p-4 shadow-xl cursor-pointer rounded-md hover:scale-110 ease-in-out 
      duration-300 w-36 h-18 flex justify-evenly items-center text-black 
      bg-[#c2b669] rounded-[2rem] font-Katibeh absolute right-[2.5rem]">
      Log Out</div>
    </nav>
</div>
</template>
    
<script setup lang="ts">

</script>