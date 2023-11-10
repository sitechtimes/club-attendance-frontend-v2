<template>
<div
class="
background
bg-black 
flex 
w-screen h-screen flex-col justify-end items-center">
<img
src="@/assets/LoadingSeagull.png"
alt="screenshot"
class="
trail
w-204px h-auto"
/>
<svg xmlns="http://www.w3.org/2000/svg" 
class="
w-100% h-auto"
viewBox="0 0 1200 483" fill="none">
<path d="M600 483H922.5H1094.5H1200V360L600 0L0 360V483H289H600Z" fill="#C2B669"/>
<animateTransform
      attributeName="transform"
      attributeType="XML"
      type="scale"
      from="1 1"
      to="5 5"
      dur="5s"
      repeatCount="1" 
/>
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
    animation-timing-function: steps(1, end);
    background-color: black;
  }
  45%{
    
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
  background-color: black;
  transform: translate3d(0, -20rem, 0)
 }
}
.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 20rem solid transparent;
  border-right: 20rem solid transparent;
  border-bottom: 50px solid white;
}
</style>