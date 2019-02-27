<template>
  <div>
    <receive-item
      v-for="(item, order) in items"
      :item="item"
      :key="item.id"
      :order="order + 1"
    />
  </div>
</template>

<script>
import ReceiveItem from '@/components/ReceiveItem'
import { mapState as receiveMapState } from '@/store/modules/receive'

export default {
  name: 'ReceiveItemList',
  components: {
    ReceiveItem
  },
  computed: {
    ...receiveMapState({
      items: 'itemList'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
