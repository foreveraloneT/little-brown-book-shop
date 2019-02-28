import { VueLoading } from 'vue-loading-template'
import { Store } from 'vuex-mock-store'
import { mount } from '@vue/test-utils'
import BookList from '@/components/BookList.vue'
import BookItem from '@/components/BookItem'

const store = new Store({
  state: {
    book: {
      namespaced: true,
      isLoading: true
    }
  },
  getters: {
    'book/fiteredData': []
  }
})

const mocks = {
  $store: store
}

afterEach(() => store.reset())

describe('components/BookList', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(BookList, { mocks })
  })

  it('show vue-loading in loading state', () => {
    expect(wrapper.contains(VueLoading)).toBe(true)
  })

  it('show book-item when loading success', () => {
    store.state.book.isLoading = false
    store.getters['book/fiteredData'] = [
      { id: '1', title: 'xxx' },
      { id: '2', title: 'yyy' }
    ]
    expect(wrapper.contains(VueLoading)).toBe(false)
    expect(wrapper.findAll(BookItem).length).toBe(2)
  })
})
