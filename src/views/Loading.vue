<template>
<div
class="
background
bg-black 
flex 
w-screen h-screen flex-col justify-end items-center overflow-hidden">
<img src="@/assets/LoadingSeagull.png" alt="Seagull"
class="
seagull
w-[150px] h-auto"
/>
<img src="@/assets/SeagullTrail.png" alt="Trail behind seagull"
class="
seagull
h-1/4
w-screen
">
<div class="
trail
bg-[#C2B669]
w-screen
h-[1vh]
">
</div>
</div>
</template>

<script setup lang="ts">
</script>

<style>
.seagull{
 animation-name: move;
 animation-duration: 5s;
 animation-iteration-count: 1;
}
.background{
  animation-name: colorChange;
  animation-duration: 10s;
  animation-iteration-count: 1;
}
.trail{
  animation-name: expand;
  animation-duration: 5s;
  animation-iteration-count: 1;
}
@keyframes colorChange{
  0%{
    animation-timing-function: steps(1, end);
    background-color: black;
  }
  50%{
    
    background-color: #C2B669;
  }
  70%{
    background-color: #C2B669;
  }
  100%{
    background-color: black;
  }
}
@keyframes expand{
100%{
  transform: scale(200);
}
}
@keyframes move{
 100%{
  transform: translate(0px, -100vh)
 }
}
@keyframes seagullMove{
  50%{
    transform: translate(0px, -100vh);
    visibility: hidden;
  }
  
}
</style>
