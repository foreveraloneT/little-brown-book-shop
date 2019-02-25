<template>
  <transition name="move" appear>
    <div class="cart-container">
      <i class="ion-ios-cart" />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.cart-container {
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
