<template>
    <div class="reg">
      <div class="reg__content">
        <div class="reg__img">
          <img src="@/assets/images/Login/bg.png"/>
        </div>
        <div class="reg__form">
          <el-form>
            <yth-button></yth-button>
            <el-form-item>
              <el-input placeholder="邀请码"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="less">
  .reg {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #fff;
    &__content {
      display: flex;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
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
