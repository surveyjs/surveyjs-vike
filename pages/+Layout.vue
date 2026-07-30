<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import '../assets/css/main.css'
</script>

<template>
  <div class="app">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>