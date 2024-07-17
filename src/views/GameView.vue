<script setup lang="ts">
import MashGrid from '@/components/mash/MashGrid.vue'
import { useGameStore } from '@/stores/game'
const gameStore = useGameStore()
</script>

<template>
  <div class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <MashGrid :titles="gameStore.titles" class="text-center"></MashGrid>
  </div>
</template>
