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
-mb-[0.2%]
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
 animation-name: seagullMove;
 animation-duration: 8s;
 animation-iteration-count: infinite;
}
.background{
  animation-name: colorChange;
  animation-duration: 8s;
  animation-iteration-count: infinite;
}
.trail{
  animation-name: expand;
  animation-duration: 8s;
  animation-iteration-count: infinite;
}
@keyframes colorChange{
  0%{
    animation-timing-function: steps(1, end);
    background-color: black;
  }
  60%{
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
0%{
  visibility: visible;
}
60%{
  transform: scale(202);
  visibility: hidden;
}
75%{
  transform: translate(0, 100vh);
}
}
@keyframes seagullMove{
  0%{
    visibility: visible;
  }
  60%{
    transform: translate(0, -100vh);
    visibility: hidden;
  }
  75%{
    transform: translate(0, 100vh);
    visibility: hidden;
  }
}
</style>
