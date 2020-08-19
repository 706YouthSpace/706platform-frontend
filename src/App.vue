<template>
  <div id="app">
    <the-header />
    <main>
      <router-view></router-view>
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default {
  name: 'App',
  components: { TheFooter, TheHeader }
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  a, a:hover, a:active, a:visited, a:link, a:focus {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
    background: none;
    text-decoration: none;
    user-focus: none;
    user-select: none;
    color: inherit;
  }

  body {
    background: #f0f2f5;
    font-family: Microsoft YaHei, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    color: #101010;
    min-width: 900px;
  }

   main {
     min-height: 100vh;
  }
</style>
