<template lang="pug">
  .layout
    .navbar 
      logo
      .menu
        a.current HOME
        a(href='https://shop.lereglement.sale' target='_blank') LE SHOP
        .left
          a(href='https://twitter.com/lereglement' target='_blank') TW
          a(href='https://www.instagram.com/le_reglement/' target='_blank') IG
          a(href='https://www.facebook.com/lereglement/' target='_blank') FB
      .yt-btn
        .g-ytsubscribe(data-channelid="UCcqe1EHmdaLVBwfqk5OtmXw" data-layout="default" data-count="default")
    div.content
      .text L <br> E <br> <br> R <br> E <br> G <br> L <br> E <br> M <br> E <br> N <br> T <br>
      .video-container
        custom-video(v-bind:staticPath='staticPath')
      .text P <br> O <br> I <br> N <br> T <br><br> S <br> A <br> L <br> E <br>
      .text.mention 
        a(href='https://tchret.com' target='_blank') LE RÉGLEMENT <i>×</i> TCHRET 
    hero(v-bind:staticPath='staticPath')
    particles(v-bind:staticPath='staticPath')

</template>

<script>
import Logo from '~/components/Logo.vue'
import CustomVideo from '~/components/JapaneseSign.vue'
import Particles from '~/components/Particles'
import Hero from '~/components/Hero'

export default {
  components: {
    Logo, CustomVideo, Particles, Hero
  },
  computed: {
    staticPath() {
      return process.env.NODE_ENV == 'development' ? "" : ""
    }
  }
}
</script>

<style lang="stylus">

.content 
  display flex
  align-items: center
  width: 100%
  position relative
  .mention 
    position absolute
    left: 0
    right: 0
    text-align: center
    z-index 99999
    letter-spacing 5px
    bottom -30px

    i
      font-style normal
      font-size: 18px
      position relative
      top 1px
      font-weight 100
    a 
      text-decoration none
      color #BD00FF
      margin-right: 10px

      &:hover 
        color darken(#BD00FF, 10%)

  .text 
    font-size: 14px;
    color: #BD00FF
    flex 1
    text-align center
    text-shadow: 0px 0px 2px #BD00FF, 0px 0px 2px #BD00FF, 0px 0px 5px #BD00FF;
    line-height: 1.9
    min-width: 110px

    @media(max-width 700px)
      opacity 0
      min-width: 32px


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
