<template>
  <div class="home">
    <home-slogan class="home__sec home__sec__slogan"/>
    <home-intro id="intro" class="home__sec"/>
    <!-- <home-activity id="activity"
                   class="home__sec"
                   @bgOffsetYChange="handleBgOffsetYChange"
                   :bgOffsetY="activityBgOffset"/> -->
    <!-- <home-activity class="home__sec home__activity--fixed"
                   :class="{'home__activity--hide': !isActivityShadowShow}"
                   :bgOffsetY="activityBgOffset"/> -->
    <home-media id="media" class="home__sec home__sec__media home__sec__z2"/>
    <!-- <home-project class="home__sec home__sec__z2"/> -->
    <home-consulting id="consulting" class="home__sec home__sec__z2" @showPayQrCode="showPayQrCode"/>
    <!-- <home-join class="home__sec home__sec__z2"/> -->
    <home-pay id="join" class="home__sec home__sec__z2" @showPayQrCode="showPayQrCode"/>
    <el-dialog
      width="300px"
      title="请微信扫码支付"
      :append-to-body="true"
      :visible.sync="payQrCodeShow">
      <img style="width: 100%" src="@/assets/images/Join/collection_code.jpeg"/>
    </el-dialog>
  </div>
</template>

<script>

import HomeSlogan from './components/HomeSlogan'
import HomeIntro from './components/HomeIntro'
// import HomeActivity from './components/HomeActivity'
// import HomeProject from './components/HomeProject'
import HomeMedia from './components/HomeMedia'
// import HomeJoin from './components/HomeJoin'
import HomePay from './components/HomePay'
import { throttle } from 'lodash'
import HomeConsulting from './components/HomeConsulting.vue'
export default {
  name: 'Home',
  components: {
    HomePay,
    // HomeJoin,
    HomeMedia,
    // HomeProject,
    // HomeActivity,
    HomeIntro,
    HomeConsulting,
    HomeSlogan
  },
  data () {
    return {
      isActivityShadowShow: false,
      activityBgOffset: 0,
      payQrCodeShow: false
    }
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
    },
    showPayQrCode () {
      console.log('aaa')
      this.payQrCodeShow = true
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
        top: 89px;
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

      &__media {
        box-shadow: -5px 0 100px 0 rgba(0, 0, 0, .3);
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
