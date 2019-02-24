<template>
  <transition name="move" appear>
    <h1>
      <span class="text-green">Little Brown</span> <span class="text-black">Shop</span>
    </h1>
  </transition>
</template>

<script>
export default {
  name: 'LittleBrownTitle'
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';
h1 {
  font-weight: bold;
  margin-bottom: 5rem;
  .text-green {
    color: $primary-green;
  }
  .text-black {
    color: $primary-monotone;
  }
}
.move-enter {
  opacity: 0;
  transform: translateX(-25%);
}
.move-enter-active {
  transition: all .5s ease-in-out;
}
</style>
