<template>
  <div class="promotion-list-container">
    <promotion-item
      v-for="(promotion, index) in promotions"
      :key="index"
      :promotion="promotion"
    />
  </div>
</template>

<script>
import PromotionItem from '@/components/PromotionItem'

export default {
  name: 'PromotionList',
  props: {
    promotions: Array
  },
  components: {
    PromotionItem
  }
}
</script>

<style lang="scss" scoped>

</style>
