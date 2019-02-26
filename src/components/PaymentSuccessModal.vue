<template>
  <base-modal
    name="payment-success-modal"
    v-bind="this.$attrs"
    v-on="this.$listeners"
  >
  <div class="payment-success-modal">
    <h3>Payment Success !!!</h3>
    <h4>Thank you :)</h4>
    <img src="@/assets/images/success.gif" />
  </div>
  </base-modal>
</template>

<script>
export default {
  name: 'PaymentSuccessModal'
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.payment-success-modal {
  text-align: center;
  color: $primary_green;
  img {
    width: 200px;
  }
}
</style>
