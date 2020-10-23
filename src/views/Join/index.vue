<template>
  <div class="join">
    <h2 class="join__title">关于我们</h2>
    <img class="join__img join__img--us" src="@/assets/images/Join/join.jpg"/>
    <h2 class="join__title">加入我们</h2>
    <div class="join__join-us">
      <div class="joint-us__collection">
        <p>1. 向小管家转9.9元</p>
        <img class="join-us__collection-img" src="@/assets/images/Join/collection_code.jpg"/>
      </div>
      <div class="joint-us__qr">
        <p>2. 将转账截图发给小管家即可入群</p>
        <img class="join-us__collection-img" src="@/assets/images/Join/qr_code.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join'
}
</script>

<style lang="less">
.join {
  margin: 0 auto;
  background: #fff;
  max-width: 1440px;
  &__title {
    position: relative;
    height: 90px;
    line-height: 90px;
    text-align: center;
    font-size: 35px;
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
    &:nth-child(n+2) {
      margin-top: 20px;
    }
  }

  &__join-us {
    display: flex;
    & > div {
      flex: 1 1;
      padding: 40px 20px;
      p {
        font-size: 17px;
        margin-bottom: 20px;
      }
      img {
        display: block;
        margin: 0 auto;
        width: 70%;
      }
    }
  }
  &__img--us {
    width: 100%;
  }
}
</style>
