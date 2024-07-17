import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MashSection from '@/components/mash/MashSection.vue'

describe('MashSection', () => {
  it('renders properly', () => {
    const wrapper = mount(MashSection, { props: { sectionTitle: 'Person' } })
    expect(wrapper.text()).toContain('Person')
  })
})
