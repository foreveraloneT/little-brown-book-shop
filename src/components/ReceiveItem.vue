<template>
  <div class="row receive-item mb-2">
    <div class="col-md-1 col-1">
      #{{order}}
    </div>
    <div class="col-md-7 col-6">
      {{item.title}} <small class="sub-content">({{item.id}})</small>
    </div>
    <div class="col-md-2 col-2">
      x {{item.count}}
    </div>
    <div class="col-md-2 col-3">
      ฿{{itemPrice}}
    </div>
  </div>
</template>

<script>
import numeral from 'numeral'
import RemoveItemModal from '@/components/RemoveItemModal'

export default {
  name: 'ReceiveItem',
  components: {
    RemoveItemModal
  },
  props: {
    order: Number,
    item: Object
  },
  computed: {
    itemPrice: function () {
      const { count, price } = this.item
      return numeral(count * price).format('0,0.00')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.receive-item {
  display: flex;
  align-items: center;
  font-size: 12px;
  &:hover {
    background-color: $secondary_monotone;
  }
}

@media (min-width: 768px) {
  .receive-item  {
    font-size: 16px;
  }
}
</style>
