// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import User from './components/manage/user.vue'
import Manage from './components/manage/manage.vue'
import echarts from 'echarts'
import axios from 'axios'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(Router)
// Vue.prototype.$echarts = echarts
Vue.use(echarts)
Vue.prototype.axios = axios

// 设置路由
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/user', components: User},
    {path: '/manage', componentd: Manage}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
