<template>
  <div>
    <h1>Little Brown Book Shop</h1>
    <p v-for="(book) in books" :key="book.id">
      {{book.id}}: {{book.title}}
    </p>
  </div>
</template>

<script>
import {
  types,
  mapActions as bookMapAction,
  mapState as bookMapState
} from '@/store/modules/book'

export default {
  name: 'Home',
  computed: {
    ...bookMapState({
      books: 'data'
    })
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
