import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

Vue.use(Vuex);
// 保存数据的容器
const state = {};
// 包含多个用来间接修改state的函数对象
const actions = {};
// 包含多个直接修改state的函数对象
const mutations = {};

const getters = {};

export default new Vuex.Store({
  // 这里定义的是总的 state,actions,mutations,getters,modules,如果有多个页面要操作可以把方法定义在这
  state,
  actions,
  mutations,
  getters,
  modules,
});
