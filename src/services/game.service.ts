import type { Game } from '@/types/Game'
import type RandomiserService from './randomiser.service'
import type { JobProperty } from '@/types/JobProperty'
import type { KidsProperty } from '@/types/KidsProperty'
import type { CarProperty } from '@/types/CarProperty'
import type { PersonProperty } from '@/types/PersonProperty'

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

  public populatePersonProperties(game: Game, property: PersonProperty[]): Game {
    game.Person = property

    return game
  }
}
