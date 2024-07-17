import type { CarProperty } from './CarProperty'
import type { JobProperty } from './JobProperty'
import type { KidsProperty } from './KidsProperty'
import type { PersonProperty } from './PersonProperty'

export type Game = {
  RandomNumber: number
  MASH: string
  Person: PersonProperty[]
  Job: JobProperty[]
  Car: CarProperty[]
  Kids: KidsProperty[]
}
