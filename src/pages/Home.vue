<template>
  <div>
    <little-brown-title />
    <div class="row">
      <div class="col-12 search-section">
        <search-book-input
          :init-animation="true"
          :style="{ width: '500px' }"
        />
      </div>
    </div>
    <book-list />
  </div>
</template>

<script>
import BookList from '@/components/BookList'
import LittleBrownTitle from '@/components/LittleBrownTitle'
import SearchBookInput from '@/components/SearchBookInput'
import {
  types,
  mapActions as bookMapAction
} from '@/store/modules/book'

export default {
  name: 'Home',
  components: {
    BookList,
    LittleBrownTitle,
    SearchBookInput
  },
  methods: {
    ...bookMapAction({
      getBook: types.ACTIONS.GET_BOOKS
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
