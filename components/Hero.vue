<template>
<div class='hero-container'>
      <div class='halo'></div>

  <div>
    <div class='group-1'>
      <div class='hero h-1 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-3 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-5 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-7 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-9 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-11 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-13 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-15 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-17 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-19 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-21 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-23 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    </div>

    <div class='group-2'>
      <div class='hero h-2 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-4 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-6 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-8 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-10 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-12 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-14 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-16 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-18 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-20 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
      <div class='hero h-22 hero-header' :style="{backgroundImage: `url(${staticPath}/hero667.png)`}"></div>
    </div>
            
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
  animation: boxShadow 1s ease-in-out infinite alternate-reverse

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

.group-1, .group-2
  width: 350px
  position: absolute
  top: 0
  bottom: 0
  z-index 99

.group-1
  transform translateX(10px)
  animation leftAnimation .1s ease-in-out infinite alternate-reverse

  .hero-header   
    // display none

.group-2
  transform: translateX(-10px)
  animation rightAnimation .1s ease-in-out infinite alternate-reverse

  .hero-header
    left inherit

.hero-header.h-1
  clip rect(0, 290px, 5px, 0)
  display block

.hero-header.h-2
  clip rect(5px, 290px, 10px, 0)

.hero-header.h-3
  clip rect(10px, 290px, 15px, 0)

.hero-header.h-4
  clip rect(15px, 290px, 20px, 0)
.hero-header.h-5
  clip rect(20px, 290px, 25px, 0)
.hero-header.h-6
  clip rect(25px, 290px, 30px, 0)
.hero-header.h-7
  clip rect(30px, 290px, 35px, 0)
.hero-header.h-8
  clip rect(35px, 290px, 40px, 0)
.hero-header.h-9
  clip rect(40px, 290px, 45px, 0)
.hero-header.h-10
  clip rect(50px, 290px, 55px, 0)

.hero-header.h-11
  clip rect(55px, 290px, 60px, 0)
  
.hero-header.h-12
  clip rect(60px, 290px, 65px, 0)

.hero-header.h-13
  clip rect(65px, 290px, 70px, 0)

.hero-header.h-14
  clip rect(70px, 290px, 75px, 0)

.hero-header.h-15
  clip rect(75px, 290px, 80px, 0)

.hero-header.h-16
  clip rect(80px, 290px, 85px, 0)

.hero-header.h-17
  clip rect(85px, 290px, 90px, 0)

.hero-header.h-18
  clip rect(90px, 290px, 95px, 0)

.hero-header.h-19
  clip rect(95px, 290px, 100px, 0)

.hero-header.h-20
  clip rect(100px, 290px, 105px, 0)

.hero-header.h-21
  clip rect(105px, 290px, 110px, 0)

.hero-header.h-22
  clip rect(110px, 290px, 115px, 0)

.hero-header.h-23
  clip rect(115px, 290px, 120px, 0)

@keyframes rightAnimation 
  to 
    transform: translateX(10px)
    opacity: .5

@keyframes leftAnimation 
  to 
    transform: translateX(-10px)
    opacity: .5

@keyframes boxShadow
  to 
    box-shadow: 0px 0px 8px 0px #BD00FF, 0px 0px 6px 0px #BD00FF inset;

</style>

