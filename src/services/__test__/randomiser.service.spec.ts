import { beforeEach } from 'node:test'
import { describe, it, expect } from 'vitest'
import { RandomiserService } from '../randomiser.service'

let service: RandomiserService

describe('game.service', () => {
  beforeEach(() => {
    service = new RandomiserService()
  })

  it('renders properly', () => {})
})
