<template lang='pug'>
  #particles-js
</template>

<script>

export default {
  props: ['staticPath'],
  mounted() {
     particlesJS.load('particles-js', `${this.staticPath}/particles.json`, function() {
      console.log('callback - particles.js config loaded');
    })
  }
}
</script>

<style lang='stylus'>
  #particles-js 
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index 2
    pointer-events none
</style>