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
      <!-- <span class="header__user">
        <i class="fa fa-user-circle"></i>
      </span> -->
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
        },
        {
          name: '加入我们',
          path: '/join',
          icon: 'user-circle'
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
    padding: 0 17px;
    height: 60px;
    background: #fff;
    box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.1);
    z-index: 10;

    &__logo {
      display: flex;
      align-items: center;

      img {
        width: 81px;
        height: 30px;
      }

      h1 {
        margin-left: 22px;
        font-size: 20px;
        font-weight: normal;
        color: #101010;
      }
    }

    &__tab {
      display: flex;
      align-items: center;
      &__item {
        display: flex;
        height: 60px;
        padding: 0 16.5px;
        box-sizing: border-box;
        align-items: center;
        color: #333;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;

        &.current {
          border-bottom-color: #0B800B;
        }

        &:hover {
          background: #D2D2D2;
        }
        .icon {
          font-size: 26px;
        }
        .name {
          margin-left: 8px;
        }
      }
    }

    &__user {
      margin-left: 33px;
      margin-right: 16px;
      font-size: 34px;
    }
  }
</style>
