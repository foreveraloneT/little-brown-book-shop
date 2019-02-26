<template>
  <modal
    v-bind="modalProps"
    v-on="this.$listeners"
  >
    <div class="modal-body">
      <slot />
    </div>
  </modal>
</template>

<script>
export default {
  name: 'BaseModal',
  data: function () {
    return {
      documentWidth: document.body.clientWidth
    }
  },
  computed: {
    modalProps: function () {
      const width = this.documentWidth >= 768
        ? 600
        : '95%'
      return {
        width,
        ...this.$attrs
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-body {
  padding: 15px;
  height: 100%;
}
</style>
