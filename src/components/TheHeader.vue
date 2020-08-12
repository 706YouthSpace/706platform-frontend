<template>
    <header class="header">
        <router-link to="/" class="header__title">
            <img class="header__logo" src="@/assets/images/logo.png"/>
            <h1>706青年空间</h1>
        </router-link>
        <nav class="header__menu">
            <span v-for="route in routes" :key="route.path">
                <template v-if="route.children&&route.children.length">
                    <el-popover placement="bottom" trigger="hover">
                        <ul class="header__menu__sub">
                            <li v-for="subRoute in route.children"
                                :key="subRoute.path">
                                <router-link :to="subRoute.path">{{subRoute.name}}</router-link>
                            </li>
                        </ul>
                        <router-link :to="route.path" slot="reference">{{route.name}}</router-link>
                    </el-popover>
                </template>
                <template v-else>
                    <router-link :to="route.path" class="">{{route.name}}</router-link>
                </template>
            </span>
            <a v-if="!user._id" href="/api/login">登陆/注册</a>
            <a v-else href="/api/logout">
                <img class="header__avatar" :src="user.image || '@/assets/images/header.png'"/>
            </a>
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
          path: '/square'
        },
        {
          name: '圈子',
          path: '/social'
        },
        {
          name: '活动',
          path: '/activity/list',
          children: [
            {
              name: '发起活动',
              path: '/activity/create'
            }, {
              name: '我参加的活动',
              path: '/activity/join'
            }, {
              name: '我组织的活动',
              path: '/activity/organize'
            }
          ]
        },
        {
          name: '居住',
          path: '/live'
        },
        {
          name: '聊天',
          path: '/chat'
        }
      ],
      user: {}
    }
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
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 78px;
        padding: 10px 52px 0px 42px;
        background: #fff;
        box-sizing: border-box;
        z-index: 10;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);

        &.mobile {
            height: 51px;
            padding: 31px 26px 0px 12px;
        }

        &__title {
            flex: 0 0 auto;
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

            & a {
                padding: 0 20px;

                &:hover {
                    color: #3e3e3e;
                }
            }

            &__sub {
                font-size: 15px;
                line-height: 20px;
                list-style: none;
                text-align: center;
                li {
                    padding: 5px 0;
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
            background: linear-gradient(180deg,
            rgba(0, 216, 143, 0.8) 0%,
            rgba(158, 209, 15, 0.8) 100%);

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

        .nav-enter-active,
        .nav-leave-active {
            transition: opacity 0.1s;
        }

        .nav-enter, .nav-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }
    }
</style>
