import { mount, createLocalVue } from '@vue/test-utils'
import App from '@/App'
import MainLayout from '@/layouts/MainLayout'
import VueRouter from 'vue-router'
import route from '@/router'

const localVue = createLocalVue()
localVue.component('MainLayout', MainLayout)

const router = new VueRouter({
  route
})

describe('App', () => {
  it('contains main-layout', () => {
    const wrapper = mount(App, { localVue, router })
    expect(wrapper.contains(MainLayout)).toBe(true)
  })
})
