<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SurveyForm from '../../components/SurveyForm.vue'

const ready = ref(false)
onMounted(() => {
  ready.value = true
})
</script>

<template>
  <SurveyForm v-if="ready" />
  <p v-else class="fallback">Loading…</p>
</template>
