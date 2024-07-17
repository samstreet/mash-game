import type { CarProperty } from './CarProperty'
import type { JobProperty } from './JobProperty'
import type { KidsProperty } from './KidsProperty'
import type { MashProperty } from './MashProperty'
import type { PersonProperty } from './PersonProperty'

export type Game = {
  Predicted: boolean
  Outcome: string
  RandomNumber: number
  MASH: MashProperty[]
  Person: PersonProperty[]
  Job: JobProperty[]
  Car: CarProperty[]
  Kids: KidsProperty[]
}
