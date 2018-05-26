<template>
 <div class="login">
   <div class="loginForm">
     <img src="" alt="">
     <h3>登录框</h3>
     <input type="text" placeholder="请输入用户名...">
     <input type="text" placeholder="请输入密码...">
     <button @click="getDataLogin()">登录</button>
   </div>
 </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    getDataLogin () {
      this.axios({
        url: 'http://www.wwtliu.com/sxtstu/blueberrypai/login.php',
        methods: 'post'
      }).then((res) => {
        console.log(res)
        let msg = res.data.msg || '用户名和密码不能为空！'
        console.log(msg)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  width: 100%;
  height: 980px;
  overflow: none;
  background: url('../../assets/img/贸牛内容管理系统登录页bg.jpg') no-repeat;
}
.login .loginForm{
  width: 100vh;
  height:400px;
  border: 1px solid red;
  margin: 0 auto;
}
</style>
