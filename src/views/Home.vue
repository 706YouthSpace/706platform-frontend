<template>
  <div class="home" :class="{mobile: device==='mobile'}">
    <div class="home__section-01">
      <img class="home__section-01__bg" src="@/assets/images/background.png"/>
      <div class="home__section-01__content">
        <h2 class="home__section-01__title">706<br>青年空间</h2>
        <p class="home__section-01__paragraph">这一个“全方位”的开放平台。
          “青年空间”首先需要满足年轻人从低到高的精神需求。从提供开放交流公共空间，到提供住宿服务，再到凝聚年轻人一种向上的精神和归属感。通过对空间功能更多可能性的探索，让青年人认识自己、改变自己、提升自己</p>
        <button class="home__section-01__btn">Learn More</button>
      </div>
    </div>
    <div class="home__activities">
      <h2 class="home__activities__title">
        活动介绍
      </h2>
      <div class="home__activities__list">
        <div class="home__activities__item">
          <img class="home__activities__item__bg" src="@/assets/images/activities/activity_bg_1.png"/>
          <div class="home__activities__item__cover">
            <div class="home__activities__item__content">
              <p class="home__activities__item__label">Project</p>
              <h3 class="home__activities__item__title">青年空间</h3>
              <p class="home__activities__item__desc">Mt. Merbabu, SurotelMt. Merbabu, SurotelMt. Merbabu, Surotel</p>
            </div>
          </div>
        </div>
        <div class="home__activities__item">
          <img class="home__activities__item__bg" src="@/assets/images/activities/activity_bg_2.png"/>
          <div class="home__activities__item__cover">
            <div class="home__activities__item__wrap">
              <div class="home__activities__item__content">
                <p class="home__activities__item__label">Project</p>
                <h3 class="home__activities__item__title">生活实验室</h3>
                <p class="home__activities__item__desc">Mt. Merbabu, SurotelMt. Merbabu, SurotelMt. Merbabu, Surotel</p>
              </div>
            </div>
          </div>
        </div>
        <div class="home__activities__item">
          <img class="home__activities__item__bg" src="@/assets/images/activities/activity_bg_3.png"/>
          <div class="home__activities__item__cover">
            <div class="home__activities__item__content">
              <p class="home__activities__item__label">Project</p>
              <h3 class="home__activities__item__title">共享客厅</h3>
              <p class="home__activities__item__desc">Mt. Merbabu, SurotelMt. Merbabu, SurotelMt. Merbabu, Surotel</p>
            </div>
          </div>
        </div>
        <div class="home__activities__item">
          <img class="home__activities__item__bg" src="@/assets/images/activities/activity_bg_4.png"/>
          <div class="home__activities__item__cover">
            <div class="home__activities__item__wrap">
              <div class="home__activities__item__content">
                <p class="home__activities__item__label">Project</p>
                <h3 class="home__activities__item__title">城市计划</h3>
                <p class="home__activities__item__desc">Mt. Merbabu, SurotelMt. Merbabu, SurotelMt. Merbabu, Surotel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home__706">
      <h2 class="home__706__title">
        706青年空间
      </h2>
      <div class="home__706__content">
        <div class="home__706__left">
          <div class="home__706__space__wrap">
            <div class="home__706__space__wall"></div>
            <div class="home__706__space__ceil">
              <span class="home__706__space__ceil__left cell">1</span>
              <span class="home__706__space__ceil__right cell">2</span>
            </div>
            <div class="home__706__space__floor">
              <span class="home__706__space__floor__left">
                <span class="home__706__space__floor__left__top cell">3</span>
                <span class="home__706__space__floor__left__bottom cell">4</span>
              </span>
              <span class="home__706__space__floor__right cell">5</span>
            </div>
          </div>
          <p class="home__706__space__tip">鼠标点击不同空间查看详情</p>
        </div>
        <div class="home__706__right">
          <p class="home__706__right__title">1.文化空间</p>
          <p class="home__706__right__tip">文化空间包括图书馆/讲座厅/小剧场/自习室。。。。。。</p>
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
              <div class="home__706__banner">
                <img src="@/assets/images/banner.png"/>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="home__706__banner">
                <img src="@/assets/images/banner.png"/>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="home__706__banner">
                <img src="@/assets/images/banner.png"/>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="home__706__banner">
                <img src="@/assets/images/banner.png"/>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import {mapState} from 'vuex'

  export default {
    name: 'Home',
    components: {
      Swiper,
      SwiperSlide
    },
    computed: {
      ...mapState([
        'device'
      ])
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .home {
    &__section-01 {
      position: relative;
      height: 538px;
      box-sizing: border-box;
      overflow: hidden;

      &__bg {
        position: absolute;
        top: 0;
        right: -5%;
        height: 100%;
      }

      &__content {
        position: absolute;
        left: 100px;
        bottom: 149px;
        width: 323px;
      }

      &__title {
        margin-bottom: 5px;
        font-size: 30px;
        line-height: 40px;
        font-weight: normal;
      }

      &__paragraph {
        color: rgba(80, 95, 152, 1);
        font-size: 11px;
        line-height: 18px;
      }

      &__btn {
        width: 111px;
        margin-top: 42px;
        padding: 3px 0;
        color: #00D88F;
        border: 1.2px solid #00D88F;
        background: transparent;
        outline: none;
        cursor: pointer;
        font-size: 10px;
        line-height: 16px;
      }
    }

    &__activities {
      margin: 40px 5vw;

      &__title {
        margin-bottom: 11px;
        font-size: 12px;
        font-weight: normal;
        line-height: 16px;
        color: #3E3E3E;
      }

      &__list {
        display: flex;
        flex-wrap: wrap;
      }

      &__item {
        position: relative;
        flex: 0 0 49.5%;
        box-sizing: border-box;
        margin-left: 0.5%;
        margin-bottom: 1%;
        border-radius: 4px;
        overflow: hidden;
        cursor: pointer;

        &:nth-child(2n+1) {
          margin-left: 0%;
          margin-right: 0.5%;
        }

        &:hover {
          .home__activities__item__bg {
            transform: scale(1.2);
          }
        }

        &__bg {
          display: block;
          width: 100%;
          transition-duration: 0.5s;
        }

        &__cover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          background: linear-gradient(180deg, rgba(40, 40, 40, 0.15) 0%, rgba(4, 4, 4, 1) 100%);
        }

        &__content {
          position: absolute;
          left: 25px;
          bottom: 22px;
        }

        &__label {
          color: #fff;
          font-size: 8px;
          line-height: 12px;
          margin-bottom: 6px;
        }

        &__title {
          font-size: 18px;
          line-height: 19px;
          color: #9ED10F;
          font-weight: normal;
          margin-bottom: 9px;
        }

        &__desc {
          color: #fff;
          font-size: 6px;
          line-height: 12px;
          width: 150px;
        }
      }
    }

    &__706 {
      margin: 40px 5vw;

      &__title {
        margin-bottom: 11px;
        font-size: 12px;
        font-weight: normal;
        line-height: 16px;
        color: #3E3E3E;
      }

      &__content {
        display: flex;
        background: #F9F9F9;

        & > div {
          flex: 0 0 50%
        }

        & /deep/ .swiper-pagination-bullet {
          width: 4px;
          height: 4px;
          background: #d8d8d8;
          opacity: 1;

          &.swiper-pagination-bullet-active {
            background: #00D88F;
          }
        }

        & /deep/ .swiper-button-prev, & /deep/ .swiper-button-next {
          color: #D8D8D8;

          &::after {
            font-size: 20px;
          }

          &:hover {
            color: #00D88F;
          }
        }
      }

      &__left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 35px 0 27px 0;
      }

      &__space {
        &__wrap {
          position: relative;

          .cell {
            text-align: center;
            background: #82AF5237;
            color: #fff;
            cursor: pointer;
            transition: background .2s;

            &:hover {
              background: #82AF52;
            }
          }
        }

        &__tip {
          margin-top: 20px;
          font-size: 10px;
          color: #7B7B7B;
        }

        &__wall {
          width: 223px;
          height: 123px;
          background: #8DA8B1;
        }

        &__ceil {
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          width: 223px;
          height: 61px;
          background: #BFBFBF67;
          transform: skewX(45deg) translateX(29px);

          & > span {
            position: relative;
            flex: 1 1 50%;
            margin: 10px;
          }

          &__left {

          }
        }

        &__floor {
          display: flex;
          width: 223px;
          height: 61px;
          padding: 10px;
          box-sizing: border-box;
          background: #848484;
          transform: skewX(45deg) translateX(30px);

          &__left {
            flex: 1 1 40%;
            margin-right: 10px;

            display: flex;
            flex-direction: column;

            &__top {
              flex: 1 1 70%;
              margin-bottom: 5px;
            }

            &__bottom {
              flex: 1 1 30%;
            }
          }

          &__right {
            flex: 1 1 60%;
          }
        }
      }

      &__right {
        margin: 20px 0;
        width: 50%;

        &__title {
          font-size: 12px;
        }

        &__tip {
          margin-top: 10px;
          font-size: 10px;
          color: #494949;
        }

        & > div {
          width: 100%;
        }
      }

      &__banner {
        padding: 40px 0;

        img {
          display: block;
          width: 290px;
          height: 146px;
          margin: 0 auto;
        }
      }
    }
  }
</style>
