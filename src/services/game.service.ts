import type { Game } from '@/types/Game'
import type RandomiserService from './randomiser.service'
import type { JobProperty } from '@/types/JobProperty'
import type { KidsProperty } from '@/types/KidsProperty'
import type { CarProperty } from '@/types/CarProperty'
import type { PersonProperty } from '@/types/PersonProperty'
import type { Property } from '@/types/Property'
import type { MashProperty } from '@/types/MashProperty'

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

  public predict(game: Game): Promise<Game> {
    this.predictFromProperties(game.MASH)
    this.predictFromProperties(game.Person)
    this.predictFromProperties(game.Job)
    this.predictFromProperties(game.Kids)
    this.predictFromProperties(game.Car)

    game.Predicted = true
    game.Outcome = this.generateOutcomeStringFromGame(game)

    return Promise.resolve(game)
  }

  public populatePersonProperties(game: Game, property: PersonProperty[]): Game {
    game.Person = property

    return game
  }

  public allPropertiesAsArray(game: Game): Array<Property> {
    return [...game.MASH, ...game.Person, ...game.Job, ...game.Kids, ...game.Car]
  }

  private generateOutcomeStringFromGame(game: Game): string {
    const MASH = game.MASH.find((property: Property) => property.isAvailable)?.value
    const person = game.Person.find((property: Property) => property.isAvailable)?.value
    const job = game.Job.find((property: Property) => property.isAvailable)?.value
    const kids = game.Kids.find((property: Property) => property.isAvailable)?.value
    const car = game.Car.find((property: Property) => property.isAvailable)?.value
    return `You will live in a ${MASH}, you will marry ${person}, you will work as a ${job}, you will have ${kids} children and you will drive a ${car}`
  }

  private predictFromProperties(array: Property[]): Property[] {
    const propertyToKeep = Math.floor(Math.random() * array.length)
    array.forEach((property: Property, index: number) => {
      if (index !== propertyToKeep) property.isAvailable = false
    })

    return array
  }
}
