<template>
  <div class="home__join">
    <div class="home__join__bg"
         ref="joinBg"
         :style="{height: `${offsetLimit+100}%`, top: `-${bgOffsetY}%`}">
      <img src="@/assets/images/Home/join.png"/>
    </div>
    <div class="home__join__content">
      <p class="home__join__title">加入我们</p>
      <p class="home__join__para">与这个时代最具活力的青年人一起，探索生活的更多可能性</p>
      <p class="home__join__para">在众筹平台上支持706青年空间，并成为这项伟大事业的一部分</p>
      <div class="home__join__btn home__join__btn--reg">注册</div>
      <div class="home__join__btn">参与众筹</div>
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash'

export default {
  name: 'HomeJoin',
  data () {
    return {
      offsetLimit: 20,
      bgOffsetY: 0
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
      throttle(this.scrollEvent, 10)()
    },
    scrollEvent () {
      const wHeight = document.documentElement.clientHeight
      const { top, bottom } = this.$refs.joinBg.getBoundingClientRect()
      if (top > wHeight) {
        return
      }
      let yOffset = Math.floor(wHeight - top)
      if (yOffset > bottom - top) {
        yOffset = bottom - top
      }
      this.bgOffsetY = Math.floor(yOffset * this.offsetLimit / (bottom - top))
    }
  }
}
</script>

<style scoped lang="less">
  .home__join {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
    height: 400px;
    overflow: hidden;

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 0;
      transition: all .1s ease-in-out;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__content {
      width: 100%;
      position: relative;
      text-align: center;
      color: #fff;
      z-index: 1;
    }
    &__title {
      margin-bottom: 18px;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
    }
    &__para {
      font-size: 12px;
      line-height: 17px;
      text-align: center;
    }
    &__input {
      width: 250px;
      height: 33px;
      margin-top: 44px;
      padding: 11px;
      box-sizing: border-box;
      font-size: 12px;
      outline: none;
      border: none;
      border-radius: 2px;
      background: rgba(255, 255, 255, .28);
      color: #fff;
      &::placeholder {
        color: rgba(255, 255, 255, .5);;
      }
    }
    &__btn {
      border: 1px solid #fff;
      color: #fff;
      width: 250px;
      height: 33px;
      margin: 12px auto 0 auto;
      line-height: 33px;
      font-size: 12px;
      box-sizing: border-box;
      cursor: pointer;
      &--reg {
        margin-top: 50px;
      }
    }
    &__subscribe {
      height: 27px;
      line-height: 27px;
      font-size: 10px;
      input {
        margin-right: 8px;
        vertical-align: middle;
        border: 1px solid #636363;
        background: none;
        cursor: pointer;
      }
    }
  }
</style>
