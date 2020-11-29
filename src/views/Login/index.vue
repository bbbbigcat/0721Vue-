<template>
  <div>
    Login...
    <el-button @click="Cserve">请求</el-button>
  </div>
</template>
<script>
import {reqLogin} from "@api/user"
export default {
  name:'Login',
  methods:{
    Cserve(){
    const aaa = reqLogin('13700000000','111111')
     console.log(aaa);
    }
  }
}
</script>
<style lang='less' rel='stylesheet/less' scoped>
</style>