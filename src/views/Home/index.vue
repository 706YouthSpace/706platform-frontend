<template>
  <div class="home">
    <home-slogan class="home__sec home__sec__slogan"/>
    <home-intro class="home__sec"/>
    <home-activity id="activity"
                   class="home__sec"
                   @bgOffsetYChange="handleBgOffsetYChange"
                   :bgOffsetY="activityBgOffset"/>
    <home-activity class="home__sec home__activity--fixed"
                   :class="{'home__activity--hide': !isActivityShadowShow}"
                   :bgOffsetY="activityBgOffset"/>
    <home-project class="home__sec home__sec__z2"/>
    <home-media class="home__sec home__sec__z2"/>
    <home-join class="home__sec home__sec__z2"/>
  </div>
</template>

<script>

import HomeSlogan from './components/HomeSlogan'
import HomeIntro from './components/HomeIntro'
import HomeActivity from './components/HomeActivity'
import HomeProject from './components/HomeProject'
import HomeMedia from './components/HomeMedia'
import HomeJoin from './components/HomeJoin'
import { throttle } from 'lodash'
export default {
  name: 'Home',
  components: { HomeJoin, HomeMedia, HomeProject, HomeActivity, HomeIntro, HomeSlogan },
  data () {
    return {
      isActivityShadowShow: false,
      activityBgOffset: 0
    }
  },
  created () {
    document.addEventListener('scroll', this.scrollEvent, false)
  },
  destroyed () {
    document.removeEventListener('scroll', this.scrollEvent, false)
  },
  methods: {
    throttleScrollEvent () {
      throttle(this.scrollEvent, 50)()
    },
    scrollEvent () {
      const wHeight = document.documentElement.clientHeight
      const { bottom } = document.getElementById('activity').getBoundingClientRect()
      if (bottom <= wHeight) {
        this.isActivityShadowShow = true
      } else {
        this.isActivityShadowShow = false
      }
    },
    handleBgOffsetYChange (offset) {
      this.activityBgOffset = offset
    }
  }
}
</script>

<style scoped lang="less">
  .home {
    &__sec {
      position: relative;
      &__slogan {
        position: fixed;
        top: 50px;
        left: 0;
        width: 100%;
        z-index: 0;
      }
    }

    &__activity {
      &--fixed {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        min-width: 900px;
      }
      &--hide {
        display: none;
      }
    }
    &__sec {
      &__z2 {
        z-index: 2;
      }
    }
  }
</style>

<style lang="less">
  footer {
    position: relative;
    z-index: 2;
  }
</style>
