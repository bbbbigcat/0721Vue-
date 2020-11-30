// @ts-nocheck
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import "./plugins/element.js";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  // 应用router
  router,
  store,
}).$mount("#app");
// $mount可以手动挂载一个未挂载的实例，将里面的实例挂载在#app上。
