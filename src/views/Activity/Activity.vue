<template>
  <div class="activity">
    <div class="activity__search">
      <div class="activity__search__inner">
        <input class="activity__search__input" placeholder="请输入..." />
        <img class="activity__search__icon" src="@/assets/images/search.png" />
      </div>
    </div>
    <div class="activity__filters">
      <div class="activity__filter" v-for="filter in filters" :key="filter.key">
        <div class="activity__filter__label">{{filter.label}}</div>
        <div class="activity__filter__options">
          <span
            class="activity__filter__option"
            v-for="option in filter.options"
            :key="option.value"
            :class="{'active': filterValues[filter.key].includes(option.value)}"
            @click="toggleFilterSelect(filter.key,option.value)"
          >{{option.label}}</span>
          <span class="activity__filter__option calendar" v-if="filter.key === 'time'">
            <img src="@/assets/images/calendar.png" />
            <span>按日历</span>
          </span>
        </div>
      </div>
    </div>
    <div class="activity__list">
      <div class="activity__item" v-for="event of events" :key="event._id">
        <img :src="event.image || '@/assets/images/banner.jpeg'" />
        <div class="activity__item__content">
          <div class="activity__item__title">{{event.name}}</div>
          <div class="activity__item__time" v-if="event.startDate">{{event.startDate|datetimeDisp}}</div>
          <div class="activity__item__site">{{event.location._type === 'VirtualLocation' ? '线上':'线下'}}｜{{event.location.name}}</div>
          <!-- <div class="activity__item__price">¥ 100</div> -->
        </div>
      </div>
      <div class="activity__item">
        <img src="@/assets/images/banner.jpeg" />
        <div class="activity__item__content">
          <div class="activity__item__title">技术的社会面沙龙</div>
          <div class="activity__item__time">2020.05.31 19:30</div>
          <div class="activity__item__site">线上｜腾讯会议</div>
        </div>
      </div>
      <div class="activity__item">
        <img src="@/assets/images/banner.jpeg" />
        <div class="activity__item__content">
          <div class="activity__item__title">技术的社会面沙龙</div>
          <div class="activity__item__time">2020.05.31 19:30</div>
          <div class="activity__item__site">线上｜腾讯会议</div>
        </div>
      </div>
      <div class="activity__item">
        <img src="@/assets/images/banner.jpeg" />
        <div class="activity__item__content">
          <div class="activity__item__title">技术的社会面沙龙</div>
          <div class="activity__item__time">2020.05.31 19:30</div>
          <div class="activity__item__site">线上｜腾讯会议</div>
        </div>
      </div>
      <div class="activity__item">
        <img src="@/assets/images/banner.jpeg" />
        <div class="activity__item__content">
          <div class="activity__item__title">技术的社会面沙龙</div>
          <div class="activity__item__time">2020.05.31 19:30</div>
          <div class="activity__item__site">线上｜腾讯会议</div>
        </div>
      </div>
      <div class="activity__item">
        <img src="@/assets/images/banner.jpeg" />
        <div class="activity__item__content">
          <div class="activity__item__title">技术的社会面沙龙</div>
          <div class="activity__item__time">2020.05.31 19:30</div>
          <div class="activity__item__site">线上｜腾讯会议</div>
        </div>
      </div>
    </div>
    <div class="activity__pagination">
      <button>prev</button>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <button>next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { EventFilter, Event } from "../../services/gql/event";
import { mainStay } from "../../services/mainstay";
import dayjs from 'dayjs';
export default {
  name: "Activity",
  filters: {
    datetimeDisp: function (val: Date) {
      return dayjs(val).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  data() {
    return {
      filterValues: {
        theme: [0],
        site: [0],
        time: [0],
        organizer: [0]
      },
      filters: [
        {
          label: "主题：",
          key: "theme",
          options: [
            {
              label: "全部",
              value: 0
            },
            {
              label: "女权",
              value: 1
            },
            {
              label: "疫情",
              value: 2
            },
            {
              label: "虚拟世界",
              value: 3
            }
          ]
        },
        {
          label: "时间：",
          key: "time",
          options: [
            {
              label: "全部",
              value: 0
            },
            {
              label: "明天",
              value: 1
            },
            {
              label: "本周",
              value: 2
            },
            {
              label: "本月",
              value: 3
            },
            {
              label: "按日历",
              value: 4
            }
          ]
        },
        {
          label: "地点：",
          key: "site",
          options: [
            {
              label: "全部",
              value: 0
            },
            {
              label: "北京",
              value: 1
            },
            {
              label: "上海",
              value: 2
            },
            {
              label: "深圳",
              value: 3
            }
          ]
        },
        {
          label: "举办方：",
          key: "organizer",
          options: [
            {
              label: "全部",
              value: 0
            },
            {
              label: "706同学社",
              value: 1
            },
            {
              label: "706湾区",
              value: 2
            },
            {
              label: "706成都",
              value: 3
            },
            {
              label: "706成都",
              value: 4
            },
            {
              label: "同道读书会",
              value: 5
            },
            {
              label: "706电影",
              value: 6
            }
          ]
        }
      ],
      events: [] as Event[]
    };
  },
  methods: {
    toggleFilterSelect(this: any, filterKey: any, optionValue: any) {
      const filterValue = this.filterValues[filterKey];
      const index = filterValue.indexOf(optionValue);
      if (optionValue === 0) {
        return (this.filterValues[filterKey] = [0]);
      }
      const zeroIndex = filterValue.indexOf(0);
      if (zeroIndex !== -1) {
        this.filterValues[filterKey].splice(index, 1);
      }
      if (index === -1) {
        this.filterValues[filterKey].push(optionValue);
      } else {
        this.filterValues[filterKey].splice(index, 1);
      }
    },
    async fetchEvents(this: any, filter?: EventFilter) {
      const events = await mainStay.getEvents(filter);
      this.events = events;
    }
  },
  created(this: any) {
    this.fetchEvents();
  }
};
</script>

<style scoped lang="less">
.activity {
  width: 840px;
  margin: 50px auto 0 auto;

  &__search {
    margin-bottom: 40px;
    text-align: center;

    &__inner {
      position: relative;
      display: inline-block;
      height: 50px;
      font-size: 0;
      border: 1px solid #dfe1e5;
      padding: 0 50px 0px 20px;
      border-radius: 36px;
      overflow: hidden;

      & > input {
        width: 300px;
        height: 100%;
        font-size: 20px;
        line-height: 50px;
        outline: none;
        border: none;
      }

      & > img {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 10px;
        right: 15px;
      }
    }
  }

  &__filters {
    margin-bottom: 70px;
  }

  &__filter {
    display: flex;

    &__label {
      width: 70px;
      padding: 3px 10px;
      margin: 0px 7px 10px 7px;
    }

    &__options {
    }

    &__option {
      display: inline-block;
      padding: 3px 10px;
      margin: 0px 7px 10px 7px;
      border-radius: 2px;
      cursor: pointer;

      &.active {
        background: #01d88f;
        color: #fff;
      }

      &:hover {
        opacity: 0.8;
      }

      &.calendar {
        & > img {
          width: 20px;
          height: 20px;
          vertical-align: middle;
          margin-right: 2px;
        }

        & > span {
          vertical-align: middle;
        }
      }
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    position: relative;
    width: 200px;
    height: 300px;
    margin: 5px;
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;

    & > img {
      display: block;
      width: 100%;
      height: 50%;
      object-fit: cover;
    }

    &__content {
      color: #aaa;
      font-size: 12px;

      & > div {
        margin-top: 2px;
      }
    }

    &__title {
      font-size: 16px;
      font-weight: bold;
      color: #000;
      margin-bottom: 5px;
    }

    &__price {
      margin-top: 5px;
      font-size: 13px;
      font-weight: bold;
      color: #ff4800;
    }

    &__tag {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      padding: 2px 3px;
      font-size: 12px;
      font-weight: bold;
      color: #fff;
      background: #9ed10f;
    }

    /*&:nth-child(6n+1), &:nth-child(6n) {*/
    /*  width: 410px;*/

    /*  & > img {*/
    /*    position: absolute;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    z-index: -1;*/
    /*  }*/

    /*  .activity__item {*/
    /*    &__content {*/
    /*      padding: 20px 10px;*/
    /*      color: #fff*/
    /*    }*/

    /*    &__title {*/
    /*      color: #fff;*/
    /*      font-size: 30px;*/
    /*    }*/
    /*  }*/

    /*}*/
  }
}
</style>
