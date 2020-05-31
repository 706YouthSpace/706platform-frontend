<template>
    <div class="activity">
        <div class="activity__img" :class="{mobile: device==='mobile'}">
            <img src="@/assets/images/banner.jpeg"/>
        </div>
        <div class="activity__detail">
            <h2 class="activity__title">
                技术的社会面沙龙
            </h2>
            <p class="activity__desc">
                简短的活动介绍，说明活动内容，最多容纳两行
            </p>
            <div class="activity__info">
                <p class="activity__item">
                    <span class="activity__item__label">时间</span>
                    <span class="activity__item__value">2020.5.31 19:30</span>
                </p>
                <p class="activity__item">
                    <span class="activity__item__label">地点</span>
                    <span class="activity__item__value">2020.5.31 19:30</span>
                </p>
                <p class="activity__item">
                    <span class="activity__item__label">发起方</span>
                    <span class="activity__item__value">706同学社</span>
                </p>
                <p class="activity__item">
                    <span class="activity__item__label">发起方</span>
                    <span class="activity__item__value">¥100</span>
                </p>
            </div>
            <div class="activity__detail__content">
                <div class="activity__detail__tabs">
                    <p>
                        <span :class="{active: activeTab==='intro'}" @click="activeTab='intro'">活动介绍</span>
                    </p>
                    <p>
                        <span :class="{active: activeTab==='reg'}" @click="activeTab='reg'">报名入口</span>
                    </p>
                </div>
                <p class="activity__detail__content__detail" v-if="activeTab==='intro'">
                    这是一段介绍,这是一段介绍这是一段介绍这是一段介绍, <br><br>这是一段介绍这是一段介绍,这是一段介绍这是一段介绍这是一段介绍, 这是一段介绍<br><br>
                    这是一段介绍,这是一段介绍这是一段介绍这是一段介绍
                </p>
                <p class="activity__detail__content__detail" v-else>
                    这是一个报名信息,这是一个报名信息,这是一个报名信息这是一个报名信息这是一个报名信息<br><br>这是一个报名信息这是一个报名信息这是一个报名信息这是一个报名信息这是一个报名信息,这是一个报名信息
                    <br><br>
                    <a href="https://baidu.com">报名链接</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'ActivityDetail',
        data() {
            return {
                activeTab: 'intro'
            }
        },
        computed: {
            ...mapState([
                'device'
            ])
        }
    }
</script>

<style scoped lang="less">
    .activity {
        &__img {
            width: 100%;
            height: 400px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &.mobile {
                height: auto;
            }
        }

        &__detail {
            margin-top: 20px;
            padding: 0 5vw;

            &__content {
                margin-top: 30px;

                &__detail {
                    padding: 10px 0;
                    font-size: 13px;
                    color: #999;
                }
            }

            &__tabs {
                display: flex;
                margin-bottom: 10px;

                & > p {
                    flex: 1;
                    text-align: center;

                    & > span {
                        display: inline-block;
                        width: auto;
                        border-bottom: 2px solid transparent;
                        cursor: pointer;


                        &.active {
                            border-bottom: 2px solid #00913a;
                        }
                    }
                }
            }
        }

        &__title {
            font-size: 20px;
            margin-bottom: 5px;
        }

        &__desc {
            font-size: 13px;
            color: #999;
        }

        &__info {
            margin-top: 10px;
            font-size: 13px;
        }

        &__item {
            line-height: 1.6;
            color: #999;

            &__label {
                display: inline-block;
                width: 70px;
            }
        }
    }
</style>
