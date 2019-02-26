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
    <cart-button />
  </div>
</template>

<script>
import BookList from '@/components/BookList'
import CartButton from '@/components/CartButton'
import SearchBookInput from '@/components/SearchBookInput'
import {
  mapActions as bookMapAction,
  mapMutations as bookMapMutations,
  types as bookTypes
} from '@/store/modules/book'

export default {
  name: 'Home',
  components: {
    BookList,
    CartButton,
    SearchBookInput
  },
  methods: {
    ...bookMapAction({
      getBook: bookTypes.ACTIONS.GET_BOOKS
    }),
    ...bookMapMutations({
      clearSearch: bookTypes.MUTATIONS.CLEAR_SEARCH
    })
  },
  mounted: function () {
    this.clearSearch()
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
