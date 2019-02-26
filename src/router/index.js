import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'
import Receive from '@/pages/Receive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/receive',
      name: 'Receive',
      component: Receive
    }
  ]
})
