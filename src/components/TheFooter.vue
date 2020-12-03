<template>
  <footer class="footer">
    <!-- <div class="footer__list">
      <div class="item col-3">
        <p class="item__title">
          官方团队
        </p>
        <div class="item__list">
          <p class="name">706行政</p>
          <p class="name">706同学社</p>
          <p class="name">706线上沙龙</p>
          <p class="name">706上海</p>
          <p class="name">706深圳</p>
          <p class="name">706系统开发</p>
          <p class="name">706成都</p>
          <p class="name">706广州</p>
        </div>
      </div>
      <div class="item col-2">
        <p class="item__title">
          合作伙伴
        </p>
        <div class="item__list">
          <p class="name">知乎</p>
          <p class="name">Bilibili</p>
          <p class="name">微师</p>
          <p class="name">Someet</p>
          <p class="name">喜马拉雅</p>
          <p class="name">围炉</p>
        </div>
      </div>
      <div class="item col-1">
        <p class="item__title">
          服务与支持
        </p>
        <div class="item__list">
          <p class="name">联系我们</p>
          <p class="name">商务合作</p>
          <p class="name">获得帮助</p>
        </div>
      </div>
    </div> -->
    <div class="footer__copyright">
      <p>柒零六文化传播（北京）有限公司 版权所有 Copyright 2012-2020 All Rights Reserved</p>
      <p>京ICP证03157号｜京ICP备11043884号｜京公网安备110105023734号</p>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheFooter',
  computed: {
    ...mapState([
      'device'
    ])
  }
}
</script>

<style scoped lang="less">
  .footer {
    padding: 20px 0 40px 0;
    // padding-bottom: 14px;
    border-top: 6px solid #0B800B;
    background: #333333;

    &__content {
      max-width: 1200px;
    }

    &__list {
      display: flex;
      width: 757px;
      padding: 0 32px;
      box-sizing: border-box;
      margin: 0 auto;
      font-size: 12px;
      line-height: 17px;
      color: #D7D7D7;
      .col-1 {
        flex: 1 1;
      }
      .col-2 {
        flex: 2 1;
      }
      .col-3 {
        flex: 3 1;
      }
      .item {
        padding: 0 32px;
        &__title {
          margin-bottom: 6px;
          padding: 15px 0 9px 5px;
          font-size: 13px;
          border-bottom: 1px solid #fff;
        }
        &__list {
          display: flex;
          flex-wrap: wrap;
          .name {
            width: 77px;
            padding-left: 5px;
            height: 18px;
            line-height: 18px;
          }
        }
      }
    }

    &__copyright {
      margin-top: 17px;
      font-size: 10px;
      line-height: 17px;
      text-align: center;
      color: #6B6B6B;
    }
  }
</style>
