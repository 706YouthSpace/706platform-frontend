<template>
    <header class="header">
        <h1 class="header__logo">
            <router-link to="/">
                <img src="@/assets/logo.png">
            </router-link>
        </h1>
        <span class="header__label">
            706青年空间
        </span>
        <nav class="header__nav" v-if="device==='desktop'">
            <router-link to="/activity">社区活动</router-link>
            <router-link to="/">生活实验室</router-link>
            <router-link to="/">关于 706</router-link>
        </nav>
        <div v-else class="header__menu" @click="showNav">
            <img src="@/assets/menu.png"/>
        </div>
        <transition name="nav">
            <nav class="nav" v-show="isNavShow">
                <img class="nav__close" src="@/assets/close.png" @click="hideNav"/>
                <router-link class="nav__item" :class="{active: isNavItemShow}" style="transition: all 0.3s 0.2s"
                             to="/">
                    首页
                </router-link>
                <router-link class="nav__item" :class="{active: isNavItemShow}" style="transition: all 0.3s 0.4s"
                             to="/activity">
                    社区活动
                </router-link>
                <router-link class="nav__item" :class="{active: isNavItemShow}" style="transition: all 0.3s 0.6s"
                             to="/">生活实验室
                </router-link>
                <router-link class="nav__item" :class="{active: isNavItemShow}" style="transition: all 0.3s 0.8s"
                             to="/">关于 706
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
                isNavShow: false,
                isNavItemShow: false
            }
        },
        computed: {
            ...mapState([
                'device'
            ])
        },
        created() {
            this.$router.beforeEach((from, to, next) => {
                this.hideNav()
                next()
            })
        },
        methods: {
            showNav() {
                this.isNavShow = true
                setTimeout(() => {
                    this.isNavItemShow = true
                }, 0)
            },
            hideNav() {
                this.isNavShow = false
                this.isNavItemShow = false
            }
        }
    }
</script>

<style scoped lang="less">
    .header {
        display: flex;
        height: 80px;
        padding: 0 20px;
        align-items: center;

        &__logo {
            flex: 0 0 auto;

            & img {
                display: block;
                height: 25px;
            }

            margin-right: 10px;
        }

        &__label {
            flex: 1;
            font-weight: bolder;
            font-size: 25px;
        }

        &__nav {
            align-self: flex-end;

            a {
                display: inline-block;
                font-size: 20px;
                height: 30px;
                padding: 25px 20px;
                color: rgb(131, 137, 142);

                &:hover {
                    color: #00913a;
                }
            }
        }

        &__menu {
            width: 26px;
        }
    }

    .nav {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #fff;
        padding-top: 100px;

        &__close {
            position: absolute;
            top: 26px;
            right: 26px;
            width: 26px;
        }

        &__item {
            display: block;
            padding: 20px 30px;
            font-size: 26px;
            font-weight: bold;
            color: rgb(131, 137, 142);
            transform: translateX(100%);

            &:hover {
                color: #00913a;
            }

            &.active {
                transform: translateX(0%);
            }
        }
    }

    // animation
    .nav-enter-active, .nav-leave-active {
        transition: opacity .2s;
    }

    .nav-enter, .nav-leave-to {
        opacity: 0;
    }
</style>
