import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Game } from '@/types/Game'

export const useGameStore = defineStore('game', () => {
  const previousResults: Game[] = ref([])

  return { previousResults }
})
