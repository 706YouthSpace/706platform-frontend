<template>
  <div class="home__media">
    <div class="home__media__content">
      <div class="home__media__official">
        <div class="home__media__left">
          <p class="home__media__title">影响力</p>
          <p class="home__media__para">从2012年到2019年，在706青年空间的影响和推广下，全国建立了大大小小各种形式的青年空间30多家，覆盖上海，广州，南京，重庆，杭州，青岛等10多个城市的大学集中的区域。</p>
          <p class="home__media__para">至2016年，706青年空间就已经成为国内外最知名的青年社区之一，先后被纽约时报、NHK、新华社、中国新闻周刊、第一财经周刊、中国青年报、欧洲时报、网易新闻、腾讯教育等国内外媒体深入报道。</p>
          <div class="home__media__links">
            <p class="link"><a href="https://cn.nytimes.com/culture/20160630/706-youth-space/" target="_blank">《北京青年玩自治》</a>——纽约时报</p>
            <p class="link"><a href="http://zqb.cyol.com/html/2016-08/31/nw.D110000zgqnb_20160831_1-12.htm" target="_blank">《青春实验室》</a>——中国青年报/新浪新闻/搜狐网</p>
            <p class="link"><a href="http://www.xinhuanet.com/politics/2015-08/21/c_1116329606.htm" target="_blank">《文化交流“最后一公里”上的探路者》</a>——新华网/人民网/环球网/亚太日报</p>
            <p class="link"><a href="http://xinhua-rss.zhongguowangshi.com/232/-6031091697338706471/1290907.html" target="_blank">《706青年空间 青年的逐梦地》</a>——新华社/网易新闻</p>
          </div>
        </div>
        <div class="home__media__right">
          <img src="@/assets/images/Home/map.png"/>
        </div>
      </div>
      <div class="home__media__message">
        <div class="message">
          <p class="message__content">“一直觉得706就像漂浮在北京那片让我迷茫的混乱海洋中的孤舟，是因为有那里，北京才是可以暂时忍耐的。在终于安定于泉州之前，706曾是唯一能让我安心退避的角落。无法想象如果没有这样一个地方，我要如何应对种种现实冲击下那段动荡的生活。”</p>
          <p class="message__sign">——佚名</p>
        </div>
        <div class="message">
          <p class="message__content">“706是探索人和人的关系，探索新的集体模式，新的生活共同体，社会凝聚，一个友爱的城邦，每个人愿意为之付出的共同体。”</p>
          <p class="message__sign">——佚名</p>
        </div>
        <div class="message">
          <p class="message__content">“706推崇公开的探讨，我们经常在706客厅遇到陌生人就随意聊起来，谁路过都可以加入，你永远不知道哪个路过的朋友可能给你多少点子，你也不知道你习以为常的只言片语可能给别人多大启发。”</p>
          <p class="message__sign">——佚名</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMedia'
}
</script>

<style scoped lang="less">
  @import ~"@/assets/style/variables";

  .home__media {
    background: #FFFFFF;
    &__content {
      max-width: 1200px;
      margin: 0 auto;
    }

    &__official {
      display: flex;
      padding: 68px 119px 111px 148px;
      align-items: center;
    }
    &__left {
      flex: 1 1 502px;
      color: #000;
    }
    &__title {
      position: relative;
      height: 82px;
      font-size: @--font-size-ex-large;
      font-weight: bold;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 92px;
        height: 8px;
        background: #0B800B;
      }
    }
    &__para {
      margin-top: 45px;
      line-height: 20px;
    }
    &__links {
      margin-top: 30px;
      line-height: 20px;
      a {
        color: #027DB4;
      }
    }
    &__right {
      margin-left: 20px;
      flex: 1 1 431px;
      img {
        margin-top: 20px;
        width: 100%;
      }
    }
    &__message {
      display: flex;
      padding: 0px 148px 111px 151px;

      .message {
        position: relative;
        min-height: 128px;
        flex: 1 1 323px;
        padding: 0 63px 0 14px;
        color: #555;
        line-height: 20px;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          height: 114px;
          background: #0B800B;
        }

        &__sign {
          margin-top: 20px;
          text-align: right;
        }
      }
    }
  }
</style>
