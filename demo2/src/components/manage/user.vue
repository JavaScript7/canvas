<template>
  <div class="user">
    <h1>USER</h1>
    <form>
      <input type="text" v-model='newUser.name' placeholder="名字">
      <input type="text" v-model='newUser.tel' placeholder="手机号码">
      <button @click='addUser()'>添加</button>
    </form>
    <ul>
      <li v-for="item in users" :key="item.id">
        <input type="checkbox" class="toggle" v-model="item.contact">
        <span :class="{contact:item.contact}">{{item.name}}:{{item.tel}}</span>
        <button @click="del(item)">X</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {
      newUser: {},
      users: [
        { id: '001', name: 'qwe', tel: '112346', contact: false },
        { id: '002', name: 'asd', tel: '512346', contact: false },
        { id: '003', name: 'zxc', tel: '124146', contact: false }
      ]
    }
  },
  methods: {
    addUser () {
      if (this.newUser.name !== '' && this.newUser.tel !== '') {
        this.users.push({
          name: this.newUser.name,
          tel: this.newUser.tel,
          contact: false
        })
      }
    },
    del (item) {
      if (item.contact === true) {
        this.users.splice(this.users.indexOf(item), 1)
      }
    }
  }
}
</script>
<style scoped>
.contact{
  text-decoration: line-through;
}
</style>
