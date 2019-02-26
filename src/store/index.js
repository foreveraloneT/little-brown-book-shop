import Vue from 'vue'
import Vuex from 'vuex'
import logger from './plugins/logger'
import book from './modules/book'
import cart from './modules/cart'

Vue.use(Vuex)

const isDebugMode = process.env.NODE_ENV !== 'production'

const plugins = isDebugMode ? [logger] : []

export default new Vuex.Store({
  modules: {
    book,
    cart
  },
  strict: isDebugMode,
  plugins
})
