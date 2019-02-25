<template>
  <transition name="move" :appear="initAnimation">
    <div class="book-search-container">
      <base-input
        placeholder="Search by name or code: ex. harry potter"
        class="book-search-input"
        v-model="value"
        @change.native="onChangeHandler"
      />
      <i class="ion-ios-search search-icon" />
    </div>
  </transition>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: 'SearchBookInput',
  props: {
    initAnimation: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      value: ''
    }
  },
  methods: {
    search: function () {
      console.log('ggdd', this.value)
    }
  },
  created: function () {
    this.debounceSearch = debounce(this.search, 500)
  },
  updated: function () {
    this.debounceSearch()
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.book-search-container {
  position: relative;
  .book-search-input {
    padding-right: 50px;
  }
  .search-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    margin: auto 0;
    font-size: 32px;
  }
}
.move-enter {
  opacity: 0;
  transform: translateY(50%);
}
.move-enter-active {
  transition: all .5s ease-in-out;
}
</style>
