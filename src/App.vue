<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 <nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/president">President</RouterLink>
  <RouterLink to="/admin">Admin</RouterLink>
  <RouterLink to="/calendar">Calendar</RouterLink>
 </nav>
  <RouterView />
</template>
