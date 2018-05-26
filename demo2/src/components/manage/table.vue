<template>
  <div class="table">
    <ul>
      <li v-for="(item,index) in country" :key="index">
        <p>{{item.title}}</p>
        <img :src="item.img" alt="" width="200px" height="120px">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tableBox',
  data () {
    return {
      country: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.axios({
        url: 'http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php',
        // url: 'http://www.wwtliu.com/sxtstu/iwentest/',
        methods: 'post'
      }).then((res) => {
        let data = res.data.banner
        console.log(res)
        this.country = data
        if (res.status === 200) {
          console.log('请求成功！')
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.table{
  width: 600px;
  height: 600px;
  margin: 50px auto;
}
.table ul li{
  float: left;
  margin-left: 20px;
  list-style: none;
  text-align: center;
  font-size: 16px;
  color: black;
}
</style>
