<template>
  <div class="home__activity">
    <div class="home__activity__title">
      文化&活动
    </div>
    <div class="home__activity__text">
      成立九年以来，我们开创了几十种活动类型，举办了超过3000场活动。 钱理群、秦晖、罗振宇、许知远、黄西等许多知名人士曾来到这里，和大家近距离交流。
    </div>
    <div class="home__activity__brand" ref="activityBrand">
      <div class="brand__left">
        <div class="brand__left__bg" :style="{height: `${offsetLimit+100}%`,top: `-${bgOffsetY}%`}">
          <img src="@/assets/images/Home/activity-48hours.png">
        </div>
        <div class="brand__cover">
          <div class="brand__content">
            <p class="brand__title">48小时生活实验室</p>
            <p class="brand__text">48小时生活实验室是推出的生活方式探索项目</p>
            <p class="brand__text">每期活动我们邀请一群志同道合的年轻人，在一个实体空间共同生活48个小时</p>
            <p class="brand__text">期间，我们将共同完成一次关于生活的实验或创作</p>
            <p class="brand__text">让年轻人，打破原有生活环境的局限，突破互联网虚拟社交的屏障</p>
            <p class="brand__text">聚集在一起共同探索生活的各种可能性</p>
          </div>
        </div>
      </div>
      <div class="brand__right brand__list">
        <div class="brand__list__title">
          品牌活动
        </div>
        <div class="brand__list__content">
          <div class="brand__list__item">48小时生活实验室</div>
          <div class="brand__list__item">706文化沙龙</div>
          <div class="brand__list__item">706社会青年派对</div>
          <div class="brand__list__item">706麻圆微沙龙</div>
          <div class="brand__list__item">706破格电影沙龙</div>
          <div class="brand__list__item">706小黑屋放映</div>
          <div class="brand__list__item">706生活大爆炸 </div>
          <div class="brand__list__item">706给我三分钟</div>
          <div class="brand__list__item">苏格拉底式对话</div>
          <div class="brand__list__item">政治哲学读书会</div>
          <div class="brand__list__item">706客厅对话</div>
          <div class="brand__list__item">706共学小组</div>
          <div class="brand__list__item">706写作工作坊</div>
          <div class="brand__list__item">706漫游计划</div>
          <div class="brand__list__item">706独立出版展</div>
          <div class="brand__list__item">706新空间主义</div>
          <div class="brand__list__item">深夜食堂</div>
        </div>
        <div class="brand__list__more">了解更多</div>
      </div>
    </div>
    <div class="home__activity__list">
      <div class="activity activity__item">
        <div class="activity__content">
          <div class="activity__cover">
            <div class="activity__cover__content">
              <p class="activity__title">
                活动标题
              </p>
              <p class="activity__time">
                时间：7月5日 19:00 (即将进行)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="activity activity__item">
        <div class="activity__content">
          <div class="activity__cover">
            <div class="activity__cover__content">
              <p class="activity__title">
                活动标题
              </p>
              <p class="activity__time">
                时间：7月5日 19:00 (即将进行)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="activity activity__item">
        <div class="activity__content">
          <div class="activity__cover">
            <div class="activity__cover__content">
              <p class="activity__title">
                活动标题
              </p>
              <p class="activity__time">
                时间：7月5日 19:00 (即将进行)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="activity activity__item">
        <div class="activity__content">
          <div class="activity__cover">
            <div class="activity__cover__content">
              <p class="activity__title">
                活动标题
              </p>
              <p class="activity__time">
                时间：7月5日 19:00 (即将进行)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash'

export default {
  name: 'HomeActivity',
  props: {
    bgOffsetY: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      offsetLimit: 50
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
      throttle(this.scrollEvent, 50)()
    },
    scrollEvent () {
      const activeArea = 500
      const { top, bottom } = this.$refs.activityBrand.getBoundingClientRect()
      if (bottom < 0 || top > activeArea) {
        return
      }
      this.$emit('bgOffsetYChange', Math.floor((activeArea - top) * this.offsetLimit / (bottom - top + activeArea)))
    }
  }
}
</script>

<style scoped lang="less">
  @import ~"@/assets/style/variables";

  .home__activity {
    padding-top: 33px;
    background: #F3F7F9;

    &__title {
      position: relative;
      height: 118px;
      line-height: 118px;
      text-align: center;
      font-size: @--font-size-ex-large;
      font-weight: bold;
      color: #000;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 110px;
        height: 8px;
        background: #0B800B;
      }
    }
    &__text {
      width: 537px;
      line-height: 20px;
      margin: 45px auto 0 auto;
      text-align: center;
    }
    &__brand {
      display: flex;
      max-width: 1920px;
      height: 600px;
      margin: 52px auto 0 auto;
      color: #fff;
      .brand {
        &__left {
          position: relative;
          flex: 1 1;
          overflow: hidden;
          &__bg {
            position: absolute;
            left: 0;
            width: 100%;
            transition: all .1s;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
        &__cover {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 205px;
          background: linear-gradient(0deg,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 100%);;
        }
        &__content {
          position: absolute;
          left: 13px;
          bottom: 20px;
        }
        &__title {
          font-size: 18px;
          line-height: 20px;
          margin-bottom: 13px;
        }
        &__text {
          font-size: @--font-size-small;
          line-height: 20px;
          color: #E1E1E1;
        }
        &__right {
          flex: 0 0 408px;
          box-sizing: border-box;
          padding: 0 34px;
          background: #556A55;
        }
        &__list {
          &__title {
            position: relative;
            width: 250px;
            height: 70px;
            margin-top: 1px;
            line-height: 70px;
            font-size: 20px;
            box-sizing: border-box;
            border-bottom: 1px solid #fff;
            &::after {
              content: '';
              position: absolute;
              left: 0;
              bottom: 0;
              width: 92px;
              height: 7px;
              background: #fff;
            }
          }
          &__content {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 350px;
            margin-top: 24px;
          }
          &__item {
            width: 125px;
            padding: 10px 0;
            font-size: @--font-size-base;
            line-height: 13px;
            text-decoration: underline;
            cursor: pointer;
          }
          &__more {
            width: 115px;
            height: 36px;
            margin: 32px 0 0 151px;
            line-height: 36px;
            border: 1px solid #fff;
            font-size: 12px;
            text-align: center;
            cursor: pointer;
          }
        }
      }
    }
    &__list {
      display: flex;
      max-width: 1920px;
      margin: 0 auto;
      padding: 12px 0;
      .activity {
        flex: 1 1 25%;
        &:nth-child(n+2) {
          margin-left: 11px;
        }
        &__content {
          position: relative;
          background: #ccc;
          overflow: hidden;
          &::before {
            content: '';
            display: block;
            padding-top: 72%;
          }
        }
        &__cover {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 68px;
          background: linear-gradient(0deg,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 100%);
          color: #fff;

          &__content {
            position: absolute;
            bottom: 11px;
            left: 13px;
          }
        }
        &__title {
          font-size: 16px;
          line-height: 20px;
        }
        &__time {
          margin-top: 10px;
          font-size: @--font-size-base;
          line-height: 20px;
          color: #E0E0E0;
        }
      }
    }
  }
</style>
