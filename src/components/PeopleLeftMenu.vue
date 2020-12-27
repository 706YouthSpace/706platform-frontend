<template>
  <div class="left-menu">
    <ul>
      <div class="left-menu__info">
        <div class="avatar">
          <!-- <el-avatar :src='imgURL'></el-avatar> -->
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div class="name">{{name}}</div>
        <div class="introduction">{{introduction}}</div>
      </div>
      <li class="left-menu__item"
          v-for="(route,index) in routes"
          :key="route.name">
        <router-link :to="route.path">
          <span class="left-menu__item"><i :class=" route.icon"
               @click='changeColor(index)'
               :style="route.styleObj"><span class="left-menu__item__name">{{route.name}}</span> </i></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PeopleLeftMenu',
  props: {
    introduction: {
      type: String,
      default: '这里是介绍'
    },
    name: {
      type: String,
      default: '名字'
    },
    imgURL: {
      type: String,
      default: '@/assets/images/activities/activity_bg_1.png'
    }
  },
  data () {
    return {
      isactive: 0,
      routes: [
        {
          name: '介绍',
          path: '/people/introduction',
          icon: 'fa fa-address-card fa-2x',
          styleObj: 'color: #0b800b;'
        },
        {
          name: '人生',
          path: '/people/introduction',
          styleObj: '',
          icon: 'fa fa-road fa-2x'
        },
        {
          name: '文章',
          path: '/people/introduction',
          styleObj: '',
          icon: 'fa fa-edit fa-2x'
        },
        {
          name: '社交',
          path: '/people/introduction',
          styleObj: ' ',
          icon: 'fa fa-users fa-2x'

        },
        {
          name: '动态',
          path: '/people/introduction',
          styleObj: ' ',
          icon: 'fa fa-eye fa-2x'

        }
      ]
    }
  },
  methods: {
    changeColor (index) {
      this.routes.forEach(function (item) {
        item.styleObj = ''
      })
      this.routes[index].styleObj = 'color: #0b800b;'
    }
  }
}
</script>

<style scoped lang="less">
.left-menu {
  position: fixed;
  width: 190px;
  height: 1200px;
  flex: 0 0 160px;
  margin-right: 10px;
  padding-top: 10px;
  background-color: #ffffff;
  &__info {
    height: 84px;
    position: relative;
    .avatar {
      position: absolute;
      width: 48px;
      height: 48px;
      left: 9px;
      top: 18px;
    }
    .name {
      position: absolute;
      top: 27px;
      left: 65px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: #222222;
    }
    .introduction {
      position: absolute;
      float: left;
      color: #7a7979;
      top: 45px;
      left: 66px;
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    }
  }
  &__item {
    height: 52px;
    width: 200px;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    i {
      margin-top: 15px;
      color: #c2c2c2;
      margin-left: 20px;
    }
    &__name {
      color: grey;
      font-size: 14px;
      margin-bottom: 12px;
      line-height: 40px;
      margin-left: 14px;
    }
  }
  &__item:hover {
    height: 52px;
    width: 200px;
    font-size: 14px;
    font-weight: 600;
    background-color: #f2f2f2;
  }
}
</style>
