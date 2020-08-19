<template>
  <div class="home__slogan">
    <img src="@/assets/images/logo 2.png"/>
    <p class="home__slogan__cn">探索生活的更多可能性</p>
    <p class="home__slogan__en">706 Youth Space, exploring for more possibility of life.</p>
    <div class="home__slogan__medias">
      <i class="icon fa fa-wechat"></i>
      <i class="icon fa fa-facebook-square"></i>
      <i class="icon fa fa-github"></i>
      <i class="icon fa fa-youtube-play"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSlogan.vue',
  created () {
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
  .home__slogan {
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: 617px;
    border-top: 5px solid #0B800B;
    background: no-repeat url("~@/assets/images/Home/sec-01.png") center / cover;
    color: #fff;
    text-align: center;
    z-index: -1;
    img {
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
      justify-content: center;
      .icon {
        display: block;
        font-size: 29px;

        &:nth-child(n+2) {
          margin-left: 29px;
        }
      }
    }
  }
</style>
