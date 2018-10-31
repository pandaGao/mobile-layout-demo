<template>
  <div class="no-scale-viewport">
    <h1>不缩放Viewport示例</h1>
    <h3>我应该是圆的</h3>
    <div class="radius-case"></div>
    <h3>我应该是0.5px宽的线</h3>
    <div class="border-case"></div>
    <h3>我应该是垂直居中的</h3>
    <div class="button-case">当然是选择</div>
    <h3>我不应该换行</h3>
    <div class="text-case">原谅</div>
  </div>
</template>

<script>
import noScaleViewport from '../noScaleViewport.js'

export default {
  mounted () {
    noScaleViewport()
    this.$root.rootClientWidth = document.documentElement.clientWidth
  }
}
</script>

<style lang="stylus" scoped>
target-unit = 'rem'
.no-scale-viewport
  font-size 0
  padding 10px
  h1
    font-size 24px
    line-height 28px
  h3
    font-size 16px
    line-height 28px
.radius-case
  margin 0 auto
  width 10px
  height 10px
  border-radius 5px
  background-color #42b983
.border-case
  width 100%
  border-top .5px solid #42b983
.button-case
  display inline-block
  padding 1px
  font-size 14px
  line-height 16px
  border 1px solid #42b983
.text-case
  margin 0 auto
  width 32px
  font-size 16px
</style>
