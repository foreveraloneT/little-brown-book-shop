<template>
  <input
    class="form-control form-control-lg"
    type="text"
    :value="value"
    v-on="listeners"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
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
