<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Model } from 'survey-core'
import { SurveyPDF } from 'survey-pdf'
import { json } from '../../data/survey_json.js'

const ready = ref(false)
const model = ref<Model | null>(null)

onMounted(() => {
  model.value = new Model(json)
  ready.value = true
})

function savePDF() {
  if (!model.value) return
  const surveyPDF = new SurveyPDF(json)
  surveyPDF.data = model.value.data
  surveyPDF.save()
}
</script>

<template>
  <div v-if="ready" class="page-intro">
    <h1>SurveyJS PDF Generator</h1>
    <p>
      SurveyJS PDF Generator is a client-side extension over SurveyJS Form
      Library that enables users to save surveys as PDF documents.
    </p>
    <p>
      NOTE: Dynamic elements and characteristics (visibility, validation,
      navigation buttons) are not supported.
    </p>
    <p>Click the button below to export survey to a PDF document.</p>
    <button type="button" class="pdf-btn" @click="savePDF">Save as PDF</button>
  </div>
  <p v-else class="fallback">Loading…</p>
</template>
