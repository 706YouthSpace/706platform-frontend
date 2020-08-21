<template>
  <div class="home__slogan" ref="homeSlogan">
    <div class="home__slogan__content" :class="{'home__slogan__content--hide': !show}">
      <img class="home__slogan__logo" src="@/assets/images/logo 2.png"/>
      <p class="home__slogan__cn">探索生活的更多可能性</p>
      <p class="home__slogan__en">706 Youth Space, exploring for more possibility of life.</p>
      <div class="home__slogan__medias">
        <a class="icon" href="" target="_blank">
          <i class="icon fa fa-wechat"></i>
        </a>
        <a class="icon" href="https://www.facebook.com/706youthspace/" target="_blank">
          <i class="icon fa fa-facebook-square"></i>
        </a>
        <a class="icon" href="https://github.com/706YouthSpace/706platform/wiki" target="_blank">
          <i class="icon fa fa-github"></i>
        </a>
        <a class="icon" href="https://www.youtube.com/channel/UCh46gXizovivMGx51FZAPOA" target="_blank">
          <i class="icon fa fa-youtube-play"></i>
        </a>
        <a class="icon" href="https://space.bilibili.com/515022244" target="_blank">
          <img src="@/assets/images/Home/slogan-bilibili.png"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash'
export default {
  name: 'HomeSlogan',
  data () {
    return {
      show: true
    }
  },
  created () {
    document.addEventListener('scroll', this.throttleScrollEvent, false)
  },
  destroyed () {
    document.removeEventListener('scroll', this.throttleScrollEvent, false)
  },
  methods: {
    throttleScrollEvent () {
      throttle(this.scrollEvent, 100)()
    },
    scrollEvent () {
      const { height } = this.$refs.homeSlogan.getBoundingClientRect()
      const top = document.documentElement.scrollTop
      const limit = height / 4
      if (top >= limit && this.show) {
        this.show = false
        return
      }
      if (top < limit) {
        this.show = true
      }
    }
  }
}
</script>

<style scoped lang="less">
  .home__slogan {
    height: 617px;
    border-top: 5px solid #0B800B;
    background: no-repeat url("~@/assets/images/Home/sec-01.png") center / cover;
    color: #fff;
    text-align: center;

    &__content {
      transition: all ease-in-out .4s;

      &--hide {
        opacity: 0;
        transform: translateY(-10%);
      }
    }
    &__logo {
      display: block;
      width: 130px;
      height: 85px;
      margin: 128px auto 0 auto;
    }

    &__cn {
      margin-top: 12px;
      font-size: 38px;
      line-height: 40px;
      font-weight: bold;
    }

    &__en {
      margin-top: 10px;
      font-size: 15px;
      line-height: 17px;
    }

    &__medias {
      display: flex;
      margin-top: 25px;
      align-items: center;
      justify-content: center;
      .icon {
        display: block;
        font-size: 29px;

        &:nth-child(n+2) {
          margin-left: 29px;
        }
        img {
          display: block;
          width: 33px;
          height: 33px;
        }
      }
    }
  }
</style>
