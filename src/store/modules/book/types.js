import { makeCallApiAction } from '@/lib/utils/store'

const ACTIONS = {
  GET_BOOKS: 'GET_BOOKS'
}

const MUTATIONS = {
  GET_BOOKS: makeCallApiAction('GET_BOOKS'),
  SEARCH_BOOKS: 'SEARCH_BOOKS',
  CLEAR_SEARCH: 'CLEAR_SEARCH'
}

export default {
  ACTIONS,
  MUTATIONS
}
