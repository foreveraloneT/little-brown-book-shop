<template>
  <div class="collapsible-wrapper">
    <div class="title">
      <button
        class="btn btn-link btn-collapse"
        type="button"
        @click="doToggle"
      >
        {{leftTitle}}
      </button>
      <div class="right-title">
        {{rightTitle}}
      </div>
    </div>
    <transition name="collapse">
      <div
        class="body"
        v-if="isShow"
      >
        <div>
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Collapsible',
  props: {
    leftTitle: {
      type: String,
      default: ''
    },
    rightTitle: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      isShow: false
    }
  },
  methods: {
    doToggle: function () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/variable.scss';
.collapsible-wrapper {
  box-sizing: border-box;
  border: 1px solid $secondary_monotone;
  margin-bottom: 0.5rem;
  .title {
    color: $primary_green;
    background-color: $secondary_monotone;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right-title {
      color: $primary_monotone;
      padding-right: 10px;
      font-size: 18px;
      text-align: right;
    }

    .btn-collapse,
    .btn-collapse:hover,
    .btn-collapse:focus {
      text-align: left;
      color: $primary_green;
      transition: color .25s;
      &:hover {
        color: $secondary_green;
      }
    }
  }
  .body {
    div {
      padding: 10px;
    }
  }
}

@media (max-width: 767.98px) {
  .collapsible-wrapper {
    .title {
      .btn-collapse,
      .right-title {
        font-size: 12px;
      }
    }
  }
}
</style>
