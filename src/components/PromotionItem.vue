<template>
  <div class="promotion-item-wrapper">
    <collapsible
      :left-title="promotion.title"
      :right-title="discountToShow"
    >
      <p v-for="book in promotion.books" :key="book.id">
        <small class="sub-content">{{book.id}}</small> {{book.title}}
      </p>
    </Collapsible>
  </div>
</template>

<script>
import Collapsible from '@/components/Collapsible'
import { formatMonney } from '@/lib/utils/formatter.js'

export default {
  name: 'PromotionItem',
  components: {
    Collapsible
  },
  props: {
    promotion: Object
  },
  computed: {
    discountToShow: function () {
      return `-${formatMonney(this.promotion.discount)} Bath`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
