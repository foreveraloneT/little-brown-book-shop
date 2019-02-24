<template>
  <h1>
    <span class="text-green">Little Brown</span> <span class="text-black">Shop</span>
  </h1>
</template>

<script>
export default {
  name: 'LittleBrownTitle'
}
</script>

<style lang="scss" scoped>
  @import '@/scss/variable.scss';
  h1 {
    font-weight: bold;
    margin-bottom: 5rem;
    .text-green {
      color: $primary-green;
    }
    .text-black {
      color: $primary-monotone;
    }
  }
</style>
