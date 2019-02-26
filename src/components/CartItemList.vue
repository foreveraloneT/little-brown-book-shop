<template>
  <div>
    <cart-item
      v-for="(item, order) in items"
      :item="item"
      :key="item.id"
      :order="order + 1"
    />
  </div>
</template>

<script>
import CartItem from '@/components/CartItem'
import { mapGetters as cartMapGetters } from '@/store/modules/cart'

export default {
  name: 'CartItemList',
  components: {
    CartItem
  },
  computed: {
    ...cartMapGetters({
      items: 'itemList'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
