import { beforeAll, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import MashGrid from '@/components/mash/MashGrid.vue'
import { setActivePinia, createPinia } from 'pinia'

describe('MashGrid', () => {
  beforeAll(() => {
    setActivePinia(createPinia())
  })

  it('renders properly', () => {
    const wrapper = mount(MashGrid, {
      props: { titles: ['MASH'] },
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              game: {
                currentGame: {
                  Predicted: false,
                  Outcome: '',
                  MASH: [{ value: 'Mansion', isAvailable: true }],
                  Person: [],
                  Job: [],
                  Car: [],
                  Kids: []
                }
              }
            }
          })
        ]
      }
    })

    expect(wrapper).toBeDefined()
  })
})
