<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const gameStore = useGameStore()
const hidePreviousResults = ref(gameStore.previousResults.length ? '' : 'hidden')
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl">
      <div
        class="relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
      >
        <div class="mx-auto max-w-md text-left lg:mx-0 lg:flex-auto lg:py-32">
          <h2 class="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Let us predict your future!
          </h2>
          <p class="mt-6 text-lg leading-8 text-black">
            A powerful AI tool to predict your future life. <br />
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
            ipsum dolor sit amet
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <RouterLink
              to="/play"
              class="rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >Play</RouterLink
            >

            <RouterLink
              to="/results"
              class="rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              :class="[hidePreviousResults]"
              >Previous Results</RouterLink
            >
          </div>
        </div>
        <div class="mx-auto max-w-md text-left lg:mx-0 lg:flex-auto lg:py-32">
          <h2 class="text-3xl font-bold tracking-tight text-black sm:text-4xl">How to play</h2>
          <p class="mt-6 text-lg leading-8 text-black"></p>
          <ul class="text-black list-disc">
            <li>Click the play button</li>
            <li>Fill in some options for yourself</li>
            <li>Click the predict button</li>
            <li>Watch in realtime as our AI predicts your future</li>
            <li>
              If you have previous results you can visit the
              <RouterLink to="/results" class="font-semibold">results</RouterLink> page to see
              previous predictions
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
