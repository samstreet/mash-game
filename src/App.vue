<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderSection from '@/components/navigation/HeaderSection.vue'
</script>

<template>
  <HeaderSection></HeaderSection>
  <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-4 text-gray-400">MASH</span>
    <div class="flex-grow border-t border-gray-400"></div>
  </div>
  <RouterView />
</template>
