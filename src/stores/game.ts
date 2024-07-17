import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Game } from '@/types/Game'

export const useGameStore = defineStore('game', () => {
  const titles = ['Partner', 'Job', 'Kids', 'Car']
  const previousResults: Game[] = ref([])

  return { titles, previousResults }
})
