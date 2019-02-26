import { makeCallApiAction } from '@/lib/utils/store'

describe('lib/utils/store', () => {
  describe('function: makeCallApiAction', () => {
    it('can make request success failure actions', () => {
      const TEST_ACTION = makeCallApiAction('TEST_ACTION')
      expect(TEST_ACTION).toEqual({
        REQUEST: 'TEST_ACTION_REQUEST',
        SUCCESS: 'TEST_ACTION_SUCCESS',
        FAILURE: 'TEST_ACTION_FAILURE'
      })
    })
  })
})
