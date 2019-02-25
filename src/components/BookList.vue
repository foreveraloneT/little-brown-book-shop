<template>
  <div class="book-list-container">
    <vue-loading
      type="spiningDubbles"
      class="loading-icon"
      :size="{ width: '50px', height: '50px' }"
      v-if="isLoading"
    />
    <book-item
      v-for="(book, order) in books"
      :key="book.id"
      :book="book"
      :order="order"
    />
  </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'
import BookItem from './BookItem'
import {
  mapState as bookMapState,
  mapGetters as bookMapGetters
} from '@/store/modules/book'

export default {
  name: 'BookList',
  components: {
    BookItem,
    VueLoading
  },
  computed: {
    ...bookMapGetters({
      books: 'fiteredData'
    }),
    ...bookMapState({
      isLoading: 'isLoading'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.loading-icon {
  fill: $primary_green !important;
}
.book-list-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
