<template>
    <div class="activity-item" @click="handleActivityClick">
        <div class="left">
            <img :src="activity.imgUrl" />
        </div>
        <div class="right">
            <p class="activity-item__title">{{activity.title}}</p>
            <p class="activity-item__info">
                <span class="name">时间：</span>
                <span class="value">{{activity.time}}</span>
            </p>
            <p class="activity-item__info">
                <span class="name">地点：</span>
                <span class="value">{{activity.site}}</span>
            </p>
            <p class="activity-item__info">
                <span class="name">摘要：</span>
                <span class="value desc">{{activity.desc}}</span>
            </p>
            <p class="activity-item__count">
                已有20人报名
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ActivityItem",
        props: {
            activity: {
                type: Object
            }
        },
        methods: {
            handleActivityClick() {
                this.$router.push('/activity_detail')
            }
        }
    }
</script>

<style scoped lang="less">
    .activity-item {
        display: flex;
        padding-left: 39px;
        color: #aaa;
        padding-bottom: 21px;
        border-bottom: 1px solid #f2f2f2;
        cursor: pointer;
        &:nth-child(n+2) {
            margin-top: 19px;
        }

        .left {
            flex: 0 0 259px;
            height: 148px;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 4px;
            }
        }

        .right {
            flex: 1 1;
            padding-left: 21px;
        }

        &__title {
            font-size: 20px;
            color: #333;
        }

        &__info {
            display: flex;
            font-size: 16px;
            margin-bottom: 5px;

            .name {
                flex: 0 0 auto;
            }

            .value {
                flex: 1 1;
                &.desc {
                    font-size: 14px;
                }
            }
        }

        &__count {
            font-size: 14px;
            text-align: right;
        }
    }
</style>
