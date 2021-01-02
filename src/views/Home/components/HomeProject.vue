<template>
  <div class="home__project">
    <div class="home__project__content">
      <p class="home__project__title">事业&amp;项目</p>
      <div class="home__project__list">
        <div class="project">
          <p class="project__title">线上社区</p>
          <p class="project__intro">706青年空间的线上社交平台</p>
          <p class="project__detail">
            有时我骑自行车去客户的办公室，有时我步行去MING工作室。根据我当天在哪里工作，我会路过著名的Eisbach河，人们一大早就在那里冲浪(即使是在冬天……嘿嘿)。当我走到办公室时，我穿过Viktualienmarkt食品市场，这里在一天的这个时候相当平静。
          </p>
          <p class="project__more">了解更多</p>
        </div>
        <div class="project">
          <p class="project__title">青年空间旗舰店</p>
          <p class="project__intro">706青年空间的线上社交平台</p>
          <p class="project__detail">
            有时我骑自行车去客户的办公室，有时我步行去MING工作室。根据我当天在哪里工作，我会路过著名的Eisbach河，人们一大早就在那里冲浪(即使是在冬天……嘿嘿)。当我走到办公室时，我穿过Viktualienmarkt食品市场，这里在一天的这个时候相当平静。
          </p>
          <p class="project__more">了解更多</p>
        </div>
        <div class="project">
          <p class="project__title">生活实验室</p>
          <p class="project__intro">706青年空间的线上社交平台</p>
          <p class="project__detail">
            有时我骑自行车去客户的办公室，有时我步行去MING工作室。根据我当天在哪里工作，我会路过著名的Eisbach河，人们一大早就在那里冲浪(即使是在冬天……嘿嘿)。当我走到办公室时，我穿过Viktualienmarkt食品市场，这里在一天的这个时候相当平静。
          </p>
          <p class="project__more">了解更多</p>
        </div>
        <div class="project">
          <p class="project__title">虚拟城市</p>
          <p class="project__intro">706青年空间的线上社交平台</p>
          <p class="project__detail">
            有时我骑自行车去客户的办公室，有时我步行去MING工作室。根据我当天在哪里工作，我会路过著名的Eisbach河，人们一大早就在那里冲浪(即使是在冬天……嘿嘿)。当我走到办公室时，我穿过Viktualienmarkt食品市场，这里在一天的这个时候相当平静。
          </p>
          <p class="project__more">了解更多</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeProject'
}
</script>

<style scoped lang="less">
  @import ~"@/assets/style/variables";

  .home__project {
    background: #F3F7F9;

    &__content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 47px 0px 168px 0px;
    }

    &__title {
      position: relative;
      height: 120px;
      line-height: 120px;
      font-size:  @--font-size-ex-large;
      font-weight: bold;
      text-align: center;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 87px;
        height: 8px;
        background: #0B800B;
        transform: translateX(-50%);
      }
    }

    &__list {
      display: flex;
      margin-top: 96px;

      .project {
        flex: 1 1;
        margin: 0 4.5px;
        padding: 23px 23px 43px 23px;
        background: #E7E8EC;

        &__title {
          position: relative;
          font-size: 24px;
          font-weight: bold;
          height: 43px;
          text-align: center;

          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 141px;
            height: 1px;
            background: #0B800B;
          }
        }

        &__intro {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 116px;
          color: #555555;
          line-height: 20px;
        }

        &__detail {
          height: 212px;
          line-height: 20px;
          color: #242424;
          text-align: justify;
        }

        &__more {
          line-height: 20px;
          color: #027DB4;
          text-align: center;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
</style>
