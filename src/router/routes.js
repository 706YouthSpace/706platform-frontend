import Home from '@/views/Home'
import Activity from '@/views/Activity'
import ActivityDetail from '@/views/ActivityDetail'
import Publish from '@/views/Publish'
import NotFound from '@/views/NotFound'

export default [
  {
    path: '/',
    redirect: '/Home'
  }, {
    path: '/Home',
    component: Home
  }, {
    path: '/Activity',
    component: Activity
  }, {
    path: '/Detail',
    component: ActivityDetail
  }, {
    path: '/Publish',
    component: Publish
  }, {
    path: '/*',
    component: NotFound
  }
]
