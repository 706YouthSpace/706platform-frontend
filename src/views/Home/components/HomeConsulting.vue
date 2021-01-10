<template>
  <div class="home__project" id="">
    <div class="home__project__content">
      <p class="home__project__title">付费咨询</p>
      <div class="home__project__list">
        <div class="project">
          <p class="project__title">线上社区</p>
          <p class="project__intro">706青年空间的微型城市</p>
          <p class="project__detail">
            1913，博格丹诺夫作为列宁的党内同志和对手，出版了《组织构造学：一种通用的组织科学》，这本书直接影响了美国维纳撰写《控制论》。<br/>
            1960年，《控制论》风靡美国，乔布斯当时也是小粉丝，当中国青年在相应号召上山下乡之际，美国青年人真忙着在大城市还有农村建立各种公社……
          </p>
          <p class="project__more" @click="showPayQrCode">支付￥20查看完整内容</p>
        </div>
        <div class="project">
          <p class="project__title">青年空间旗舰店</p>
          <p class="project__intro">706青年空间的新商业空间</p>
          <p class="project__detail">
            在移动互联网时代，随着话语权从几个固定的网站转移到无数分散的APP和小众文化平台，随着虚拟社交已经变成无数个小圈子的分层模式，对应的城市实体空间，也必然受到挑战。年轻人再也不喜欢去大商场了，那种光鲜亮丽的时尚服装，富丽堂皇的购物中心，琳琅满目的商品，那些庞然大物，这些和年轻人有什么关系呢……
          </p>
          <p class="project__more" @click="showPayQrCode">支付￥20查看完整内容</p>
        </div>
        <div class="project">
          <p class="project__title">生活实验室</p>
          <p class="project__intro">706青年空间的共享社区</p>
          <p class="project__detail">
            显而易见是，今后10年，整个世界的年轻人对未来的工作方式，生活方式，以及社交模式的认知，都在改变，相应的，我们需要去符合这种社会趋势，创造出符合相应底层逻辑的产品，来满足这种社会需求……
          </p>
          <p class="project__more" @click="showPayQrCode">支付￥20查看完整内容</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeConsulting',
  methods: {
    showPayQrCode () {
      this.$emit('showPayQrCode')
    }
  }
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
