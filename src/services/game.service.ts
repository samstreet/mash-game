import type { Game } from '@/types/Game'
import type RandomiserService from './randomiser.service'
import type { JobProperty } from '@/types/JobProperty'
import type { KidsProperty } from '@/types/KidsProperty'
import type { CarProperty } from '@/types/CarProperty'
import type { PersonProperty } from '@/types/PersonProperty'
import type { Property } from '@/types/Property'

export default class GameSerice {
  constructor(private readonly randomiser: RandomiserService) {}

  public newGame(): Game {
    const game = {
      RandomNumber: this.randomiser.generateRandomInteger(),
      Predicted: false,
      Outcome: '',
      MASH: [
        { isAvailable: true, value: 'Mansion' },
        { isAvailable: true, value: 'Apartment' },
        { isAvailable: true, value: 'Shack' },
        { isAvailable: true, value: 'Home' }
      ],
      Person: this.randomiser.generateRandomPeopleArray(),
      Car: this.randomiser.generateRandomCarArray(),
      Job: this.randomiser.generateRandomJobArray(),
      Kids: this.randomiser.generateRandomKidsArray()
    }

    return game
  }

  public populateJobProperties(game: Game, property: JobProperty[]): Game {
    game.Job = property

    return game
  }

  public populateCarProperties(game: Game, property: CarProperty[]): Game {
    game.Car = property

    return game
  }

  public populateKidsProperties(game: Game, property: KidsProperty[]): Game {
    game.Kids = property

    return game
  }

  public predict(game: Game, startFromIndex: number): Game {
    if (game.Predicted) return game

    const cleanGameProperties: Property[] = []
    if (game.MASH.filter((property: Property) => property.isAvailable).length > 1)
      cleanGameProperties.push(...game.MASH)

    if (game.Person.filter((property: Property) => property.isAvailable).length > 1)
      cleanGameProperties.push(...game.Person)

    if (game.Job.filter((property: Property) => property.isAvailable).length > 1)
      cleanGameProperties.push(...game.Job)

    if (game.Kids.filter((property: Property) => property.isAvailable).length > 1)
      cleanGameProperties.push(...game.Kids)

    if (game.Car.filter((property: Property) => property.isAvailable).length > 1)
      cleanGameProperties.push(...game.Car)

    console.log(cleanGameProperties)

    if (cleanGameProperties.length === 6) {
      game.Predicted = true
      game.Outcome = this.generateOutcomeStringFromGame(game)
      return game
    }

    cleanGameProperties.forEach(() => {
      const selected = this.getCircularArrayElement(cleanGameProperties, startFromIndex)
      selected.isAvailable = false
      startFromIndex += game.RandomNumber
    })

    return this.predict(game, startFromIndex)
  }

  public populatePersonProperties(game: Game, property: PersonProperty[]): Game {
    game.Person = property

    return game
  }

  public allPropertiesAsArray(game: Game): Array<Property> {
    return [...game.MASH, ...game.Person, ...game.Job, ...game.Kids, ...game.Car]
  }

  private findByIsAvailableProperty(property: Property[]): Property | undefined {
    return property.find((property) => property.isAvailable)
  }

  private generateOutcomeStringFromGame(game: Game): string {
    const MASH = game.MASH.find((property: Property) => property.isAvailable)?.value
    return `You will live in a ${MASH}`
  }

  private getCircularArrayElement<T>(array: T[], index: number): any {
    if (!array.length) return null

    const circularIndex = index % array.length
    return array[circularIndex]
  }
}
