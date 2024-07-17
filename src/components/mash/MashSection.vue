<script setup lang="ts">
import { onMounted } from 'vue'

defineProps<{
  sectionTitle: string
}>()

onMounted(() => {})
</script>

<template>
  <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
    <p class="text-center">{{ sectionTitle }}</p>
  </div>
</template>

<style scoped></style>
