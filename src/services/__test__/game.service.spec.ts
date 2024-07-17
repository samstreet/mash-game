import { beforeEach } from 'node:test'
import { describe, it, expect } from 'vitest'
import { GameSerice } from '../game.service'

let service: GameSerice

describe('game.service', () => {
  beforeEach(() => {
    service = new GameSerice()
  })

  it('renders properly', () => {})
})
