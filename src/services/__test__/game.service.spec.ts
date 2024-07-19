import { describe, expect, it } from 'vitest'
import GameSerice from '../game.service'
import RandomiserService from '../randomiser.service'

describe('game.service', () => {
  it('generates a new game', () => {
    const service = new GameSerice(new RandomiserService())
    const game = service.newGame()
    const expectedProperties: string[] = [
      'MASH',
      'Predicted',
      'Outcome',
      'Person',
      'Car',
      'Job',
      'Kids'
    ]

    expectedProperties.forEach((property: string) => {
      expect(game).toHaveProperty(property)
    })

    expect(game.Car.length).toBe(5)
    expect(game.Job.length).toBe(5)
    expect(game.Kids.length).toBe(5)
    expect(game.Person.length).toBe(5)
  })
})
