<template>
  <div class="container">
    <little-brown-title />
    <slot />
  </div>
</template>

<script>
import LittleBrownTitle from '@/components/LittleBrownTitle'

export default {
  name: 'MainLayout',
  components: {
    LittleBrownTitle
  }
}
</script>
