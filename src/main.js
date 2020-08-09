import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import './icons'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/common.less'
import * as service from './services/LocalService'

Vue.use(CKEditor)
Vue.use(ElementUI)
console.log(service)
Vue.prototype.$service = service
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
