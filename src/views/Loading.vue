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
-mb-[0.5%]
">

<div class="arrow-up">
</div>
</div>
</template>

<script setup lang="ts">
</script>

<style>
.seagull{
 animation-name: seagullMove;
 animation-duration: 10s;
 animation-iteration-count: 1;
}
.background{
  animation-name: colorChange;
  animation-duration: 10s;
  animation-iteration-count: 1;
}
.trail{
  animation-name: expand;
  animation-duration: 10s;
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
0%{
  visibility: visible;
}
50%{
  transform: scale(202);
  visibility: hidden;
}
75%{
  transform: translate(0px, 100vh);
}
}
@keyframes seagullMove{
  0%{
    visibility: visible;
  }
  50%{
    transform: translate(0px, -100vh);
    visibility: hidden;
  }
  75%{
    transform: translate(0px, 100vh);
    visibility: hidden;
  }
}
.arrow-up {
  width: 0;
  height: 0;
  border-left: 50rem solid transparent;
  border-right: 50rem solid transparent;
  border-bottom: 1vh solid white;
}

</style>
