<script setup lang="ts">
defineProps<{
  titles: string[]
}>()

import MashSection from '@/components/mash/MashSection.vue'
import LoadingDots from '@/components/elements/LoadingDots.vue'
import BasicButton from '@/components/elements/BasicButton.vue'
import { useGameStore } from '@/stores/game'
import { ref } from 'vue'
import GameSerice from '@/services/game.service'
import RandomiserService from '@/services/randomiser.service'
import type { Game } from '@/types/Game'

const gameStore = useGameStore()
const gameService = new GameSerice(new RandomiserService())

const getProperty = (obj: any, key: string): [] => {
  return obj[key]
}

const predicting = ref(false)

const retry = async () => {
  gameService.reset(gameStore.currentGame).then((game: Game) => {
    gameStore.currentGame = game
  })
}

const predict = async () => {
  predicting.value = true
  gameService
    .predict(gameStore.currentGame)
    .then((game: Game) => {
      gameStore.currentGame = game
      gameStore.previousResults.push(game)
    })
    .then(() => {
      setTimeout(() => (predicting.value = false), 1000)
    })
}
</script>

<template>
  <section class="flex mx-auto items-center w-full">
    <div class="mx-auto items-center">
      <BasicButton
        v-if="gameStore.currentGame.Predicted && !predicting"
        text="Retry"
        @click-event="retry"
      />
      <BasicButton v-else text="Predict your future" @click-event="predict" />
    </div>
  </section>
  <section class="flex mx-auto">
    <div class="flex mx-auto w-full">
      <MashSection
        section-title="Property"
        :options="gameStore.currentGame['MASH']"
        class="square m-2 w-1/5"
      ></MashSection>

      <MashSection
        v-for="(title, index) in titles"
        :key="index"
        :options="gameStore.currentGame[title]"
        :section-title="title"
        class="square m-2 w-1/5"
      ></MashSection>
    </div>
  </section>
  <section class="flex mx-auto items-center w-full my-8">
    <div class="mx-auto items-center text-black">
      <LoadingDots v-if="predicting" />
      <p v-else-if="gameStore.currentGame.Predicted && !predicting">
        {{ gameStore.currentGame.Outcome }}
      </p>
      <p v-else>Click the button to begin your prediction</p>
    </div>
  </section>
</template>
