import moxios from 'moxios'
import sinon from 'sinon'
import config from '@/assets/config'
import types from '@/store/modules/book/types'
import actions from '@/store/modules/book/actions'

describe('store/modules/book/actions', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('GET_BOOKS', (done) => {
    const mockData = {
      books: [
        { id: 'a', title: 'aHa', price: '20' },
        { id: 'b', title: 'Batman', price: '30' }
      ]
    }

    const commit = sinon.spy()

    actions[types.ACTIONS.GET_BOOKS]({ commit })
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: mockData
      }).then(() => {
        expect(commit.args).toEqual([
          [types.MUTATIONS.GET_BOOKS.REQUEST],
          [types.MUTATIONS.GET_BOOKS.SUCCESS, mockData.books]
        ])
        done()
      })
    })
  })
})
