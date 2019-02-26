<template>
  <div class="cart-page">
    <div class="row">
      <div
        v-if="bookCount === 0"
        class="col-md-12"
      >
        Your cart is empty, <router-link to="/"><b>please add some book.</b></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <cart-item-list />
      </div>
    </div>
  </div>
</template>

<script>
import CartItemList from '@/components/CartItemList'
import { mapGetters as cartMapGetters } from '@/store/modules/cart'

export default {
  name: 'Cart',
  components: {
    CartItemList
  },
  computed: {
    ...cartMapGetters({
      bookCount: 'itemCount'
    })
  }
}
</script>

<style lang="scss" scoped>
.cart-page {
  text-align: center;
}
</style>
