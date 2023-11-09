<template>
<div
class="
bg-black 
flex 
w-screen h-screen flex-col justify-end items-center">
<div
class="arrow-up">

</div>
<img
src="@/assets/LoadingSeagull.png"
alt="screenshot"
class="

w-204px h-87px"
/>
<svg xmlns="http://www.w3.org/2000/svg" 
class="
trail
w-1200px h-360px"
viewBox="0 0 1200 483" fill="none">
<path d="M600 483H922.5H1094.5H1200V360L600 0L0 360V483H289H600Z" fill="#C2B669"/>
</svg>

</div>

</template>
<script setup lang="ts">
</script>
<style>
.trail{
 animation-name: expand;
 animation-duration: 5s;
 animation-iteration-count: 1;
}
.background{
  animation-name: colorChange;
  animation-duration: 10s;
  animation-iteration-count: 1;
}
@keyframes colorChange{
  0%{
    background-color: black;
  }
  50%{
    background-color: #C2B669;
  }
  100%{
    background-color: black;
  }
}
@keyframes expand{
 50%{
  background: black;
  transform: translate3d(0, -40rem, 0)
 }
}
.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid white;
}
</style>