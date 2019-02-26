<template>
  <div class="row cart-item mb-2">
    <div class="col-md-1 d-none d-sm-block">
      #{{order}}
    </div>
    <div class="col-md-7 col-5">
      {{item.title}} <small class="sub-content">({{item.id}})</small>
    </div>
    <div class="col-md-1 col-3">
      <base-input
        type="number"
        input-size="sm"
        v-model.number="itemCount"
        min="1"
        @blur="onBlurItemCountHandler"
      />
    </div>
    <div class="col-md-2 col-2">
      ฿{{itemPrice}}
    </div>
    <div class="col-md-1 col-2 remove-icon" @click="onClickRemoveHandler">
      <div class="icon">
        <i class="ion-ios-close" />
      </div>
    </div>
    <remove-item-modal :name="removeModalName" :item="item" />
  </div>
</template>

<script>
import { formatMonney } from '@/lib/utils/formatter'
import RemoveItemModal from '@/components/RemoveItemModal'
import debounce from 'lodash/debounce'
import {
  types as cartTypes,
  mapMutations as cartMapMutations
} from '@/store/modules/cart'

export default {
  name: 'CartItem',
  components: {
    RemoveItemModal
  },
  props: {
    order: Number,
    item: Object
  },
  computed: {
    itemCount: {
      get: function () {
        return String(this.item.count)
      },
      set: function (value) {
        if (value) {
          const valueToAdd = value >= 1 ? value : 1
          this.debounceUpdateCart({ id: this.item.id, value: Math.floor(valueToAdd) })
        }
      }
    },
    itemPrice: function () {
      const { count, price } = this.item
      return formatMonney(count * price)
    },
    removeModalName: function () {
      return `remove-item-${this.item.id}`
    }
  },
  methods: {
    ...cartMapMutations({
      updateCart: cartTypes.MUTATIONS.ADD_ITEM
    }),
    onBlurItemCountHandler: function () {
      this.$forceUpdate()
    },
    onClickRemoveHandler: function () {
      this.$modal.show(this.removeModalName)
    }
  },
  created: function () {
    this.debounceUpdateCart = debounce(this.updateCart, 500)
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.cart-item {
  display: flex;
  align-items: center;
  font-size: 12px;
  &:hover {
    background-color: $secondary_monotone;
  }
  .remove-icon {
    font-size: 32px;
    color: $primary_green;
    text-align: center;
    cursor: pointer;
    transition: color .25s, transform .25s;
    .icon {
      transition: transform .25s;
    }
    &:hover {
      color: $primary_monotone;
      .icon {
        transform: rotateZ(180deg);
      }
    }
  }
}

@media (min-width: 768px) {
  .cart-item  {
    font-size: 16px;
  }
}
</style>
