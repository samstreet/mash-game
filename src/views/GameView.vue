<script setup lang="ts">
import MashGrid from '@/components/mash/MashGrid.vue'
import MashAddition from '@/components/mash/MashAddition.vue'
import GameSerice from '@/services/game.service'
import RandomiserService from '@/services/randomiser.service'
import { useGameStore } from '@/stores/game'
import { onMounted, ref } from 'vue'

const gameStore = useGameStore()
const service = new GameSerice(new RandomiserService())

const newGame = () => {
  const game = service.newGame()

  service.populateCarProperties(game, [
    ...game.Car,
    ...[{ value: userProperties.Car, isAvailable: true }]
  ])

  service.populateJobProperties(game, [
    ...game.Job,
    ...[{ value: userProperties.Job, isAvailable: true }]
  ])

  service.populateKidsProperties(game, [
    ...game.Kids,
    ...[{ value: userProperties.Kids, isAvailable: true }]
  ])

  service.populatePersonProperties(game, [
    ...game.Person,
    ...[{ value: userProperties.Person, isAvailable: true }]
  ])

  gameStore.currentGame = game
}

const userProperties = {
  Person: '',
  Car: '',
  Job: '',
  Kids: 0
}

interface EmittedChangeEvent {
  property: string
  value: string | number
}

const additionsHandle = (event: EmittedChangeEvent) => {
  userProperties[event.property] = event.value

  if (Object.values(userProperties).every((value) => value !== '')) {
    canStartGame.value = true
  }
}

const canStartGame = ref(false)

onMounted(() => {
  // reset the current game to null
  gameStore.currentGame = null
  userProperties.Car = ''
  userProperties.Job = ''
  userProperties.Kids = 0
  userProperties.Person = ''
})
</script>

<template>
  <div
    v-if="!gameStore.currentGame"
    class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-center"
  >
    <MashAddition
      v-for="(title, key) in gameStore.titles"
      :key="key"
      :title="title"
      @emit-change="additionsHandle"
    />
  </div>

  <div
    v-if="!gameStore.currentGame"
    class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-center"
  >
    <button
      :disabled="!canStartGame"
      :class="{ disabled: !canStartGame }"
      class="mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      @click.prevent="newGame"
    >
      Start New Game
    </button>
  </div>

  <div v-if="gameStore.currentGame" class="mx-auto p-6 lg:px-8">
    <MashGrid :titles="gameStore.titles"></MashGrid>
  </div>
</template>
