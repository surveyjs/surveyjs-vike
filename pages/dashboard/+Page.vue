<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DashboardPanel from '../../components/DashboardPanel.vue'

const ready = ref(false)
onMounted(() => {
  ready.value = true
})
</script>

<template>
  <DashboardPanel v-if="ready" />
  <p v-else class="fallback">Loading…</p>
</template>
