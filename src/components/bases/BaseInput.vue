<template>
  <input
    class="form-control"
    :class="sizeClass"
    type="text"
    :value="value"
    v-on="listeners"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: '',
    inputSize: {
      type: String,
      default: 'lg'
    }
  },
  computed: {
    listeners: function () {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    },
    sizeClass: function () {
      return `form-control-${this.inputSize}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';

input {
  border-color: $primary_monotone;
  color: $primary-text-color;
  &::placeholder {
      color: $secondary-text-color;
    }
  &:focus {
    border-color: $primary_monotone;
    box-shadow: none;
  }
}
</style>
