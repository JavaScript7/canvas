<template>
  <div id="i18n">
    <button @click="changeLanguage">切换中英文</button>
    <h1 style="font-size: 16px; text-align: center;">
      {{$t('messageLanguage.hello')}}
    </h1>
  </div>
</template>
<script>
export default {
  name: 'i18n',
  data () {
    return {}
  },
  methods: {
    changeLanguage () {
      console.log(this.i18n)
    }
  }
}
</script>
<style>

</style>
