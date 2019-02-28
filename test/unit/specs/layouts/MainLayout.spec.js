import { shallowMount } from '@vue/test-utils'
import MainLayout from '@/layouts/MainLayout'
import LittleBrownTitle from '@/components/LittleBrownTitle'
import Navber from '@/components/Navbar'

describe('layouts/MainLayout', () => {
  it('show component little-brown-title and navbar', () => {
    const wrapper = shallowMount(MainLayout)
    expect(wrapper.contains(LittleBrownTitle)).toBe(true)
    expect(wrapper.contains(Navber)).toBe(true)
  })
})
