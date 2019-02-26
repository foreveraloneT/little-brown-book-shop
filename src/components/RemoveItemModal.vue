<template>
  <base-modal v-bind="modalProps">
    <div class="remove-modal">
      <h2>Remove Item</h2>
      <p>Are you sure to remove <span class="item-title">{{item.title}}</span> from cart ?</p>
      <base-button
        class="btn-primary btn-lg confirm-button"
        type="button"
        @click="onClickConfirmHandler"
      >
        Confirm
      </base-button>
    </div>
  </base-modal>
</template>

<script>
import {
  types as cartTypes,
  mapMutations as cartMapMutation
} from '@/store/modules/cart'

export default {
  name: 'RemoveItemModal',
  props: {
    item: Object
  },
  computed: {
    modalProps: function () {
      return this.$attrs
    }
  },
  methods: {
    ...cartMapMutation({
      removeItem: cartTypes.MUTATIONS.REMOVE_ITEM
    }),
    onClickConfirmHandler: function () {
      this.removeItem(this.item.id)
      this.$modal.hide(this.$attrs.name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';
.remove-modal {
  position: relative;
  height: 100%;
  h2 {
    color: $primary_green;
    font-weight: bold;
  }
  .item-title {
    color: $primary_green;
  }
  .confirm-button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
