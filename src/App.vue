<template>
  <div>
    <Header/>
    <router-view/>
    <Footer v-if="!$route.meta.isShowFooter"/>
  </div>
</template>
<script>
import Footer from './components/Footer'
import Header from './components/Header'
export default {
  name:'App',
  components: {
    Footer,
    Header
  }
}
</script>
<style lang='less' rel='stylesheet/less' scoped>
</style>