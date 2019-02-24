<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
  >
    <div class="card book-card">
      <div class="row no-gutters">
        <div class="col-md-2 col-2">
          <img :src="book.cover" class="card-img" :alt="book.title" />
        </div>

        <div class="col-md-9 col-9">
          <div class="card-body">
            <h5 class="card-title text-left">{{ book.title }}</h5>
            <p class="text-footer book-code">
              <small class="sub-content">code: {{ book.id }}</small>
            </p>
            <p class="text-footer book-price">
              <small class="sub-content">Price: {{book.price}} Bath</small>
            </p>
          </div>
        </div>

        <div class="col-md-1 col-1 add-one-item">
          <ion-icon name="cart"></ion-icon>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  name: 'BookItem',
  props: {
    book: Object,
    order: Number
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      const plusDuration = this.order >= 10 ? 0 : (this.order - 1) * 50
      Velocity(el, { translateY: '50px' }, { duration: 150 + plusDuration })
      Velocity(el, { opacity: 1, translateY: 0 }, { complete: done })
    }
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
  cursor: pointer;
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
    &:hover {
      background-color: $secondary_green;
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
