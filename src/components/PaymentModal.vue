<template>
  <base-modal
    name="payment-modal"
    v-bind="this.$attrs"
    v-on="this.$listeners"
  >
    <div class="payment-modal">
      <h2>Payment Method</h2>
      <p>Total price: <span class="price-text">฿{{summaryTotalPriceToShow}}</span></p>
      <base-input
        class="payment-input"
        inputSize="lg"
        placeholder="Enter cash: ex. 1500"
        type="number"
        :min="0"
        v-model.number="cashInput"
      />
      <base-button
        class="btn-primary btn-lg payment-btn"
        :disabled="!allowToPay"
        @click="onPayHandler"
      >
        Payment
      </base-button>
    </div>
  </base-modal>
</template>

<script>
import numeral from 'numeral'
import { mapGetters as cartMapGetters } from '@/store/modules/cart'
import {
  types as receiveType,
  mapActions as receiveMapAction
} from '@/store/modules/receive'

export default {
  name: 'PaymentModal',
  data: function () {
    return {
      cashInput: ''
    }
  },
  computed: {
    ...cartMapGetters({
      summaryTotalPrice: 'summaryTotalPrice'
    }),
    summaryTotalPriceToShow: function () {
      return numeral(this.summaryTotalPrice).format('0,0.00')
    },
    allowToPay: function () {
      return this.cashInput >= this.summaryTotalPrice
    }
  },
  methods: {
    ...receiveMapAction({
      doPayment: receiveType.ACTIONS.CREATE_PAYMENT
    }),
    onPayHandler: function () {
      if (this.allowToPay) {
        console.log('pay', this.cashInput)
        this.doPayment(this.cashInput)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.payment-modal {
  height: 100%;
  position: relative;
  p {
    .price-text {
      color: $primary_green;
    }
    margin-top: 1rem;
  }
  .payment-input {
    margin-top: 3rem;
  }
  .payment-btn {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
