<template>
  <div>
    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>尚品汇欢迎您！</p>
            <p>
              <span>请</span>
              <!-- <a href="###">登录</a>
              <a href="###" class="register">免费注册</a> -->
              <router-link to="/Login">登录</router-link>
              <router-link to="/register">免费注册</router-link>
            </p>
          </div>
          <div class="typeList">
            <a href="###">我的订单</a>
            <a href="###">我的购物车</a>
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
      <div class="bottom">
        <h1 class="logoArea">
          <router-link class="logo" title="尚品汇" to="/">
            <img src="./images/logo.png" alt="" />
          </router-link>
        </h1>
        <div class="searchArea">
          <form action="###" class="searchForm">
            <input
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
            />
            <button class="sui-btn btn-xlarge btn-danger" type="button" @click="Search">
              搜索
            </button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods:{
    Search(){
      // 编程式导航：因为将来要做搜索功能（要发送请求）
      this.$router.push("/search");
    }
  }
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.header{
  
}
  .top{
    background: #eaeaea;
  }
  .container {
    margin: 0 auto;
    width: 1200px;
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
  }
  .loginList {
    display: flex;
  }
  .loginList p:nth-child(1){
    margin-right: 10px;
  }
  .loginList p:nth-child(2){
    margin-left: 10px;
  }
  .loginList p:nth-child(2) span{
    margin-right: 5px;
  }
  .loginList p:nth-child(2) a:nth-child(2){
    margin-right: 5px;
  }
  .typeList a {
    padding: 0 10px;
    border-left: 1px solid #b3aeae;
  }
  .typeList a:nth-child(1) {
    border: none;
  }
  .bottom {
    display: flex;
    width: 1200px;
    height: 106px;
    margin: 0 auto;
    line-height: 106px;
    justify-content: space-between;
  }
  .logoArea img{
    margin: 25px 50px;
  }
  .searchArea input{
    outline: none;
    padding-left: 5px;
    width: 486px;
    height: 28px;
    border: 2px solid #ea4a36;
  }
  .searchArea button {
    outline: none;
    width: 68px;
    height: 32px;
    background: #ea4a36;
    border: none;
  }
</style>