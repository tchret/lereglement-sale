<template>
<div class='scene'>
  
  <video autoplay playsinline muted loop preload >
    <source :src="`${staticPath}/background.mp4`" />
	</video>


</div>
</template>

<script>
export default {
  props: ['staticPath']
}
</script>

<style lang='stylus' scoped>
.scene
  position relative
  overflow hidden

video
  max-width 700px
  margin: auto;
  left: 0
  right: 0
  top 0
  width: 100%

svg 
  display block
  position relative
  width: 100%
  height: auto
  z-index 1  
  
</style>