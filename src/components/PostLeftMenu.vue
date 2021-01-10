<template>
  <div class="left-menu">
    <ul>
      <li class="left-menu__item"
          v-for="route in routes"
          :key="route.path">
        <template v-if="route.children&&route.children.length">
          {{route.name}}
          <ul>
            <li class="left-menu__item"
                v-for="subRoute in route.children"
                :key="subRoute.path">
              <router-link :to="subRoute.path">{{subRoute.name}}</router-link>
            </li>
          </ul>
        </template>
        <router-link v-else
                     :to="route.path">{{route.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostLeftMenu',
  data () {
    return {
      routes: [
        {
          name: '我参加的活动',
          path: '/activity/join'
        },
        {
          name: '我组织的活动',
          children: [
            {
              name: '管理活动',
              path: '/activity/organize'
            }, {
              name: '数据分析',
              path: '/activity_analysis'
            }, {
              name: '收益分析',
              path: '/activity_income_analysis'
            }, {
              name: '评论管理',
              path: '/activity_comment_setting'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.left-menu {
  flex: 0 0 200px;
  margin-right: 30px;
  padding-top: 20px;

  &__item {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 40px;
  }

  ul {
    list-style: none;

    li {
      cursor: pointer;
      :hover {
        opacity: 0.9;
      }
    }
  }
}
</style>
