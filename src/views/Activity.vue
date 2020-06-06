<template>
    <div class="activity">
<!--        <mobile-filter/>-->
        <div class="activity__bar"></div>
        <div class="activity__list">
            <div class="activity__item" @click="$router.push('/Detail')">
                <div class="activity__item__left">
                    <img src="@/assets/images/activity.png"/>
                </div>
                <div class="activity__item__right">
                    <h3 class="activity__item__title">
                        技术的社会面沙龙
                    </h3>
                    <p class="activity__item__desc">
                        简短的活动介绍，说明活动内容，最多容纳两行
                    </p>
                    <p class="activity__item__time">
                        2020.5.30 14:20
                    </p>
                    <p class="activity__item__site">
                        线上｜腾讯会议
                    </p>
                    <p class="activity__item__price">
                        ¥100
                    </p>
                </div>
            </div>
            <div class="activity__item">
                <div class="activity__item__left">
                    <img src="@/assets/images/activity.png"/>
                </div>
                <div class="activity__item__right">
                    <h3 class="activity__item__title">
                        技术的社会面沙龙
                    </h3>
                    <p class="activity__item__desc">
                        简短的活动介绍，说明活动内容，最多容纳两行
                    </p>
                    <p class="activity__item__time">
                        2020.5.30 14:20
                    </p>
                    <p class="activity__item__site">
                        线上｜腾讯会议
                    </p>
                    <p class="activity__item__price">
                        ¥100
                    </p>
                </div>
            </div>
            <div class="activity__item">
                <div class="activity__item__left">
                    <img src="@/assets/images/activity.png"/>
                </div>
                <div class="activity__item__right">
                    <h3 class="activity__item__title">
                        技术的社会面沙龙
                    </h3>
                    <p class="activity__item__desc">
                        简短的活动介绍，说明活动内容，最多容纳两行
                    </p>
                    <p class="activity__item__time">
                        2020.5.30 14:20
                    </p>
                    <p class="activity__item__site">
                        线上｜腾讯会议
                    </p>
                    <p class="activity__item__price">
                        ¥100
                    </p>
                </div>
            </div>
            <div class="activity__item">
                <div class="activity__item__left">
                    <img src="@/assets/images/activity.png"/>
                </div>
                <div class="activity__item__right">
                    <h3 class="activity__item__title">
                        技术的社会面沙龙
                    </h3>
                    <p class="activity__item__desc">
                        简短的活动介绍，说明活动内容，最多容纳两行
                    </p>
                    <p class="activity__item__time">
                        2020.5.30 14:20
                    </p>
                    <p class="activity__item__site">
                        线上｜腾讯会议
                    </p>
                    <p class="activity__item__price">
                        ¥100
                    </p>
                </div>
            </div>
            <div class="activity__item">
                <div class="activity__item__left">
                    <img src="@/assets/images/activity.png"/>
                </div>
                <div class="activity__item__right">
                    <h3 class="activity__item__title">
                        技术的社会面沙龙
                    </h3>
                    <p class="activity__item__desc">
                        简短的活动介绍，说明活动内容，最多容纳两行
                    </p>
                    <p class="activity__item__time">
                        2020.5.30 14:20
                    </p>
                    <p class="activity__item__site">
                        线上｜腾讯会议
                    </p>
                    <p class="activity__item__price">
                        ¥100
                    </p>
                </div>
            </div>
        </div>
        <div class="activity__more">
            <span class="activity__more__text">查看更多</span><img class="activity__more__icon"
                                                             src="@/assets/images/more.png">
        </div>
    </div>
</template>

<script>
    import MobileFilter from '@/components/MobileFilter'
    export default {
        name: 'Activity',
        components: {MobileFilter}
    }
</script>

<style scoped lang="less">
    .activity {
        padding-top: 20px;
        &__list {
            padding: 10px 5vw;
        }

        &__item {
            display: flex;
            margin-top: 20px;

            &__left {
                margin-right: 15px;
                background: #eee;
                flex: 0 0 100px;
                height: 120px;

                & > img {
                    width: 100%;
                    height: 100%;
                    object-fit: scale-down;
                }
            }

            &__right {
                p {
                    font-size: 12px;
                    margin-top: 5px;
                    color: #999;
                }
            }

            &__title {
                font-size: 17px;
            }
        }

        &__more {
            display: flex;
            margin-top: 10px;
            align-items: center;
            justify-content: center;

            &__text {
                font-size: 9px;
            }
            &__icon {
                height: 10px;
            }

        }
    }
</style>
