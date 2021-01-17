<template>
  <div class="activity">
    <div class="activity__inner">
      <div class="activity__img">
        <img
          class="activity__img__inner"
          src="@/assets/images/activities/activity_bg_1.png"
        />
      </div>
      <div class="activity__content">
        <h2 class="activity__title">{{ article.title }}</h2>
        <div class="activity__author">
          <img
            class="activity__author__header"
            src="@/assets/images/header.png"
          />
          <div class="activity__author__info">
            <p class="name">{{ article.author }}</p>
            <p class="desc">{{ article.authorDesc }}</p>
          </div>
        </div>
        <div class="activity__article">
          {{ article.content }}
        </div>
      </div>
      <div class="activity__info">
        <div class="activity__info__item time">
          <span class="name">时间：</span>
          <span class="value">{{ article.time }}</span>
        </div>
        <div class="activity__info__item site">
          <span class="name">地点：</span>
          <span class="value">{{ article.site }}</span>
        </div>
        <div class="activity__info__item series">
          <span class="name">系列：</span>
          <span class="value">
            <div
              class="series-item"
              v-for="(serie, index) in series"
              :key="index"
            >
              <div class="series-img">
                <img src="@/assets/images/activities/activity_bg_1.png" />
              </div>
              <div class="series-content">
                <p class="series-title">{{ serie.title }}</p>
                <p class="series-time">
                  <span>时间：</span>
                  <span>{{ serie.time }}</span>
                </p>
                <p class="series-desc">
                  <span>摘要：</span>
                  <span>{{ serie.desc }}</span>
                </p>
                <p class="series-title"></p>
              </div>
            </div>
          </span>
        </div>
        <div class="activity__info__item pay">
          <span class="name">报名：</span>
          <span class="value">
            <div class="pay__info">
              <div class="pay__info__item">
                <span class="pay__name">温馨提示：</span>
                <span class="pay__value"
                  >本活动将跳转至其他平台报名，并由其他平台提供服务</span
                >
              </div>
              <div class="pay__info__item">
                <span class="pay__name">参考费用：</span>
                <span class="pay__value">¥ 160</span>
              </div>
              <div class="pay__info__item">
                <span class="pay__name">最高人数：</span>
                <span class="pay__value">20 人</span>
              </div>
            </div>
            <div class="pay__info tickets">
              <div class="pay__info__ticket selected">
                <p class="ticket__price">¥200</p>
                <p class="ticket__info">
                  <span class="ticket__type">
                    标准票
                  </span>
                  <span class="ticket__count">
                    剩余50位
                  </span>
                </p>
              </div>
              <div class="pay__info__ticket">
                <p class="ticket__price">¥200</p>
                <p class="ticket__info">
                  <span class="ticket__type">
                    标准票
                  </span>
                  <span class="ticket__count">
                    剩余50位
                  </span>
                </p>
              </div>
              <div class="pay__info__ticket">
                <p class="ticket__price">¥200</p>
                <p class="ticket__info">
                  <span class="ticket__type">
                    标准票
                  </span>
                  <span class="ticket__count">
                    剩余50位
                  </span>
                </p>
              </div>
              <div class="pay__info__ticket">
                <p class="ticket__price">¥200</p>
                <p class="ticket__info">
                  <span class="ticket__type">
                    标准票
                  </span>
                  <span class="ticket__count">
                    剩余50位
                  </span>
                </p>
              </div>
            </div>
          </span>
        </div>
        <div class="activity__info__item">
          <span class="name"></span>
          <span class="value">
            <div class="activity__pay">
              报名
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityDetail',
  data() {
    return {
      article: {
        title: '文章的标题',
        author: '发布者名称',
        authorDesc: '发布者的描述信息',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.',
        time: '2020-05-06(周三) 21:00 ~ 2020-06-07(周五) 17:00 | 持续 30天',
        site: '广东 深圳 南山区华侨城创意文化园e6栋马兰戈尼培训中心'
      },
      series: [
        {
          title: '1.什么是哲学的基础',
          time: '2020-05-07 17:00 (2小时)',
          desc:
            '在门捷列夫发现元素周期律以前，人们已经积累了不少关于化学元素的知识，但这些元素之间有什么联系呢？是否还会有新的元素发现呢？门捷列夫经过反复研究，终于发'
        },
        {
          title: '1.什么是哲学的基础',
          time: '2020-05-07 17:00 (2小时)',
          desc:
            '在门捷列夫发现元素周期律以前，人们已经积累了不少关于化学元素的知识，但这些元素之间有什么联系呢？是否还会有新的元素发现呢？门捷列夫经过反复研究，终于发'
        },
        {
          title: '1.什么是哲学的基础',
          time: '2020-05-07 17:00 (2小时)',
          desc:
            '在门捷列夫发现元素周期律以前，人们已经积累了不少关于化学元素的知识，但这些元素之间有什么联系呢？是否还会有新的元素发现呢？门捷列夫经过反复研究，终于发'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.activity {
  &__inner {
    width: 840px;
    margin: 0 auto;
    padding: 30px 0;
  }

  &__img {
    height: 300px;

    &__inner {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    font-size: 32px;
    margin-top: 20px;
  }

  &__author {
    display: flex;
    margin-top: 5px;

    &__header {
      width: 30px;
      height: 30px;
    }

    &__info {
      margin-left: 2px;

      .name {
        font-size: 14px;
        color: #333;
        line-height: 16px;
      }

      .desc {
        font-size: 12px;
        color: #d7d7d7;
        line-height: 14px;
      }
    }
  }

  &__article {
    text-align: justify;
    margin: 10px 0;
  }

  &__info {
    &__item {
      display: flex;
      font-size: 16px;
      line-height: 17px;

      .name {
        flex: 0 0 66px;
        font-weight: bold;
        padding: 20px 0 20px 10px;
        box-sizing: border-box;
      }

      .value {
        flex: 1 1;
        padding: 20px 0;

        .series {
          &-item {
            display: flex;

            &:nth-child(n + 2) {
              padding-top: 20px;
            }
          }

          &-img {
            flex: 0 0 164px;
            height: 106px;
            margin-right: 20px;

            & > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          &-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 15px;
          }

          &-time,
          &-desc {
            font-size: 14px;
            color: #aaa;
          }
        }

        .pay {
          &__info {
            &.tickets {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }

            &__ticket {
              flex: 0 0 45%;
              border: 1px solid #d7d7d7;
              border-radius: 4px;
              padding: 10px;
              margin-bottom: 10px;
              cursor: pointer;

              &.selected,
              &:hover {
                border-color: #dd3a3a;
              }

              .ticket {
                &__price {
                  color: #dd3a3a;
                  font-size: 18px;
                  margin-bottom: 15px;
                }
                &__info {
                  display: flex;
                  font-size: 14px;
                  color: #aaa;
                  justify-content: space-between;
                }
              }
            }

            &__item {
              font-size: 16px;
              color: #333;
              margin-bottom: 15px;
            }
          }
        }

        .activity {
          &__pay {
            width: 100%;
            padding: 11px 0;
            text-align: center;
            background-color: #dd5c3a;
            color: #fff;
            font-size: 16px;
            border-radius: 6px;
            cursor: pointer;

            &:hover {
              opacity: 0.8;
            }
          }
        }
      }

      &.time {
        .value {
          font-weight: bold;
        }
      }

      &.series {
        display: flex;
      }
    }
  }
}
</style>
