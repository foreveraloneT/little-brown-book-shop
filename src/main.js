// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import VModal from 'vue-js-modal'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VModal)

const requireBaseComponent = require.context(
  './components/bases',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireBaseComponent.keys().forEach((fileName) => {
  const componentConfig = requireBaseComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

const requireLayoutComponent = require.context(
  './layouts',
  false,
  /[A-Z]\w+Layout\.(vue|js)$/
)

requireLayoutComponent.keys().forEach((fileName) => {
  const componentConfig = requireLayoutComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
