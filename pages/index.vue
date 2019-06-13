<template lang="pug">
  .layout
    .navbar
      logo
      .menu
        .g-ytsubscribe(data-channelid="UCcqe1EHmdaLVBwfqk5OtmXw" data-layout="default" data-count="default")
    japanese-sign
    particles

</template>

<script>
import Logo from '~/components/Logo.vue'
import JapaneseSign from '~/components/JapaneseSign.vue'
import Particles from '~/components/Particles'

export default {
  components: {
    Logo, JapaneseSign, Particles
  }
}
</script>

<style lang="stylus">
.navbar 
  padding 32px
  display flex
  align-items: center
  position absolute 
  left 0 
  right 0
  top 0
  .menu 
    margin-left auto

.layout 
  height 100vh
  display flex
  align-items center
  justify-content center
  background black
</style>
