<template>
  <div>
    <little-brown-title />
    <book-list />
  </div>
</template>

<script>
import BookList from '@/components/BookList'
import LittleBrownTitle from '@/components/LittleBrownTitle'
import {
  types,
  mapActions as bookMapAction
} from '@/store/modules/book'

export default {
  name: 'Home',
  components: {
    BookList,
    LittleBrownTitle
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
