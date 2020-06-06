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
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Home',
    computed: {
      ...mapState([
        'device'
      ])
    },

  }
</script>

<style scoped lang="less">
  @father: home;
  .home {
    &__section-01 {
      position: relative;
      height: 538px;
      box-sizing: border-box;
      overflow: hidden;

      .@{father}.mobile & {
        height: 349px;
      }

      &__bg {
        position: absolute;
        top: 0;
        right: -5%;
        height: 100%;

        .@{father}.mobile & {
          top: -5%;
          width: 87%;
          height: auto;
        }
      }

      &__content {
        position: absolute;
        left: 100px;
        bottom: 149px;
        width: 323px;

        .@{father}.mobile & {
          width: 100%;
          left: 0;
          bottom: 16px;
          box-sizing: border-box;
          padding: 0 42px;
        }
      }

      &__title {
        margin-bottom: 5px;
        font-size: 30px;
        line-height: 40px;
        font-weight: normal;

        .@{father}.mobile & {
          font-size: 18px;
          line-height: 24px;
        }
      }

      &__paragraph {
        color: rgba(80, 95, 152, 1);
        font-size: 11px;
        line-height: 18px;

        .@{father}.mobile & {
          width: 207px;
          font-size: 8px;
          line-height: 10px;
        }
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

        .@{father}.mobile & {
          display: block;
          margin: 27px auto 0 auto;
        }
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

        .@{father}.mobile & {
          flex: 0 0 100%;
          margin-left: 0;
          margin-bottom: 3%;
        }

        &:nth-child(2n+1) {
          margin-left: 0%;
          margin-right: 0.5%;

          .@{father}.mobile & {
            margin-right: 0.5%;
          }
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
  }
</style>
