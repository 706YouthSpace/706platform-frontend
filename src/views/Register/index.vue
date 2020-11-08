<template>
    <div class="reg">
      <div class="reg__content">
        <div class="reg__img">
          <img src="@/assets/images/Login/bg.png"/>
          <div class="reg__img__cover">
            <p class="reg__img__cover__title">成为我们的一部分</p>
            <p>与这个时代</p>
            <p>最具活力的青年人</p>
            <p>一起，</p>
            <p>改变生活，</p>
            <p>改变世界。</p>
          </div>
        </div>
        <div class="reg__form">
          <h2 class="reg__title">加入706青年空间</h2>
          <yth-input v-model="form.inviteCode" class="reg__form-item" placeholder="邀请码">
            <span slot="suffix">
              <span>如何获取</span><i class="fa fa-question-circle reg__form-icon"></i>
            </span>
          </yth-input>
          <div class="reg__form-item reg__form-item--name">
            <yth-input v-model="form.lastName" class="form-item__last-name" placeholder="*姓">
            </yth-input>
            <yth-input v-model="form.firstName"  class="form-item__first-name" placeholder="*名">
            </yth-input>
          </div>
          <yth-input v-model="form.phone" class="reg__form-item" placeholder="*手机">
          </yth-input>
          <yth-input v-model="form.verifyCode" class="reg__form-item" placeholder="*短信验证码">
            <span slot="suffix">
              <span class="login__form__code" @click="sendCode">{{timerText}}</span>
            </span>
          </yth-input>
          <yth-input v-model="form.password" type="password" class="reg__form-item" placeholder="*密码">
          </yth-input>
          <el-button class="reg__form-item reg__form-item--submit"
           type="success"
           @click="handleSubmit">
           注册
          </el-button>
          <a class="reg__form__link" href="/login">已注册，点此登录</a>
          <ul class="reg__form__err-list" v-if="errors && errors.length">
            <li v-for="(error, index) in errors"
              :key="index">
              {{ error }}
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import validate from 'validate.js'
import { getCaptcha, getCode, signUp } from '@/http'

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
      },
      errors: '',
      timer: null,
      timeCount: 15,
      timerText: '点击获取',
      constraints: {
        lastName: {
          presence: {
            allowEmpty: false,
            message: '^姓不能为空'
          }
        },
        firstName: {
          presence: {
            allowEmpty: false,
            message: '^名字不能为空'
          }
        },
        phone: {
          presence: {
            allowEmpty: false,
            message: '^手机号码不能为空'
          },
          format: {
            pattern: /^[1]([3-9])[0-9]{9}$/,
            message: '^电话号码格式错误'
          }
        },
        verifyCode: {
          presence: {
            allowEmpty: false,
            message: '^验证码不能为空'
          }
        },
        password: {
          presence: {
            allowEmpty: false,
            message: '^密码不能为空'
          }
        }
      }
    }
  },
  methods: {
    sendCode () {
      const errors = validate.single(this.form.phone, this.constraints.phone)
      if (errors && errors.length) {
        this.errors = ['电话不能为空']
        return
      }
      if (this.timer) {
        return
      }
      this.handleSendCode(this.form.phone)
      this.timerText = `${this.timeCount}s 后重新发送`
      this.timer = setInterval(() => {
        this.timeCount--
        this.timerText = `${this.timeCount}s 后重新发送`
        if (this.timeCount < 0) {
          clearInterval(this.timer)
          this.timer = null
          this.timeCount = 15
          this.timerText = '点击获取'
        }
      }, 1000)
    },
    async handleSendCode (phone) {
      const res = await getCaptcha(phone)
      const code = res.data
      const verifyCodeData = await getCode(code)
      this.form.verifyCode = verifyCodeData.data
      console.log(this.form.verifyCode)
    },
    async handleSubmit () {
      this.errors = validate(this.form, this.constraints, { format: 'flat' })
      if (this.errors && this.errors.length) {
        return
      }
      const res = await signUp({
        code: this.form.verifyCode,
        firstName: this.form.firstName,
        inviteCode: this.form.inviteCode,
        lastName: this.form.lastName,
        password: this.form.password,
        phoneNumber: this.form.phone
      })
      console.log(res)
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
      position: relative;;
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
