import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import './icons'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/style/common.less'

Vue.use(CKEditor)
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
