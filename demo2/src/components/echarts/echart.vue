<template>
 <div class="echarts">
   <select ref="sel">
     <option ref="opt" v-for="(item, index) in options" :key="index">{{item.text}}</option>
   </select>
   <button @click="selectData()">获取</button>
   <button @click="setSelect()">重置</button>
   <div id="myEchart" ref="myEchart" :style="{width: '750px', height: '400px'}"></div>
 </div>
</template>
<script>
// var echarts = require('echarts')
// import echarts from 'echarts'
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'echart',
  data () {
    return {
      options: [
        {id: '01', text: '一月'},
        {id: '02', text: '二月'},
        {id: '03', text: '三月'},
        {id: '04', text: '四月'},
        {id: '05', text: '五月'},
        {id: '06', text: '六月'},
        {id: '07', text: '七月'},
        {id: '08', text: '八月'},
        {id: '09', text: '九月'},
        {id: '10', text: '十月'},
        {id: '11', text: '十一月'},
        {id: '12', text: '十二月'}
      ],
      option: {
        title: {
          text: '在vue中使用echart'
        },
        tooltip: {},
        legend: {
          data: ['月份']
        },
        xAxis: {
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
        },
        series: [
          {
            name: '月份',
            type: 'bar',
            color: 'green',
            data: [5, 20, 4, 13, 25, 10, 2, 5, 55, 23, 45, 36]
          }
        ]
      },
      data: [3, 5, 8, 9, 1, 7, 45, 13, 50, 23, 38, 33]
    }
  },
  mounted () {
    this.getData()
    // this.selectData()
    this.drawEchart()
  },
  methods: {
    drawEchart () {
      // let myEchart = echarts.init(document.getElementById('myEchart'))
      let myEchart = echarts.init(this.$refs.myEchart)
      myEchart.setOption(this.option)
    },
    getData () {
      this.option.series[0].data = this.data
    },
    selectData () {
      let sel = this.$refs.sel
      let i = sel.selectedIndex
      let val = this.$refs.opt[i].value
      // console.log(val)// 获取当前值
      let index = this.option.xAxis.data.indexOf(val)
      // console.log(index)// 当前值在数组的索引值
      if (index !== -1) {
        this.option.xAxis.data.splice(index, 1)
        this.data.splice(index, 1)
      }
      this.drawEchart()
      // this.data.shift()
    },
    setSelect () {
      this.getData()
      this.drawEchart()
      console.log(12)
    }
  }
}
</script>
<style scoped>
</style>
