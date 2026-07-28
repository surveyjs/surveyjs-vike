<script setup lang="ts">
import { onMounted, shallowRef, type Component } from 'vue'

const panel = shallowRef<Component | null>(null)

onMounted(async () => {
  // Dynamic import: survey-analytics touches `document` at module load
  panel.value = (await import('../../components/DashboardPanel.vue')).default
})
</script>

<template>
  <component :is="panel" v-if="panel" />
  <p v-else class="fallback">Loading…</p>
</template>
