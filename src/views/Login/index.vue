<template>
  <div class="login">
    <div class="login__content">
      <div class="login__img">
        <img src="@/assets/images/Login/bg.png" />
        <div class="login__img__cover">
          <p class="login__img__cover__title">成为我们的一部分</p>
          <p>与这个时代</p>
          <p>最具活力的青年人</p>
          <p>一起，</p>
          <p>改变生活，</p>
          <p>改变世界。</p>
        </div>
      </div>
      <div class="login__form">
        <h2 class="login__title">加入706青年空间</h2>
        <div class="login__form__tabs tab-list">
          <div class="tab-item"
               :class="{'tab-item--active': isVerifyLogin}"
               @click="changeLoginType('verify')">
            短信验证码登录
          </div>
          <div class="tab-item"
               :class="{'tab-item--active': isPwdLogin}"
               @click="changeLoginType('pwd')">
            邮箱密码登录
          </div>
        </div>
        <div v-if="isVerifyLogin"
             class="tab-panel"
             key="verify">
          <yth-input v-model="verifyForm.phone"
                     class="login__form-item"
                     placeholder="*手机">
          </yth-input>
          <yth-input v-model="verifyForm.code"
                     class="login__form-item"
                     placeholder="*短信验证码">
            <span slot="suffix">
              <span class="login__form__code"
                    @click="sendCode">点击获取</span>
            </span>
          </yth-input>
        </div>
        <div v-else-if="isPwdLogin"
             class="tab-panel"
             key="pwd">
          <yth-input v-model="pwdForm.email"
                     class="login__form-item"
                     placeholder="*邮箱">
          </yth-input>
          <yth-input v-model="pwdForm.pwd"
                     type="password"
                     class="login__form-item"
                     placeholder="*密码">
          </yth-input>
        </div>
        <el-button class="login__form-item login__form-item--submit"
                   type="success"
                   @click="handleSubmit">
          注册
        </el-button>
        <ul class="login__form__err-list"
            v-if="errors && errors.length">
          <li v-for="(error, index) in errors"
              :key="index">
            {{error}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import validate from 'validate.js'

export default {
  name: 'index',
  data () {
    return {
      loginType: 'verify',
      verifyForm: {
        phone: '',
        code: ''
      },
      pwdForm: {
        email: '',
        pwd: ''
      },
      errors: []
    }
  },
  computed: {
    isVerifyLogin () {
      return this.loginType === 'verify'
    },
    isPwdLogin () {
      return this.loginType === 'pwd'
    }
  },
  methods: {
    changeLoginType (type = 'verify') {
      this.loginType = type
    },
    handleSubmit () {
      let constraints = {}
      let form = {}
      if (this.isVerifyLogin) {
        form = this.verifyForm
        constraints = {
          phone: {
            length: {
              minimium: 1,
              tooShort: '^电话号码不能为空'
            },
            format: {
              pattern: /^[1]([3-9])[0-9]{9}$/,
              message: '^电话号码格式错误'
            }
          },
          code: {
            length: {
              minimum: 4,
              tooShort: '^验证码格式有误'
            }
          }
        }
      } else if (this.isPwdLogin) {
        form = this.pwdForm
        constraints = {
          email: {
            length: {
              minimium: 1,
              tooShort: '^邮箱不能为空'
            },
            email: {
              message: '^邮箱格式有误'
            }
          },
          pwd: {
            length: {
              minimum: 4,
              tooShort: '^密码不能少于四位'
            }
          }
        }
      }
      this.errors = validate(form, constraints, { format: 'flat' })
      return this.errors
    }
  }
}
</script>

<style scoped lang="less">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #fff;
  &__title {
    font-size: 32px;
    text-align: center;
  }
  &__content {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  &__img {
    position: relative;
    flex: 1 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &__cover {
      position: absolute;
      top: 0;
      left: 0;

      &__title {
        margin-bottom: 32px;
        font-weight: bold;
      }

      p {
        font-size: 16px;
        color: #7d7d7d;
      }
    }
  }
  &__form {
    flex: 0 0 434px;
    padding: 40px 20px;

    &__tabs {
      display: flex;
    }

    .tab {
      &-list {
        margin: 30px 0 27px 0;
        color: #242424;
      }
      &-item {
        margin-right: 29px;
        padding: 0 5px;
        border-bottom: 4px solid transparent;
        cursor: pointer;
        &--active {
          border-color: #0b800b;
        }
      }
    }

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
        &__last-name,
        &__first-name {
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
