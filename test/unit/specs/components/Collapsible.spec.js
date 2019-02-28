import { mount } from '@vue/test-utils'
import Collapsible from '@/components/Collapsible'

describe('components/Collapsible', () => {
  it('should not show body at start', () => {
    const wrapper = mount(Collapsible)
    expect(wrapper.contains('.body')).toBe(false)
  })

  it('will open body when click button at title', () => {
    const wrapper = mount(Collapsible)
    wrapper.find('button').trigger('click')
    expect(wrapper.contains('.body')).toBe(true)
  })
})
