import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'current',
  routes
})

export default router
