<script setup lang="ts">
defineProps<{
  titles: string[]
}>()

import MashSection from '@/components/mash/MashSection.vue'
</script>

<template>
  <MashSection
    v-for="(title, index) in titles"
    :key="index"
    :section-title="title"
    class="square bg-gray-200 m-8"
  ></MashSection>
</template>
