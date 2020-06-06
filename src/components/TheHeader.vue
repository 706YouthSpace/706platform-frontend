<template>
  <header class="header" :class="{mobile: device==='mobile'}">
    <router-link to="/" class="header__title">
      <img class="header__logo" src="@/assets/images/logo.png"/>
      <h1 v-if="device!=='mobile'">706青年空间</h1>
    </router-link>
    <nav class="header__menu" v-if="device!=='mobile'">
      <router-link to="/Activity">近期活动</router-link>
      <router-link to="/">706文化</router-link>
      <router-link to="/">706广场</router-link>
      <router-link to="/">706圈子</router-link>
      <router-link to="/">联系我们</router-link>
    </nav>
    <img v-if="device!=='mobile'" class="header__avatar" src="@/assets/images/header.png"/>
    <img v-else class="header__more" src="@/assets/images/more.png" @click="isNavShow=true"/>
    <transition name="nav">
      <nav class="header__nav"
           v-show="isNavShow">
        <img class="header__nav__close" src="@/assets/images/close.png" @click="isNavShow=false">
        <router-link class="header__nav__item" to="/Activity">
          <img class="header__nav__icon" src="@/assets/images/list_icon.png">近期活动
        </router-link>
        <router-link class="header__nav__item" to="/">
          <img class="header__nav__icon" src="@/assets/images/list_icon.png">706文化
        </router-link>
        <router-link class="header__nav__item" to="/">
          <img class="header__nav__icon" src="@/assets/images/list_icon.png">706广场
        </router-link>
        <router-link class="header__nav__item" to="/">
          <img class="header__nav__icon" src="@/assets/images/list_icon.png">706圈子
        </router-link>
        <router-link class="header__nav__item" to="/">
          <img class="header__nav__icon" src="@/assets/images/list_icon.png">联系我们
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'TheHeader',
    data() {
      return {
        isNavShow: false
      }
    },
    computed: {
      ...mapState([
        'device'
      ])
    },
    created() {
      this.$router.beforeEach((from, to, next) => {
        this.isNavShow = false
        next()
      })
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  @father: header;
  .header {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 78px;
    padding: 10px 52px 0px 42px;
    align-items: center;
    background: #fff;
    box-sizing: border-box;
    z-index: 10;

    &.mobile {
      height: 51px;
      padding: 31px 26px 0px 12px;
    }

    &__title {
      flex: 1;
      display: flex;
      color: #3e3e3e;
      align-items: flex-end;

      & > h1 {
        font-size: 20px;
        line-height: 16px;
        font-weight: normal;
        margin-left: 10px;
      }
    }

    &__logo {
      display: block;
      height: 20px;
      width: 46px;
    }

    &__menu {
      display: flex;
      color: #666664;
      font-size: 15px;

      & > a {
        padding: 0 20px;

        &:hover {
          color: #3e3e3e
        }
      }
    }

    &__avatar {
      display: block;
      width: 21px;
      height: 21px;
      margin-left: 16px;
    }


    &__nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(0, 216, 143, .8) 0%, rgba(158, 209, 15, .8) 100%);

      &__close {
        display: block;
        width: 20px;
        height: 20px;
        margin: 142px auto 83px auto;
      }

      &__item {
        display: flex;
        margin-left: 44px;
        margin-bottom: 20px;
        color: #fff;
        font-size: 18px;
        line-height: 20px;
        align-items: center;
      }

      &__icon {
        width: 6px;
        height: 10px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }

    &__more {
      display: block;
      height: 19px;
      width: 4px;
      cursor: pointer;
    }

    &.mobile {
      /*height: 9.5p;*/
      background: transparent;


    }

    /* animation */

    .nav-enter-active, .nav-leave-active {
      transition: opacity .1s;
    }
    .nav-enter, .nav-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
</style>
