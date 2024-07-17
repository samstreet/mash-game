import { describe, it } from 'vitest'
import GameSerice from '../game.service'
import RandomiserService from '../randomiser.service'

describe('game.service', () => {
  it('renders properly', () => {
    const service = new GameSerice(new RandomiserService())
  })
})
