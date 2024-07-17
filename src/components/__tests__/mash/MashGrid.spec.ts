import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MashGrid from '@/components/mash/MashGrid.vue'

describe('MashGrid', () => {
  it('renders properly', () => {
    const wrapper = mount(MashGrid)
    expect(wrapper).toBeDefined()
  })
})
