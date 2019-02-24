import types from './types'

const mockBook = [
  'book1',
  'book2',
  'book3'
]

export default {
  async [types.ACTIONS.GET_BOOKS] ({ commit }) {
    commit(types.MUTATIONS.GET_BOOKS_REQUEST)
    const data = await new Promise((resolve) => {
      setTimeout(() => { resolve(mockBook) }, 500)
    })
    commit(types.MUTATIONS.GET_BOOKS_SUCCESS, data)
  }
}
