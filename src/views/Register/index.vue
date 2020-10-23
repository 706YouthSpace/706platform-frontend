<template>
    <div class="login">
      <div class="login__img">
        <img src="@/assets/images/Login/bg.png"/>
      </div>
      <div class="login__form"></div>
    </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="less">
  .login {
    display: flex;
    align-items: flex-start;
    max-width: 1200px;
    min-height: 100vh;
    background: #fff;
    &__img {
      flex: 1 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &__form {
      flex: 0 0 434px;
    }
  }
</style>
