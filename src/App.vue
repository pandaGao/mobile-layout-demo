<template>
  <div id="app" class="app-container">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/about">About</router-link> -->
      <div class="sub-nav">
        <router-link to="/scaleViewport">缩放Viewport</router-link>
        <router-link to="/remScaleViewport">rem + 缩放Viewport</router-link>
      </div>
      <div class="sub-nav">
        <router-link to="/noScaleViewport">不缩放Viewport</router-link>
        <router-link to="/remNoScaleViewport">rem + 不缩放Viewport</router-link>
      </div>
    </div>
    <h3>devicePixelRatio: {{dpr}}</h3>
    <h3>root element width: {{$root.rootClientWidth}}px</h3>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dpr: 1
    }
  },
  mounted () {
    this.dpr = window.devicePixelRatio || 1
    this.$root.rootClientWidth = document.documentElement.clientWidth
  }
}
</script>

<style lang="stylus">
body
  padding 0
  margin 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 10px 0
.sub-nav
  display flex
  a
    flex 1
    padding 5px
    font-size 16px
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>

<style lang="stylus" scoped>
.app-container
  h3
    margin 4px
    font-size 16px
    line-height 20px
</style>
