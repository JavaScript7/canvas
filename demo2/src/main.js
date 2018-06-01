// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import User from './components/manage/user.vue'
import Manage from './components/manage/manage.vue'
import echarts from 'echarts'
import axios from 'axios'
import VueI18n from 'vue-i18n'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.prototype.$echarts = echarts
Vue.use(echarts)
Vue.use(VueI18n)
Vue.prototype.axios = axios

// 设置路由
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/user', components: User},
    {path: '/manage', componentd: Manage}
  ]
})
// 中英文转换
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'en': require('./components/i18n/English'),
    'zh': require('./components/i18n/Chinese')
  }
})
export default i18n

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
