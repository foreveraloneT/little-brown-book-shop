<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    :css="false"
  >
    <div class="card book-card">
      <div class="row no-gutters">
        <div class="col-md-2 col-2">
          <img :src="book.cover" class="card-img" :alt="book.title" />
        </div>

        <div class="col-md-9 col-9">
          <div class="card-body">
            <h6 class="card-title text-left">{{ book.title }}</h6>
            <p class="text-footer book-code">
              <small class="sub-content">code: {{ book.id }}</small>
            </p>
            <p class="text-footer book-price">
              <small class="sub-content">Price: {{book.price}} Bath</small>
            </p>
          </div>
        </div>

        <div
          class="col-md-1 col-1 add-one-item"
          @click.stop="throttleOnAddOneItem"
        >
          <i class="ion-ios-cart" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate'
import debounce from 'lodash/debounce'
import {
  mapMutations as cartMapMutations,
  types as cartTypes
} from '@/store/modules/cart'

export default {
  name: 'BookItem',
  props: {
    book: Object,
    order: Number
  },
  methods: {
    ...cartMapMutations({
      addOneToCart: cartTypes.MUTATIONS.ADD_ONE_ITEM
    }),
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      const plusDuration = this.order >= 10 ? 0 : (this.order - 1) * 50
      Velocity(el, { translateY: '50px' }, { duration: 150 + plusDuration })
      Velocity(el, { opacity: 1, translateY: 0 }, { complete: done })
    },
    onAddOneItem: function () {
      this.addOneToCart(this.book.id)
    }
  },
  created: function () {
    this.throttleOnAddOneItem = debounce(this.onAddOneItem, 200)
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.book-card {
  background-color: $secondary-monotone;
  border-color: $secondary-monotone;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
  .text-footer {
    margin-bottom: 0;
    &.book-code {
      position: absolute;
      bottom: 3px;
      left: 5px;
    }
    &.book-price {
      position: absolute;
      bottom: 3px;
      right: 5px;
    }
  }
  .add-one-item {
    background: $primary-green;
    color: white;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    transition: background-color .5s;
    cursor: pointer;
    i {
      transition: transform .2s ease-in-out;
    }
    .ion-ios-cart {
      font-size: 24px;
    }
    &:hover {
      background-color: $secondary_green;
    }
    &:active {
      i {
        transform: scale(1.3)
      }
    }
  }
}
@media (min-width: 768px) {
  .book-card {
    width: 500px;
    transition: width 150ms;
    &:hover {
      width: 515px;
    }
  }
}
</style>
