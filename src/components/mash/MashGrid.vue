<script setup lang="ts">
import MashSection from '@/components/mash/MashSection.vue'
const titles: string[] = ['Partner', 'Job', 'Kids', 'Car']

const title = (n: number): string => {
  return titles[n - 1]
}
</script>

<template>
  <MashSection
    v-for="n in 4"
    :key="n"
    :section-title="title(n)"
    class="square bg-gray-200 m-8"
  ></MashSection>
</template>
