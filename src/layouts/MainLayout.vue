<template>
  <div>
    <navbar />
    <div class="container">
      <little-brown-title />
      <slot />
    </div>
  </div>
</template>

<script>
import LittleBrownTitle from '@/components/LittleBrownTitle'
import Navbar from '@/components/Navbar'

export default {
  name: 'MainLayout',
  components: {
    LittleBrownTitle,
    Navbar
  }
}
</script>
