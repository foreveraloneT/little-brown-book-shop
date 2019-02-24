<template>
  <div>
    <h1>Little Brown Book Shop</h1>
    <p v-for="(book, index) in books" :key="index">
      {{book}}
    </p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import types from '@/store/modules/book/types'
const { mapState, mapActions } = createNamespacedHelpers('book')

export default {
  name: 'Home',
  computed: {
    ...mapState({
      books: 'data'
    })
  },
  methods: {
    ...mapActions({
      getBook: types.ACTIONS.GET_BOOKS
    })
  },
  created: function () {
    console.log('get book')
    console.log(this.books)
    this.getBook()
  },
  updated: function () {
    console.log(this.books)
  }
}
</script>
