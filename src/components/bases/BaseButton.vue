<template>
  <button
    class="btn"
    v-bind="this.$attrs"
    v-on="this.$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

.btn, .btn:focus .btn:visited {
  border-width: 0;
  transition: transform .3s;
  box-shadow: none !important;
  &.btn-primary, .btn-primary:active {
    background-color: $primary_green !important;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:disabled {
    transform: none;
  }
}
</style>
