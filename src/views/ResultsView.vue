<script setup lang="ts">
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()
</script>

<template>
  <div class="relative overflow-x-auto" v-if="gameStore.previousResults.length">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Prediction</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(result, key) in gameStore.previousResults"
          :key="key"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">{{ result.Outcome }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- There are no results -->
  <div class="relative overflow-x-auto" v-else>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Prediction</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white text-center"
          >
            No Results
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
