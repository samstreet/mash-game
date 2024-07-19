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

  public reset(game: Game): Promise<Game> {
    this.resetProperties(game.MASH)
    this.resetProperties(game.Person)
    this.resetProperties(game.Job)
    this.resetProperties(game.Kids)
    this.resetProperties(game.Car)

    game.Predicted = false
    game.Outcome = ''

    return Promise.resolve(game)
  }

  public async predict(game: Game): Promise<Game> {
    this.predictFromProperties(game.MASH)
    this.predictFromProperties(game.Person)
    this.predictFromProperties(game.Job)
    this.predictFromProperties(game.Kids)
    this.predictFromProperties(game.Car)

    game.Predicted = true
    game.Outcome = await this.generateOutcomeStringFromGame(game).then((value) => value)

    return Promise.resolve(game)
  }

  public populatePersonProperties(game: Game, property: PersonProperty[]): Game {
    game.Person = property

    return game
  }

  private async generateOutcomeStringFromGame(game: Game): Promise<string> {
    const MASH = await this.findAvailablePropertyValue(game.MASH).then((value) => value)
    const person = await this.findAvailablePropertyValue(game.Person).then((value) => value)
    const job = await this.findAvailablePropertyValue(game.Job).then((value) => value)
    const kids = await this.findAvailablePropertyValue(game.Kids).then((value) => value)
    const car = await this.findAvailablePropertyValue(game.Car).then((value) => value)

    return Promise.resolve(
      `You will live in a ${MASH}, you will marry ${person}, you will work as a ${job}, you will have ${kids} children and you will drive a ${car}`
    )
  }

  private findAvailablePropertyValue(properties: Property[]): Promise<string> {
    return new Promise((resolve, reject) => {
      const value = properties.find((property: Property) => property.isAvailable)?.value
      resolve(value)
      reject('')
    })
  }

  private predictFromProperties(array: Property[]): Property[] {
    const propertyToKeep = Math.floor(Math.random() * array.length)
    array.forEach((property: Property, index: number) => {
      if (index !== propertyToKeep) property.isAvailable = false
    })

    return array
  }

  private resetProperties(array: Property[]): Property[] {
    array.forEach((property: Property, index: number) => {
      property.isAvailable = true
    })

    return array
  }
}
