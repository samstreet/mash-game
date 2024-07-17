import { describe, it, expect } from 'vitest'
import RandomiserService from '@/services/randomiser.service'

describe('randomiser.service', () => {
  it('generates random number between 3 and 10', () => {
    const value = new RandomiserService().generateRandomInteger(3, 10)

    expect(value).toBeGreaterThanOrEqual(3)
    expect(value).toBeLessThanOrEqual(10)
  })
})
