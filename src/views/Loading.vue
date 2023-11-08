<template>
<div
class="
bg-black 
flex 
w-screen h-screen flex-col justify-end items-center">
<div>

</div>
<img
src="@/assets/LoadingSeagull.png"
alt="screenshot"
class="

w-204px h-87px"
/>
<svg xmlns="http://www.w3.org/2000/svg" 
class="

w-1200px h-360px"
viewBox="0 0 1200 360" fill="none">
<path d="M600 360H1200L600 0L0 360H600Z" fill="#C2B669"/>
</svg>
</div>

</template>
<script setup lang="ts">
</script>
<style>
.trail{
 animation-name: expand;
 animation-duration: 2s;
 animation-iteration-count: infinite;
}
@keyframes expand{
 50% {
    transform: translate3D(0, 100px, 0);
 }
}
.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  
  border-bottom: 5px solid black;
}
</style>