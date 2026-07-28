<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import '../assets/css/main.css'
</script>

<template>
  <AppHeader />
  <main>
    <slot />
  </main>
</template>
