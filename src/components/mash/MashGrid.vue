<script setup lang="ts">
defineProps<{
  titles: string[]
}>()

import MashSection from '@/components/mash/MashSection.vue'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()

const getProperty = (obj: any, key: string): [] => {
  return obj[key]
}

const predict = () => {
  console.log('predict')
}
</script>

<template>
  <section class="flex mx-auto items-center w-full">
    <div class="mx-auto items-center">
      <button
        type="button"
        @click.prevent="predict"
        class="mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Predict your future!
      </button>
    </div>
  </section>
  <section class="flex mx-auto">
    <div class="flex mx-auto w-full">
      <MashSection
        section-title="Property"
        :options="getProperty(gameStore.currentGame, 'MASH')"
        class="square m-2 w-1/5"
      ></MashSection>

      <MashSection
        v-for="(title, index) in titles"
        :key="index"
        :options="getProperty(gameStore.currentGame, title)"
        :section-title="title"
        class="square m-2 w-1/5"
      ></MashSection>
    </div>
  </section>
  <section class="flex mx-auto items-center w-full my-8">
    <div class="mx-auto items-center">
      <button
        type="button"
        @click.prevent="predict"
        class="mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Predict your future!
      </button>
    </div>
  </section>
</template>
