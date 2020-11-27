// @ts-nocheck
import Vue from "vue";
import App from "./App";

import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  // 应用router
  router,
}).$mount("#app");
// $mount可以手动挂载一个未挂载的实例，将里面的实例挂载在#app上。
