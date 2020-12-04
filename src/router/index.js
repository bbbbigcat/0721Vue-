import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import Detail from "../views/Detail";
import ShopCart from "../views/ShopCart";
Vue.use(VueRouter);

/**
 * 重写$router上的push和replace方法，这是因为vue本身更新过程中的bug，如果使用原来的push和replace方法重复点击跳转路由会报错。
 *
 */
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
// 官方文档上面push和replace方法默认传三个参数，其中onComplete代表成功的回调，onAbort代表失败的回调
VueRouter.prototype.push = function(location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call(this, location, onComplete, () => {});
};

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      meta: { isShowFooter: true },
      path: "/login",
      component: Login,
    },
    {
      meta: { isShowFooter: true },
      path: "/register",
      component: Register,
    },
    {
      name: "search",
      path: "/search/:searchText?", // 占位的方式实现params的方式传参
      component: Search,
    },
    {
      path: "/detail", // 占位的方式实现params的方式传参
      component: Detail,
    },
    {
      path: "/shopcart", // 占位的方式实现params的方式传参
      component: ShopCart,
    },
  ],
});
