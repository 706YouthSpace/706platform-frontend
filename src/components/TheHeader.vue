<template>
  <header class="header">
    <router-link to="/" class="header__logo">
      <img class="img" src="@/assets/images/logo.png"/>
      <h1>706青年空间</h1>
    </router-link>
    <nav class="header__tab">
      <router-link
        class="header__tab__item"
        v-for="route in routes"
        :key="route.path"
        :to="route.path">
        <span class="icon">
          <i :class="`fa fa-${route.icon}`"></i>
        </span>
        <span class="name">
          {{route.name}}
        </span>
      </router-link>
      <span class="header__user">
        <i class="fa fa-user-circle"></i>
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      routes: [
        {
          name: '广场',
          path: '/square',
          icon: 'map-signs'
        },
        {
          name: '圈子',
          path: '/social',
          icon: 'spinner'
        },
        {
          name: '活动',
          path: '/activity/list',
          icon: 'coffee'
        },
        {
          name: '居住',
          path: '/live',
          icon: 'home'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
  .header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    height: 50px;
    background: #fff;
    box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    z-index: 10;

    &__logo {
      display: flex;
      align-items: center;

      img {
        width: 68px;
        height: 25px;
      }

      h1 {
        margin-left: 14px;
        font-size: 17px;
        font-weight: normal;
        color: #101010;
      }
    }

    &__tab {
      display: flex;
      align-items: center;
      &__item {
        display: flex;
        height: 50px;
        padding: 0 14px;
        box-sizing: border-box;
        align-items: center;
        color: #333;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;

        &.current {
          border-bottom-color: #0B800B;
        }

        &:hover {
          background: #D2D2D2;
        }
        .icon {
          font-size: 22px;
        }
        .name {
          margin-left: 7px;
        }
      }
    }

    &__user {
      margin-left: 27px;
      margin-right: 13px;
      font-size: 28px;
    }
  }
</style>
