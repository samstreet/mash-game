import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Game } from '@/types/Game'

export const useGameStore = defineStore(
  'game',
  () => {
    const titles = ['Person', 'Job', 'Kids', 'Car']
    const previousResults: Game[] = ref([])
    const currentGame: Game = ref()

    return { titles, currentGame, previousResults }
  },
  {
    persist: true
  }
)
