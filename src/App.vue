<template>
  <div id="app">
    <main-layout>
      <router-view/>
    </main-layout>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/scss/variable.scss';

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary_text_color;
  margin-top: 60px;
  padding-bottom: 5rem;
}
</style>
