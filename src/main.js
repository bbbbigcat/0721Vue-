// @ts-nocheck
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import "./plugins/element.js";
import "./mock/mockServer";
Vue.config.productionTip = false;

// 引入公共资源
import "./styles/iconfont.css";
/* eslint-disable no-new */
import "swiper/swiper-bundle.min.css";

new Vue({
  beforeCreate() {
    //初始化全局事件总线对象
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  // 应用router
  router,
  store,
}).$mount("#app");
// $mount可以手动挂载一个未挂载的实例，将里面的实例挂载在#app上。
