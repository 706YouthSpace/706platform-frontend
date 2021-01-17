import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'
import ActivityDetail from '@/views/ActivityDetail'
import PeopleIntroduction from '@/views/PeopleIntroduction/PeopleIntroduction.vue'
import PeopleEdit from '@/views/PeopleEdit/PeopleEdit.vue'
import ActivityList from '@/views/ActivityList'
import Activity from '@/views/Activity'
import ActivityCreate from '@/views/ActivityCreate'
import ActivityJoin from '@/views/ActivityJoin/ActivityJoin'
import ActivityOrganize from '@/views/ActivityOrganize/ActivityOrganize'
import Join from '@/views/Join'
import NotFound from '@/views/NotFound'
import People from '@/views/People/index.vue'
// import Vue from 'vue'
// import VueRouter from 'vue-router'
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/reg',
    component: Register,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/activity/list',
    component: ActivityList,
    meta: {
      title: '活动'
    }
  },
  {
    path: '/activity/detail',
    component: ActivityDetail,
    meta: {
      title: '活动详情'
    }
  },
  {
    path: '/activity',
    component: Activity,
    children: [
      {
        path: 'create',
        component: ActivityCreate,
        meta: {
          title: '发起活动'
        }
      },
      {
        path: 'join',
        component: ActivityJoin,
        meta: {
          title: '我参加的活动'
        }
      },
      {
        path: 'organize',
        component: ActivityOrganize,
        meta: {
          title: '我组织的活动'
        }
      }
    ]
  },
  {
    path: '/join',
    component: Join
  },
  {
    path: '/people',
    component: People,
    children: [
      {
        path: 'introduction/:id',
        component: PeopleIntroduction,
        meta: {
          title: '信息'
        }
      },
      {
        path: 'edit',
        component: PeopleEdit,
        meta: {
          title: '信息编辑'
        }
      },
      {
        path: 'organize',
        component: ActivityOrganize,
        meta: {
          title: '我组织的活动'
        }
      }
    ]
  },
  {
    path: '/*',
    component: NotFound
  }
]

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     component: Home,
//     meta: {
//       title: '首页'
//     }
//   },
//   {
//     path: '/reg',
//     component: Register,
//     meta: {
//       title: '注册'
//     }
//   },
//   {
//     path: '/login',
//     component: Login,
//     meta: {
//       title: '注册'
//     }
//   },
//   {
//     path: '/activity/list',
//     component: ActivityList,
//     meta: {
//       title: '活动'
//     }
//   },
//   {
//     path: '/activity/detail',
//     component: ActivityDetail,
//     meta: {
//       title: '活动详情'
//     }
//   },
//   {
//     path: '/activity',
//     component: Activity,
//     children: [
//       {
//         path: 'create',
//         component: ActivityCreate,
//         meta: {
//           title: '发起活动'
//         }
//       },
//       {
//         path: 'join',
//         component: ActivityJoin,
//         meta: {
//           title: '我参加的活动'
//         }
//       },
//       {
//         path: 'organize',
//         component: ActivityOrganize,
//         meta: {
//           title: '我组织的活动'
//         }
//       }
//     ]
//   },
//   {
//     path: '/join',
//     component: Join
//   },
//   {
//     path: '/people',
//     component: People,
//     children: [
//       {
//         path: 'introduction/:id',
//         component: PeopleIntroduction,
//         meta: {
//           title: '信息'
//         }
//       },
//       {
//         path: 'edit',
//         component: PeopleEdit,
//         meta: {
//           title: '信息编辑'
//         }
//       },
//       {
//         path: 'organize',
//         component: ActivityOrganize,
//         meta: {
//           title: '我组织的活动'
//         }
//       }
//     ]
//   },
//   {
//     path: '/*',
//     component: NotFound
//   }
// ]

// const router = new VueRouter({
//   routes
// })
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

// router.beforeEach((to, from, next) => {
//   console.log('before')
//   if (to.path === '/login') return next()
//   const token = sessionStorage.getItem('token')
//   if (!token) return next('/login')
//   next()
// })
// export default router
