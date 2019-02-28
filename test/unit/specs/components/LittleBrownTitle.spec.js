import { mount } from '@vue/test-utils'
import LittleBrownTitle from '@/components/LittleBrownTitle'

describe('components/LittleBrownTitle', () => {
  it('should render correct contents', () => {
    const wrapper = mount(LittleBrownTitle)
    const html = wrapper.html()
    expect(html).toContain('<span class="text-green">Little Brown</span>')
    expect(html).toContain('<span class="text-black">Shop</span>')
  })
})
