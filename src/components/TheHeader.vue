<template>
    <header class="header">
        <router-link to="/" class="header__title">
            <img class="header__logo" src="@/assets/images/logo.png" />
            <h1 v-if="device!=='mobile'">706青年空间</h1>
        </router-link>
        <nav class="header__menu">
            <span v-for="route in routes" :key="route.path">
                <a v-if="route.type === 'a'" :href="route.path"  class="">{{route.name}}</a>
                <router-link v-else :to="route.path" class="">{{route.name}}</router-link>
            </span>
            <a v-if="!user._id" href="/api/login">登陆/注册</a>
            <a v-else href="/api/logout">
                <img class="header__avatar" :src="user.image || '@/assets/images/header.png'" />
            </a>
        </nav>
    </header>
</template>

<script>
import { mainStay } from "../services/mainstay";

export default {
    name: "TheHeader",
    data() {
        return {
            device: undefined,
            routes: [
                {
                    type: 'a',
                    name: "发布活动",
                    path: "/admin"
                },
                {
                    name: "近期活动",
                    path: "/Activity"
                },
                {
                    name: "706文化",
                    path: "/Culture"
                },
                {
                    name: "706广场",
                    path: "/Squre"
                },
                {
                    name: "706圈子",
                    path: "/Social"
                },
                {
                    name: "联系我们",
                    path: "/Contact"
                }
            ],
            user: {}
        };
    },
    created() {
        mainStay.userPromise.then(u => {
            this.user = u;
        });
    },
    methods: {}
};
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
        background: linear-gradient(
            180deg,
            rgba(0, 216, 143, 0.8) 0%,
            rgba(158, 209, 15, 0.8) 100%
        );

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
