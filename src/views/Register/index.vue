<template>
    <div class="reg">
      <div class="reg__content">
        <div class="reg__img">
          <img src="@/assets/images/Login/bg.png"/>
        </div>
        <div class="reg__form">
          <yth-input v-model="form.inviteCode" class="reg__form-item" placeholder="邀请码">
            <span slot="suffix">
              <span>如何获取</span><i class="fa fa-question-circle reg__form-icon"></i>
            </span>
          </yth-input>
          <div class="reg__form-item reg__form-item--name">
            <yth-input v-model="form.lastName" class="form-item__last-name" placeholder="*姓">
            </yth-input>
            <yth-input v-model="form.firsetName"  class="form-item__first-name" placeholder="*名">
            </yth-input>
          </div>
          <yth-input v-model="form.phone" class="reg__form-item" placeholder="*手机">
          </yth-input>
          <yth-input v-model="form.verifyCode" class="reg__form-item" placeholder="*短信验证码">
          </yth-input>
          <yth-input v-model="form.password" type="password" class="reg__form-item" placeholder="*密码">
          </yth-input>
          <el-button class="reg__form-item reg__form-item--submit" type="success">注册</el-button>
          <a class="reg__form__link" href="/login">已注册，点此登录</a>
          <ul class="reg__form__err-list">
            <li>邀请码有效名额已用完</li>
            <li>验证码错误</li>
            <li>手机号格式错误</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      form: {
        inviteCode: '',
        lastName: '',
        firstName: '',
        phone: '',
        verifyCode: '',
        password: ''
      }
    }
  }
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

      &-icon {
        margin-left: 5px;
        font-size: 15px;
      }

      &-item {
        margin-top: 10px;

        &--name {
          display: flex;
        }

        &--submit {
          width: 100%;
        }

        .form-item {
          &__last-name, &__first-name {
            flex: 1 1 auto;
          }

          &__first-name {
            margin-left: 15px;
          }
        }
      }

      &__link {
        display: block;
        margin-top: 10px;
        color: #7d7d7d;
        text-decoration: underline;
        font-size: 12px;
      }

      &__err-list {
        text-align: center;
        li {
          margin-top: 10px;
          height: 40px;
          line-height: 40px;
          background: #ffd0d0;
          border-radius: 4px;
          color: #2e2e2e;
        }
      }
    }
  }
</style>
