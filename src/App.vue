<template>
  <div id="app">
    <the-header/>
    <main>
      <router-view></router-view>
    </main>
    <the-footer/>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader'
  import TheFooter from './components/TheFooter'

  export default {
    name: 'App',
    components: {TheFooter, TheHeader},
    mounted() {
    },
    methods: {
    }
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
    background: #fff;
  }

  #app {
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
  }

   main {
    max-width: 1280px;
    margin: 0 auto;
  }

  main {
    padding-bottom: 30px;
  }
</style>
