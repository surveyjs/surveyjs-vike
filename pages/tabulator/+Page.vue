<script setup lang="ts">
import { onMounted, shallowRef, type Component } from 'vue'

const table = shallowRef<Component | null>(null)

onMounted(async () => {
  // Dynamic import: survey-analytics / tabulator touch browser APIs at module load
  table.value = (await import('../../components/DashboardTabulator.vue')).default
})
</script>

<template>
  <component :is="table" v-if="table" />
  <p v-else class="fallback">Loading…</p>
</template>
