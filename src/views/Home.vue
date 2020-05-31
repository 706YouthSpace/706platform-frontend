<template>
    <div class="home">
        <div class="home__banner" :class="{mobile: device === 'mobile'}">
            <img src="@/assets/images/banner.jpeg">
        </div>
        <div class="home__project">
            <ul class="home__project__nav">
                <li class="home__project__nav__item">
                    <img src="@/assets/logo.png">
                    <p>青年空间</p>
                </li>
                <li class="home__project__nav__item">
                    <img src="@/assets/logo.png">
                    <p>生活实验室</p>
                </li>
                <li class="home__project__nav__item">
                    <img src="@/assets/logo.png">
                    <p>共享客厅</p>
                </li>
                <li class="home__project__nav__item">
                    <img src="@/assets/logo.png">
                    <p>城市计划</p>
                </li>
            </ul>
            <div class="home__project__info">
                <h2>青年空间</h2>
                <p>
                    706是青年人自发组织的公共交流空间，在这里有丰富的沙龙、青年分享烩、公开课、独立电影放映、民谣演奏等等活动。从创办至今一年多已经举办了将近200场活动，每一场都秉承着分享的精神。706的目标是成为一个开源思想的创新平台，在这里青年人呈现出不同的思想、故事、经历和价值观，让每个人向内自我探索，发现更多可能性，找到自己志同道合的同伴，找到归属感。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'Home',
        computed: {
            ...mapState([
                'device'
            ])
        }
    }
</script>

<style scoped lang="less">
    .home {
        &__banner {
            height: 500px;
            background: #000;

            & > img {
                display: block;
                margin: 0 auto;
                height: 100%;
            }

            &.mobile {
                height: auto;

                & > img {
                    height: auto;
                    width: 100%;
                }
            }
        }

        &__project {
            padding: 0 5vw;

            &__nav {
                display: flex;
                list-style: none;

                &__item {
                    flex: 0 0 25%;
                    text-align: center;
                    padding: 20px 0;
                    cursor: pointer;

                    & > img {
                        height: 20px;
                    }
                }
            }

            &__info {
                h2 {
                    margin: 10px 0 20px 0;
                }

                p {
                    font-size: 14px;
                    line-height: 1.5;
                }
            }
        }
    }
</style>
