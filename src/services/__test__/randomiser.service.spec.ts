import { describe, it, expect } from 'vitest'
import RandomiserService from '@/services/randomiser.service'
import type { CarProperty } from '@/types/CarProperty'
import type { PersonProperty } from '@/types/PersonProperty'
import type { KidsProperty } from '@/types/KidsProperty'
import type { JobProperty } from '@/types/JobProperty'

describe('randomiser.service', () => {
  it('generates random number between 3 and 10', () => {
    const value = new RandomiserService().generateRandomInteger(3, 10)

    expect(value).toBeGreaterThanOrEqual(3)
    expect(value).toBeLessThanOrEqual(10)
  })

  it('generates a random list of cars that is 5 long', () => {
    const values = new RandomiserService().generateRandomCarArray()

    expect(values).toHaveLength(5)

    values.forEach((car: CarProperty) => {
      expect(typeof car).toBe('object')
      expect(car).toHaveProperty('value')
      expect(car).toHaveProperty('isAvailable')
    })
  })

  it('generates a random list of people that is 5 long', () => {
    const values = new RandomiserService().generateRandomPeopleArray()

    expect(values).toHaveLength(5)

    values.forEach((person: PersonProperty) => {
      expect(typeof person).toBe('object')
      expect(person).toHaveProperty('value')
      expect(person).toHaveProperty('isAvailable')
    })
  })

  it('generates a random list of child count that is 5 long', () => {
    const values = new RandomiserService().generateRandomKidsArray()

    expect(values).toHaveLength(5)

    values.forEach((kids: KidsProperty) => {
      expect(typeof kids).toBe('object')
      expect(kids).toHaveProperty('value')
      expect(kids).toHaveProperty('isAvailable')
    })
  })

  it('generates a random list of child jobs that is 5 long', () => {
    const values = new RandomiserService().generateRandomJobArray()

    expect(values).toHaveLength(5)

    values.forEach((job: JobProperty) => {
      expect(typeof job).toBe('object')
      expect(job).toHaveProperty('value')
      expect(job).toHaveProperty('isAvailable')
    })
  })
})
