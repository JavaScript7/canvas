<template>
  <div id="app">
    <!-- <login></login> -->
    <!-- <manage></manage>
    <user></user>
    <router-link to="Manages">管理</router-link>
    <router-link to="Logins">登录</router-link>
    <router-view></router-view> -->
    <!-- <echart></echart> -->
    <!-- <tableBox></tableBox><tableBox></tableBox> -->
    <!-- <router-view></router-view> -->
    <Contain></Contain>
  </div>
</template>

<script>
import Login from './components/login/login'
import Manage from './components/manage/manage'
import User from './components/manage/user'
import Router from 'vue-router'
import Vue from 'Vue'
import Echart from './components/echarts/echart'
import tableBox from './components/manage/table'
import Contain from './components/manage/contain'

Vue.use(Router)

export default {
  name: 'App',
  components: {
    Login,
    Manage,
    User,
    Echart,
    tableBox,
    Contain
  },
  mounted () {},
  methods: {}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  position: relative;
  /* height: 100vh; */
}
</style>
