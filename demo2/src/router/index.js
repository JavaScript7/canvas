import Vue from 'vue'
import Router from 'vue-router'
// import Manage from './components/manage/manage'
// import Login from './components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/manage',
      name: 'Manages',
      component: () => import('./component/manage/manage.vue')
    },
    {
      path: '/login',
      name: 'Logins',
      component: () => import('./component/login/login.vue')
    }
  ]
})
