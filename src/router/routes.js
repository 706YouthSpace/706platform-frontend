import Home from '@/views/Home'
import Activity from '@/views/Activity'
import ActivityDetail from '@/views/ActivityDetail'

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
    }
]
