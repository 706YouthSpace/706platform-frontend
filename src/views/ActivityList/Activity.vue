<template>
    <div class="activity">
        <banner class="activity__banner"/>
        <div class="activity__recent">
            <h2 class="activity__sub-title">近期活动</h2>
            <div class="activity__list">
                <activity-item
                        v-for="(activity, index) in recentActivities"
                        :key="index"
                        :activity="activity"/>
            </div>
            <p class="activity__recent__footer">
                <span class="more">查看更多</span>
                <span class="collapse">收起</span>
            </p>
        </div>
        <div class="activity__recent">
            <h2 class="activity__sub-title">往期活动</h2>
            <div class="activity__list">
                <activity-item
                        v-for="(activity, index) in recentActivities"
                        :key="index"
                        :activity="activity"/>
            </div>
            <p class="activity__recent__footer">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </p>
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner'
import ActivityItem from './components/ActivityItem'

export default {
  name: 'Activity',
  components: { ActivityItem, Banner },
  data () {
    return {
      recentActivities: [
        {
          title: '什么是哲学的基础',
          time: '2020-05-07 17:00 (2小时)',
          site: '襄阳南路57弄',
          desc: '在门捷列夫发现元素周期律以前，人们已经积累了不少关于化学元素的知识，但这些元素之间有什么联系呢？是否还会有新的元素发现呢？门捷列夫经过反复研究，终于发',
          imgUrl: require('@/assets/images/banner.png')
        },
        {
          title: '什么是哲学的基础',
          time: '2020-05-07 17:00 (2小时)',
          site: '襄阳南路57弄',
          desc: '在门捷列夫发现元素周期律以前，人们已经积累了不少关于化学元素的知识，但这些元素之间有什么联系呢？是否还会有新的元素发现呢？门捷列夫经过反复研究，终于发',
          imgUrl: require('@/assets/images/banner.png')
        },
        {
          title: '什么是哲学的基础',
          time: '2020-05-07 17:00 (2小时)',
          site: '襄阳南路57弄',
          desc: '在门捷列夫发现元素周期律以前，人们已经积累了不少关于化学元素的知识，但这些元素之间有什么联系呢？是否还会有新的元素发现呢？门捷列夫经过反复研究，终于发',
          imgUrl: require('@/assets/images/banner.png')
        },
        {
          title: '什么是哲学的基础',
          time: '2020-05-07 17:00 (2小时)',
          site: '襄阳南路57弄',
          desc: '在门捷列夫发现元素周期律以前，人们已经积累了不少关于化学元素的知识，但这些元素之间有什么联系呢？是否还会有新的元素发现呢？门捷列夫经过反复研究，终于发',
          imgUrl: require('@/assets/images/banner.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
    .activity {
        &__banner {
            margin-bottom: 22px;
        }

        &__sub-title {
            color: #333;
            font-size: 23px;
            margin-bottom: 22px;
        }

        &__recent {
            width: 80%;
            max-width: 1200px;
            margin: 0 auto 31px auto;
            padding: 22px 40px 18px 21px;
            box-sizing: border-box;

            &__footer {
                position: relative;
                text-align: center;
                margin-top: 37px;
                .more {
                    color: #aaa;
                    font-size: 20px;
                    cursor: pointer;
                }

                .collapse {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    font-size: 20px;
                    color: #aaa;
                    cursor: pointer;
                }
            }
        }
    }
</style>
