<template>
  <div>
    <div class="row">
      <div class="col-12 search-section">
        <search-book-input
          :init-animation="true"
          :style="{ width: '500px' }"
        />
      </div>
    </div>
    <book-list />
    <cart />
  </div>
</template>

<script>
import BookList from '@/components/BookList'
import Cart from '@/components/Cart'
import SearchBookInput from '@/components/SearchBookInput'
import {
  mapActions as bookMapAction,
  types as bookTypes
} from '@/store/modules/book'

export default {
  name: 'Home',
  components: {
    BookList,
    Cart,
    SearchBookInput
  },
  methods: {
    ...bookMapAction({
      getBook: bookTypes.ACTIONS.GET_BOOKS
    })
  },
  created: function () {
    this.getBook()
  }
}
</script>

<style lang="scss" scoped>
.search-section {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>
