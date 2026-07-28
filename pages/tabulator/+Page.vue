<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DashboardTabulator from '../../components/DashboardTabulator.vue'

const ready = ref(false)
onMounted(() => {
  ready.value = true
})
</script>

<template>
  <DashboardTabulator v-if="ready" />
  <p v-else class="fallback">Loading…</p>
</template>
