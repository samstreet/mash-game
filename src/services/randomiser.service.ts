import type { CarProperty } from '@/types/CarProperty'
import type { JobProperty } from '@/types/JobProperty'
import type { KidsProperty } from '@/types/KidsProperty'
import type { PersonProperty } from '@/types/PersonProperty'

export default class RandomiserService {
  public generateRandomInteger(min: number = 3, max: number = 10): number {
    const value = Math.floor(min + Math.random() * (max - min + 1))

    if (value > 10) return 10
    if (value < 3) return 3

    return value
  }

  public generateRandomPeople(): PersonProperty[] {
    return []
  }

  public generateRandomCar(): CarProperty[] {
    return []
  }

  public generateRandomKids(): KidsProperty[] {
    return []
  }

  public generateRandomJob(): JobProperty[] {
    return []
  }
}
