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
  import {mapMutations} from 'vuex'
  import TheHeader from './components/TheHeader'
  import TheFooter from './components/TheFooter'

  export default {
    name: 'App',
    components: {TheFooter, TheHeader},
    mounted() {
      this.changeDevice()
      window.addEventListener('resize', this.changeDevice)
    },
    methods: {
      ...mapMutations([
        'setDevice'
      ]),
      isMobile() {
        const rect = document.body.getBoundingClientRect()
        return rect.width - 1 < 992
      },
      changeDevice() {
        const isMobile = this.isMobile()
        if (isMobile) {
          this.setDevice('mobile')
        } else {
          this.setDevice('desktop')
        }
      }
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

  #app {
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    padding-bottom: 30px;
  }
</style>
