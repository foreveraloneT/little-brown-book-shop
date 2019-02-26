<template>
  <div class="receive-container">
    <div id="haveReceive" class="row" v-if="bookCount > 0">
      <div class="col">
        <div class="row">
          <div class="col general-info">
            <h2>Receive</h2>
            <p><b>Receive Date> </b>{{dateToShow}}</p>
            <p><b>Address> </b>LINE: Little Brown Book Shop.</p>
            <p><b>email> </b><a href="#">little.brown@linecrop.com</a></p>
          </div>
        </div>

        <p>Transaction(s):</p>
        <div class="row">
          <div class="col">
            <receive-item-list />
          </div>
        </div>

        <p>Promotion(s): -</p>

        <div class="row total-price">
          <div class="col-md-12">
            SUBTOTAL: {{totalPriceToShow}} Bath
          </div>
        </div>

        <div class="row total-discount">
          <div class="col-md-12">
            DISCOUNT: 0 Bath
          </div>
        </div>

        <div class="row sumary-total-price">
          <div class="col-md-12">
            TOTAL: {{summaryTotalPriceToShow}} Bath
          </div>
        </div>

        <div class="row total-cash">
          <div class="col-md-12">
            CASH: {{cashToShow}} Bath
          </div>
        </div>

        <div class="row cash-change">
          <div class="col-md-12">
            CHANGE: {{cashChangeToShow}} Bath
          </div>
        </div>
      </div>
    </div>
    <payment-success-modal />
  </div>
</template>

<script>
import moment from 'moment'
import { formatMonney } from '@/lib/utils/formatter'
import PaymentSuccessModal from '@/components/PaymentSuccessModal'
import ReceiveItemList from '@/components/ReceiveItemList'
import {
  mapGetters as receiveMapGetters,
  mapState as receiveMapState
} from '@/store/modules/receive'

export default {
  name: 'Receive',
  components: {
    ReceiveItemList,
    PaymentSuccessModal
  },
  data: function () {
    return {
      dateToShow: moment().format('MMMM Do YYYY, H:mm')
    }
  },
  computed: {
    ...receiveMapState({
      cash: 'cash'
    }),
    ...receiveMapGetters({
      bookCount: 'itemCount',
      totalPrice: 'totalPrice',
      summaryTotalPrice: 'summaryTotalPrice'
    }),
    totalPriceToShow: function () {
      return formatMonney(this.totalPrice)
    },
    summaryTotalPriceToShow: function () {
      return formatMonney(this.summaryTotalPrice)
    },
    cashToShow: function () {
      return formatMonney(this.cash)
    },
    cashChangeToShow: function () {
      return formatMonney(this.cash - this.summaryTotalPrice)
    }
  },
  mounted: function () {
    if (this.bookCount === 0) {
      this.$router.replace('/')
    } else {
      this.$modal.show('payment-success-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.receive-container {
  text-align: left;

  .general-info {
    P {
      font-size: 12px;
    }
  }

  .total-price,
  .total-discount,
  .sumary-total-price,
  .total-cash,
  .cash-change {
    text-align: right;
  }

  .sumary-total-price,
  .total-cash,
  .cash-change {
    font-size: 24px;
    color: $primary_green;
  }
}

@media (min-width: 768px) {
  .receive-container{
    .general-info {
      p {
        font-size: 16px;
      }
    }
  }
}

</style>
