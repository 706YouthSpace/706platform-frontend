<template>
  <header class="header-container">
    <div class="header">
      <router-link to="/" class="header__logo">
        <img class="img" src="@/assets/images/logo.png" />
        <h1>706青年空间</h1>
      </router-link>
      <nav class="header__tab">
        <router-link class="header__tab__item" to="/home">
          <span class="name"> 首页 </span>
        </router-link>
        <a
          class="header__tab__item"
          v-for="route in routes"
          :key="route.path"
          :href="route.path"
        >
          <span class="name">
            {{ route.name }}
          </span>
        </a>
        <router-link to="/login">
          <span class="header__user">
            <i class="fa fa-user-circle"></i>
          </span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      routes: [
        {
          name: '博客',
          path: 'https://blog.706er.com/'
        },
        {
          name: '媒体实验室',
          path: 'https://medialab.706er.com/'
        },
        {
          name: '生活实验室',
          path: 'http://www.706lifelab.com/'
        },
        {
          name: '瓦猫',
          path: 'https://discuss.wamo.club/'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 89px;
  background: #fff;
  z-index: 10;
  font-weight: 700;
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1380px) {
    max-width: 1250px;
  }

  @media (min-width: 1480px) {
    max-width: 1410px;
  }

  &-container {
    background: #fff;
    width: 100%;
    position: sticky;
    top: 0;
  }
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
      height: 89px;
      padding: 0 15px;
      box-sizing: border-box;
      align-items: center;
      color: #020202;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;

      &.current {
        color: #a6a6a6;
      }

      &:hover {
        color: #3d3d3d
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
