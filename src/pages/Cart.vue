<template>
  <div class="cart-page">
    <div class="row">
      <div
        v-if="bookCount === 0"
        class="col-md-12 no-item-text"
      >
        Your cart is empty, <router-link to="/"><b>please add some book.</b></router-link>
      </div>
      <div class="brown-pic" v-if="bookCount === 0">
        <img src="@/assets/images/brown.png" />
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

        <div class="row total-price">
          <div class="col-md-12">
            SUBTOTAL: {{totalPriceToShow}} Bath
          </div>
        </div>

        <p v-if="promotions.length > 0">Promotion(s):</p>
        <div class="row">
          <div class="col">
            <promotion-list :promotions="promotions" />
          </div>
        </div>

        <div class="row sumary-total-price">
          <div class="col-md-12">
            <span class="price">TOTAL {{summaryTotalPriceToShow}} Bath</span>
          </div>
        </div>

        <base-button
          class="btn-primary btn-lg btn-block payment-btn"
          type="button"
          @click="onClickPaymentHandler"
        >
          > Proceed to Payment
        </base-button>
        <payment-modal />
      </div>
    </div>
  </div>
</template>

<script>
import { formatMonney } from '@/lib/utils/formatter'
import CartItemList from '@/components/CartItemList'
import PaymentModal from '@/components/PaymentModal'
import PromotionList from '@/components/PromotionList'
import { mapGetters as cartMapGetters } from '@/store/modules/cart'

export default {
  name: 'Cart',
  components: {
    CartItemList,
    PaymentModal,
    PromotionList
  },
  computed: {
    ...cartMapGetters({
      bookCount: 'itemCount',
      totalPrice: 'totalPrice',
      summaryTotalPrice: 'summaryTotalPrice',
      promotions: 'promotions'
    }),
    totalPriceToShow: function () {
      return formatMonney(this.totalPrice)
    },
    summaryTotalPriceToShow: function () {
      return formatMonney(this.summaryTotalPrice)
    }
  },
  methods: {
    onClickPaymentHandler: function () {
      this.$modal.show('payment-modal')
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
    margin-bottom: 2rem;
  }
  .brown-pic {
    width: 100%;
    text-align: center;
    img {
      width: 150px;
    }
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
    margin: 3rem 0 5rem 0;
  }
}
</style>
