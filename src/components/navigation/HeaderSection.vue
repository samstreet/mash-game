<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const gameStore = useGameStore()
const hidePreviousResults = ref(gameStore.previousResults.length ? '' : 'hidden')
</script>

<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">MASH</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </RouterLink>
      </div>
      <div class="lg:flex lg:gap-x-12">
        <RouterLink to="/play" class="text-sm font-semibold text-gray-900">Play</RouterLink>
        <RouterLink
          to="/results"
          class="text-sm font-semibold text-gray-900"
          :class="[hidePreviousResults]"
          >Previous Results</RouterLink
        >
      </div>
    </nav>
  </header>
</template>
