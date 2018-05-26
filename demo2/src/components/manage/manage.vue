<template>
 <div class="manage">
   <fieldset>
      <legend>管理</legend>
      <div>
        <span>姓名：</span>
        <input type="text" placeholder="请输入姓名" v-model="newPerson.name">
      </div>
      <div>
        <span>年龄：</span>
        <input type="text" placeholder="请输入年龄" v-model="newPerson.age">
      </div>
      <div class="sex">
        <span>性别：</span>
        <select v-model="newPerson.sex">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <div>
        <span>电话号码：</span>
        <input type="text" placeholder="请输入电话号码" v-model="newPerson.tel">
      </div>
      <button @click="addPerson()">添加新人员</button>
    </fieldset>
    <div class="search">
      <input type="text" v-model="val"><button @click="searchVal(val)">搜索</button>
    </div>
    <table>
      <thead>
        <tr>
          <td>姓名</td>
          <td>年龄</td>
          <td>性别</td>
          <td>电话号码</td>
          <td>删除</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in persons" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.tel}}</td>
          <td><button @click="delPerson(index)">删除</button></td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
export default {
  name: 'manage',
  data () {
    return {
      persons: [
        { id: '001', name: 'lin', age: 12, sex: '男', tel: 12345546 },
        { id: '002', name: 'gsgs', age: 12, sex: '男', tel: 12345546 },
        { id: '003', name: 'ggfgj', age: 12, sex: '女', tel: 12345546 },
        { id: '004', name: 'kiuk', age: 12, sex: '女', tel: 12345546 },
        { id: '005', name: 'cvxnjg', age: 12, sex: '男', tel: 12345546 }
      ],
      newPerson: { name: '', age: '', sex: '', tel: '' },
      val: ''
    }
  },
  methods: {
    addPerson: function () {
      if (this.newPerson.name !== '' && this.newPerson.age >= 1 && this.newPerson.sex !== '' && this.newPerson.tel !== '') {
        let add = confirm('确定添加？')
        if (add) {
          this.persons.push(this.newPerson)
        } else {
          alert('填的信息有空或者不符合!')
          return false
        }
      }
    },
    delPerson: function (index) {
      if (confirm('确定删除?')) {
        this.persons.splice(index, 1)
      }
    },
    searchVal: function (val) {
      var personIofo = this.persons.filter(e => {
        return e.name.indexOf(val) !== -1
      })
      return personIofo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.manage{
  width: 300px;
}
.loginForm{
  width: 300px;
  height: 240px;
  border: 1px solid black;
}
legend{
  /* margin-left: 20px; */
  text-align: center;
}
</style>
