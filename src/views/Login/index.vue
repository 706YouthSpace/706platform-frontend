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
          <div
            class="tab-item"
            :class="{ 'tab-item--active': isVerifyLogin }"
            @click="changeLoginType('verify')"
          >
            验证码登录
          </div>
          <div
            class="tab-item"
            :class="{ 'tab-item--active': isPwdLogin }"
            @click="changeLoginType('pwd')"
          >
            密码登录
          </div>
        </div>
        <div v-if="isVerifyLogin" class="tab-panel" key="verify">
          <yth-input
            v-model="verifyForm.phone"
            class="login__form-item"
            placeholder="*手机"
          >
          </yth-input>
          <yth-input
            v-model="verifyForm.code"
            class="login__form-item"
            placeholder="*短信验证码"
          >
            <span slot="suffix">
              <span class="login__form__code" @click="sendPhoneCode">{{
                timerText
              }}</span>
            </span>
          </yth-input>
        </div>
        <div v-else-if="isPwdLogin" class="tab-panel" key="pwd">
          <yth-input
            v-model="pwdForm.email"
            class="login__form-item"
            placeholder="*邮箱"
          >
          </yth-input>
          <yth-input
            v-model="pwdForm.pwd"
            type="password"
            class="login__form-item"
            placeholder="*密码"
          >
          </yth-input>
        </div>
        <el-button
          class="login__form-item login__form-item--submit"
          type="success"
          @click="handleSubmit"
        >
          登录
        </el-button>
        <el-button class="reg" type="success" @click="handleReg">
          前往注册
        </el-button>
        <ul class="login__form__err-list" v-if="errors && errors.length">
          <li v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
    </div>
    <el-dialog
      class="login__captcha"
      title="请输入图形验证码："
      width="300px"
      :visible.sync="captchaDialog.show"
      @closed="clearCaptchaData"
    >
      <canvas
        class="login__captcha__canvas"
        ref="regCaptchaCanvas"
        :width="captchaDialog.canvas.width"
        :height="captchaDialog.canvas.height"
        @click="refreshCaptcha(verifyForm.phone)"
      >
      </canvas>
      <span
        class="login__captcha__refresh"
        @click="refreshCaptcha(verifyForm.phone)"
        >（点击刷新验证码）</span
      >
      <yth-input
        class="login__form-item"
        placeholder="*输入验证码"
        v-model="captchaDialog.inputValue"
      >
      </yth-input>
      <p class="login__captcha__error" v-if="captchaDialog.error">
        {{ captchaDialog.error }}
      </p>
      <div class="login__captcha__footer" slot="footer">
        <el-button type="success" size="small" @click="handleSendCode"
          >确认</el-button
        >
        <el-button size="small" @click="captchaDialog.show = false"
          >取消</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import validate from "validate.js";
import { getCaptcha, sendCode, signinPhone } from "@/http";

export default {
  name: "index",
  data() {
    return {
      loginType: "verify",
      verifyForm: {
        phone: "",
        code: ""
      },
      constraints: {
        phone: {
          presence: {
            allowEmpty: false,
            message: "^手机号码不能为空"
          },
          format: {
            pattern: /^[1]([3-9])[0-9]{9}$/,
            message: "^电话号码格式错误"
          }
        }
      },
      pwdForm: {
        email: "",
        pwd: ""
      },
      errors: [],
      timer: null,
      timeCount: 15,
      timerText: "点击获取",
      captchaDialog: {
        show: false,
        canvas: {
          width: 150,
          height: 50
        },
        captcha: "",
        inputValue: "",
        error: ""
      }
    };
  },
  computed: {
    isVerifyLogin() {
      return this.loginType === "verify";
    },
    isPwdLogin() {
      return this.loginType === "pwd";
    }
  },
  methods: {
    sendPhoneCode() {
      const errors = validate.single(
        this.verifyForm.phone,
        this.constraints.phone
      );
      if (errors && errors.length) {
        this.errors = errors;
        return;
      }
      if (this.timer) {
        return;
      }
      this.captchaDialog.show = true;
      this.$nextTick(() => {
        this.refreshCaptcha(this.verifyForm.phone);
      });
    },
    clearCaptchaData() {
      this.captchaDialog.captcha = "";
      this.captchaDialog.inputValue = "";
      this.captchaDialog.error = "";
    },
    async handleSendCode(phone) {
      const { captcha, inputValue } = this.captchaDialog;
      if (!inputValue || !inputValue.length) {
        this.captchaDialog.error = "验证码不能为空";
        return;
      }
      if (captcha !== inputValue) {
        this.captchaDialog.error = "验证码错误";
        return;
      }
      this.captchaDialog.error = "";
      await sendCode(inputValue);
      this.captchaDialog.show = false;

      this.timerText = `${this.timeCount}s 后重新发送`;
      this.timer = setInterval(() => {
        this.timeCount--;
        this.timerText = `${this.timeCount}s 后重新发送`;
        if (this.timeCount < 0) {
          clearInterval(this.timer);
          this.timer = null;
          this.timeCount = 5;
          this.timerText = "点击获取";
        }
      }, 1000);
    },
    async refreshCaptcha(phone) {
      if (!phone) {
        return;
      }
      try {
        const res = await getCaptcha(phone);
        const code = res.data;
        this.captchaDialog.captcha = code;
        this.renderCaptcha(code);
      } catch (e) {}
    },
    renderCaptcha(captcha) {
      const canvas = this.$refs.regCaptchaCanvas;
      const context = canvas.getContext("2d");
      const captchaArr = captcha.split("");
      const { width, height } = this.captchaDialog.canvas;
      context.clearRect(0, 0, width, height);

      captchaArr.forEach((v, i) => {
        const deg = Math.random() - 0.5;
        const x = 10 + i * 20;
        const y = Math.floor(height / 2) + (Math.random() * 8 + 8);
        context.font = "bold 40px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);
        context.fillStyle = this.getRandomColor();
        context.fillText(v, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
      });
      this.renderCanvasBackgroundLines(context, width, height);
      this.renderCanvasBackgroundPonts(context, width, height);
    },
    renderCanvasBackgroundLines(context, width, height) {
      for (let i = 0; i < 5; i++) {
        context.strokeStyle = this.getRandomColor();
        context.beginPath();
        context.moveTo(Math.random() * width, Math.random() * height);
        context.lineTo(Math.random() * width, Math.random() * height);
        context.stroke();
      }
    },
    renderCanvasBackgroundPonts(context, width, height) {
      for (let i = 0; i < 30; i++) {
        context.strokeStyle = this.getRandomColor();
        context.beginPath();
        const x = Math.random() * width;
        const y = Math.random() * height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
      }
    },
    getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    },
    changeLoginType(type = "verify") {
      this.loginType = type;
    },
    handleReg() {
      this.$router.push("/reg");
    },
    async handleSubmit() {
      try {
        if (this.isVerifyLogin) {
          await signinPhone({
            code: this.verifyForm.code,
            phoneNumber: this.verifyForm.phone
          });
          this.$message({
            message: "登录成功",
            type: "success"
          });
          this.$router.push("/");
        } else if (this.isPwdLogin) {
          let constraints = {};
          let form = {};
          form = this.pwdForm;
          constraints = {
            email: {
              length: {
                minimium: 1,
                tooShort: "^邮箱不能为空"
              },
              email: {
                message: "^邮箱格式有误"
              }
            },
            pwd: {
              length: {
                minimum: 8,
                tooShort: "^密码不能少于八位"
              }
            }
          };
          this.errors = validate(form, constraints, { format: "flat" });
          return this.errors;
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
};
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

    &__code {
      cursor: pointer;
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
  &__captcha {
    &__canvas {
      cursor: pointer;
    }
    &__refresh {
      font-size: 12px;
      cursor: pointer;
    }
    &__error {
      margin-top: 5px;
      font-size: 12px;
      color: #f56c6c;
    }
  }
}
.reg{
  margin-top: 10px;
  width: 217px;
}
.el-button+.el-button{
  margin-left: 0px;
}
</style>
