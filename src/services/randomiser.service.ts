import type { CarProperty } from '@/types/CarProperty'
import type { JobProperty } from '@/types/JobProperty'
import type { KidsProperty } from '@/types/KidsProperty'
import type { PersonProperty } from '@/types/PersonProperty'
import cars from '@/options/cars.json'
import people from '@/options/people.json'
import kids from '@/options/kids.json'
import jobs from '@/options/jobs.json'

export default class RandomiserService {
  public generateRandomInteger(min: number = 3, max: number = 10): number {
    const value = Math.floor(min + Math.random() * (max - min + 1))

    if (value > 10) return 10
    if (value < 3) return 3

    return value
  }

  public generateRandomPeopleArray(): PersonProperty[] {
    return this.getRandomSelections(people.options).map((option: string) => {
      return {
        isAvailable: true,
        value: option
      }
    })
  }

  public generateRandomCarArray(): CarProperty[] {
    return this.getRandomSelections(cars.options).map((option: string) => {
      return {
        isAvailable: true,
        value: option
      }
    })
  }

  public generateRandomKidsArray(): KidsProperty[] {
    return this.getRandomSelections(kids.options).map((option: number) => {
      return {
        isAvailable: true,
        value: option
      }
    })
  }

  public generateRandomJobArray(): JobProperty[] {
    return this.getRandomSelections(jobs.options).map((option: string) => {
      return {
        isAvailable: true,
        value: option
      }
    })
  }

  private getRandomSelections<T>(arr: T[], n: number = 5): T[] {
    if (n > arr.length) {
      throw new Error('Number of selections cannot be greater than the array length')
    }

    const result: T[] = []
    const arrCopy = [...arr]

    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * arrCopy.length)
      result.push(arrCopy[randomIndex])
      arrCopy.splice(randomIndex, 1)
    }

    return result
  }
}
