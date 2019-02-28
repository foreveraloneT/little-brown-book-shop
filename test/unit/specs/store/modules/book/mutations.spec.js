import cloneDeep from 'lodash/cloneDeep'
import initState from '@/store/modules/book/state'
import types from '@/store/modules/book/types'
import mutations from '@/store/modules/book/mutations'

describe('store/modules/book/mutations', () => {
  let state
  beforeEach(() => {
    state = cloneDeep(initState)
  })

  it('GET_BOOKS.REQUEST', () => {
    mutations[types.MUTATIONS.GET_BOOKS.REQUEST](state)
    expect(state.isLoading).toBe(true)
  })

  it('GET_BOOKS.SUCCESS', () => {
    const data = [
      { title: 'a', price: '20' },
      { title: 'b', price: '30' }
    ]
    const expectedData = [
      { title: 'a', price: 20 },
      { title: 'b', price: 30 }
    ]
    mutations[types.MUTATIONS.GET_BOOKS.SUCCESS](state, data)
    expect(state.isLoading).toBe(false)
    expect(state.data).toEqual(expectedData)
  })

  it('GET_BOOKS.FAILURE', () => {
    const error = new Error('test')
    mutations[types.MUTATIONS.GET_BOOKS.FAILURE](state, error)
    expect(state.error).toEqual(error)
  })

  it('SEARCH_BOOKS', () => {
    const text = ' aaa '
    const expectedText = 'aaa'
    mutations[types.MUTATIONS.SEARCH_BOOKS](state, text)
    expect(state.searchKeyword).toEqual(expectedText)
  })

  it('CLEAR_SEARCH', () => {
    state.searchKeyword = 'messy'
    mutations[types.MUTATIONS.CLEAR_SEARCH](state)
    expect(state.searchKeyword).toEqual('')
  })
})
