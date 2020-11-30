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
              <router-link to="/login">登录</router-link>
              <router-link to="/register" class="register"
                >免费注册</router-link
              >
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
          <form class="searchForm" @submit.prevent="search">
            <input
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
              v-model="searchText"
            />
            <!-- 
            问题：点击搜索，路径出现问号（原因是提交了表单）
            1. button 按钮如果没有type 那么在表单中 默认type就是submit
              此时会提交表单，事件就绑定在form上
                @submit.prevent="search"
            2. 不用form表单
                @click="search"
           -->
            <button class="sui-btn btn-xlarge btn-danger">搜索</button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "", // 用来收集文本框中的数据
    };
  },
  methods: {
    /**
     * 搜索功能函数
     */
    // Search(){
    //   // 获取搜索的数据
    //   const { searchText } = this;
    //   //判断是否要添加params参数
    //   const params = searchText ? `/${searchText}` : ''
    //   // 拼接路径
    //   const location = "/Search" + params
    //   // 编程式导航：因为将来要做搜索功能（要发送请求）
    //   this.$router.push(location);
    // }
    search() {
      const { searchText } = this;
      const location = {
        name: "search",
      };
      if (searchText) {
        location.params = {
          searchText,
        };
      }
      // 添加query参数
      const { categoryName } = this.$route.query;

      if (categoryName) {
        location.query = this.$route.query;
      }
      this.$router.push(location);
      // params的方式传参
      // this.$router.push(location);
      // query 的方式传参
      // this.$router.push(`/search?searchText=${this.searchText}`);

      // 使用对象的方式进行参数的传递，但是也分params和query的方式
      // query 的方式  以对象的形式进行传参
      // this.$router.push({
      //   path: "/search",
      //   query: { searchText: this.searchText },
      // });
      // this.$router.push({
      //   name: "/search",
      //   query: { searchText: this.searchText },
      // });
      // params 的方式  以对象的形式进行传参
      // this.$router.push({
      //   name: "search",
      //   params: { searchText: this.searchText },
      // });

      // 当使用对象的方式进行参数传参的时候, query方式可以使用path和name，但是params方式只能使用name
      // if (this.searchText) {
      //   this.$router.push({
      //     name: "search",
      //     params: { searchText: this.searchText },
      //   });
      // } else {
      //   this.$router.push({ name: "search" });
      // }
    },
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
.header {
}
.top {
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
.loginList p:nth-child(1) {
  margin-right: 10px;
}
.loginList p:nth-child(2) {
  margin-left: 10px;
}
.loginList p:nth-child(2) span {
  margin-right: 5px;
}
.loginList p:nth-child(2) a:nth-child(2) {
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
.logoArea img {
  margin: 25px 50px;
}
.searchArea input {
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