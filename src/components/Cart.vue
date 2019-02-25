<template>
  <transition name="move" v-if="count > 0" >
    <div class="cart-container">
      <i class="ion-ios-cart" />
      <div class="count-item">
        {{count}}
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters as cartMapGetters } from '@/store/modules/cart'

export default {
  name: 'Cart',
  computed: {
    ...cartMapGetters({
      count: 'itemCount'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.cart-container {
  user-select: none;
  width: 70px;
  height: 70px;
  background-color: white;
  font-size: 48px;
  position: fixed;
  right: 4%;
  bottom: 2.5%;
  border-radius: 50%;
  color: $primary_green;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(68,68,68,1);
  -moz-box-shadow: 1px 1px 5px 0px rgba(68,68,68,1);
  box-shadow: 1px 1px 5px 0px rgba(68,68,68,1);
  transition: color .5s;
  cursor: pointer;
  &:hover {
    color: $secondary_green;
  }

  .count-item {
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    background-color: $primary_green;
    color: white;
    padding: 1px 15px;
    bottom: -8px;
    border-radius: 50px;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(68,68,68,1);
    -moz-box-shadow: 1px 1px 5px 0px rgba(68,68,68,1);
    box-shadow: 1px 1px 5px 0px rgba(68,68,68,1);
  }
}

@media (min-width: 768px) {
  .cart-container {
    right: 20%;
    bottom: 5%;
  }
}

.move-enter {
  opacity: 0;
  transform: translateY(50%);
}
.move-enter-active {
  transition: all .25s ease-in-out;
}
</style>
