<template>
  <nav
    class="navbar sticky-top navbar-light bg-light"
    :class="{ scrolled: !isTop }"
  >
    <router-link to="/" class="navbar-brand">
      <img src="@/assets/images/icons/line/LINE_icon_48.png" width="30" height="30" class="d-inline-block align-top" alt="Little Brown Book Shop">
      <b>Little Brown</b>
    </router-link>
    <button class="navbar-toggler" type="button">
      <i class="navbar-toggler-icon" />
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {
      isTop: true
    }
  },
  methods: {
    onScrollHandler: function () {
      if (window.scrollY > 0) {
        this.isTop = false
      } else {
        this.isTop = true
      }
    }
  },
  created: function () {
    window.addEventListener('scroll', this.onScrollHandler)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.onScrollHandler)
  }
}
</script>

<style lang='scss' scoped>
@import '@/scss/variable.scss';

nav {
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 20px 16px;
  background-color: white !important;
  color: $primary_monotone !important;
  z-index: 900;

  &.scrolled {
    -webkit-box-shadow: 1px 1px 3px 0px rgba(68,68,68,.3);
    -moz-box-shadow: 1px 1px 3px 0px rgba(68,68,68,.3);
    box-shadow: 1px 1px 3px 0px rgba(68,68,68,.3);
    transition: box-shadow .5s;
  }

  .navbar-toggler {
    color: $primary_monotone;
    &:focus {
      outline-color: transparent;
    }
  }

  @media (min-width: 768px) {
    .navbar-toggler {
      display: none;
    }
  }
}
</style>
