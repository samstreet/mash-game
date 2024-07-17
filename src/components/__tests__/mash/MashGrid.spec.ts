import { beforeAll, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import MashGrid from '@/components/mash/MashGrid.vue'

describe('MashGrid', () => {
  beforeAll(() => {
    vi.mock('pinia')
  })

  it('renders properly', () => {
    const wrapper = mount(MashGrid)
    expect(wrapper).toBeDefined()
  })
})
