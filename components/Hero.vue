<template>
<div class='hero-container'>
      <div class='halo'></div>

  <div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    <div class='hero hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
            
  </div>
  <div class='hero hero-base bottle' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
  <div class='hero hero-base' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}">
  </div>
  <div class='hero hero-shadow' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
</div>
</template>

<script>
export default {
  props: ['staticPath']
}
</script>

<style lang='stylus' scoped>
.halo
  height: 10px
  width: 60px
  border 2px solid #BD00FF
  box-shadow: 0px 0px 5px 0px #BD00FF, 0px 0px 5px 0px #BD00FF inset;
  border-radius 50%
  position: absolute 
  top -15px
  transform: rotate(20deg)
  right: 120px
.hero-container
  width: 350px;
  height 440px
  position absolute
  margin auto 
  left 50px
  right 0
  z-index 999
  @media(max-width: 700px) 
    transform: scale(.65)
    left 0
  
  
  
.hero 
  background-size cover
  position absolute
  width: 350px;
  left 0
  right 0 
  bottom 0
  top 0
  z-index 2

.hero-base 
  clip: rect(120px, 350px, 500px, 0);

  &.bottle 
    clip: rect(0px, 353px, 470px, 250px);

.hero-shadow
  filter blur(10px)
  z-index 1

.hero-header 
  clip rect(0, 290px, 5px, 0)
  
  &:nth-child(odd)
    transform: translateX(10px)

  
  &:nth-child(even)
    transform: translateX(-10px)
    left inherit

.hero-header:nth-child(2)
  clip rect(5px, 290px, 10px, 0)

.hero-header:nth-child(3)
  clip rect(10px, 290px, 15px, 0)

.hero-header:nth-child(4)
  clip rect(15px, 290px, 20px, 0)
.hero-header:nth-child(5)
  clip rect(20px, 290px, 25px, 0)
.hero-header:nth-child(6)
  clip rect(25px, 290px, 30px, 0)
.hero-header:nth-child(7)
  clip rect(30px, 290px, 35px, 0)
.hero-header:nth-child(8)
  clip rect(35px, 290px, 40px, 0)
.hero-header:nth-child(9)
  clip rect(40px, 290px, 45px, 0)
.hero-header:nth-child(10)
  clip rect(50px, 290px, 55px, 0)

.hero-header:nth-child(11)
  clip rect(55px, 290px, 60px, 0)
  
.hero-header:nth-child(12)
  clip rect(60px, 290px, 65px, 0)

.hero-header:nth-child(23)
  clip rect(65px, 290px, 70px, 0)

.hero-header:nth-child(13)
  clip rect(70px, 290px, 75px, 0)

.hero-header:nth-child(14)
  clip rect(75px, 290px, 80px, 0)

.hero-header:nth-child(15)
  clip rect(80px, 290px, 85px, 0)

.hero-header:nth-child(16)
  clip rect(85px, 290px, 90px, 0)

.hero-header:nth-child(17)
  clip rect(90px, 290px, 95px, 0)
.hero-header:nth-child(18)
  clip rect(95px, 290px, 100px, 0)
.hero-header:nth-child(19)
  clip rect(100px, 290px, 105px, 0)
.hero-header:nth-child(20)
  clip rect(105px, 290px, 110px, 0)

.hero-header:nth-child(21)
  clip rect(110px, 290px, 115px, 0)
.hero-header:nth-child(22)
  clip rect(115px, 290px, 120px, 0)

@keyframes rightAnimation 
  to 
    transform: translateX(25px)
    opacity: .5

@keyframes leftAnimation 
  to 
    transform: translateX(-25px)
    opacity: .5
</style>

