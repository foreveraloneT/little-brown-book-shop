<template>
  <div class="cart-page">
    <div class="row">
      <div
        v-if="bookCount === 0"
        class="col-md-12 no-item-text"
      >
        Your cart is empty, <router-link to="/"><b>please add some book.</b></router-link>
      </div>
    </div>
    <div class="row" v-if="bookCount > 0">
      <div class="col-md-12">
        <p>Transaction(s):</p>
        <div class="row">
          <div class="col-md-12">
            <cart-item-list />
          </div>
        </div>

        <p>Promotion(s): -</p>

        <div class="row total-price">
          <div class="col-md-12">
            Total: {{totalPriceToShow}} Bath
          </div>
        </div>

        <div class="row sumary-total-price">
          <div class="col-md-12">
            <span class="price">{{sumaryTotalPriceToShow}} Bath</span>
          </div>
        </div>

        <base-button
          class="btn-primary btn-lg btn-block payment-btn"
          type="button"
        >
          > Proceed to Payment
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import numeral from 'numeral'
import CartItemList from '@/components/CartItemList'
import { mapGetters as cartMapGetters } from '@/store/modules/cart'

export default {
  name: 'Cart',
  components: {
    CartItemList
  },
  computed: {
    ...cartMapGetters({
      bookCount: 'itemCount',
      totalPrice: 'totalPrice',
      sumaryTotalPrice: 'sumaryTotalPrice'
    }),
    totalPriceToShow: function () {
      return numeral(this.totalPrice).format('0,0.00')
    },
    sumaryTotalPriceToShow: function () {
      return numeral(this.sumaryTotalPrice).format('0,0.00')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.cart-page {
  text-align: left;
  position: relative;
  .no-item-text {
    text-align: center;
  }
  .total-price {
    margin-top: 2rem;
    text-align: right;
    font-size: 24px;
  }
  .sumary-total-price {
    margin-top: 2rem;
    text-align: right;
    font-size: 32px;
    .price {
      color: $primary_green;
      font-weight: bold;
    }
  }
  .payment-btn {
    position: absolute;
    right: 0;
    margin-top: 3rem;
  }
}
</style>
