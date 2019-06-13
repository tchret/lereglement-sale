<template lang="pug">
  .layout
    .navbar 
      logo
      .menu
        a.current HOME
        a(href='https://bigwax.io/collections/le-reglement' target='_blank') LE SHOP
        .left
          a(href='https://twitter.com/lereglement' target='_blank') TW
          a(href='https://www.instagram.com/le_reglement/' target='_blank') IG
          a(href='https://www.facebook.com/lereglement/' target='_blank') FB
      .yt-btn
        .g-ytsubscribe(data-channelid="UCcqe1EHmdaLVBwfqk5OtmXw" data-layout="default" data-count="default")
    custom-video(v-bind:staticPath='staticPath')
    particles(v-bind:staticPath='staticPath')

</template>

<script>
import Logo from '~/components/Logo.vue'
import CustomVideo from '~/components/JapaneseSign.vue'
import Particles from '~/components/Particles'

export default {
  components: {
    Logo, CustomVideo, Particles
  },
  computed: {
    staticPath() {
      return process.env.NODE_ENV == 'development' ? "" : "/lereglement-sale"
    }
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
    flex 1
    display flex

    @media(max-width: 700px) 
      position fixed
      bottom: 0
      left: 0
      padding-bottom: 16px
      border-top: 1px solid rgba(white, .1)
      right: 0
      padding-top: 12px;
      font-size: 14px;
    a 
      color rgba(white, .6)
      text-decoration none
      display inline-block
      padding 6px 12px
      border-radius 3px
      &:hover 
        background rgba(white, .05)

      &.current 
        color: white;
        font-weight 900
        margin-left: 16px

    .left 
      margin-left auto
      margin-right 30px
      @media(max-width: 700px) 
        margin-right: 16px

      a 
        margin 0

.layout 
  height 100vh
  display flex
  align-items center
  justify-content center
  background black

.yt-btn
  transform scale(1.1)
  position relative
  top 2px
  transform-origin right
  @media(max-width: 700px) 
    margin-left: auto
</style>
