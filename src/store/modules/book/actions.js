import types from './types'
import bookService from '@/lib/services/book'

export default {
  async [types.ACTIONS.GET_BOOKS] ({ commit }) {
    commit(types.MUTATIONS.GET_BOOKS.REQUEST)
    const data = await bookService.getList()
    commit(types.MUTATIONS.GET_BOOKS.SUCCESS, data)
  }
}
