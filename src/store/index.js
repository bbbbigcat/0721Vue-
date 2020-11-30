import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import { reqGetBaseCategoryList } from "@api/home";

Vue.use(Vuex);
// 保存数据的容器
const state = {
  categoryList: [], //首页三级分类列表数据
};
// 包含多个用来间接修改state的函数对象
const actions = {
  // 获取首页三级列表数据
  async getCategoryList({ commit }) {
    // 发送请求
    const categoryList = await reqGetBaseCategoryList();
    // 触发mutation函数
    commit("GET_CATEGORY_LIST", categoryList);
  },
};
// 包含多个直接修改state的函数对象
const mutations = {
  GET_CATEGORY_LIST(state, categoryList) {
    state.categoryList = categoryList;
  },
};

const getters = {};

export default new Vuex.Store({
  // 这里定义的是总的 state,actions,mutations,getters,modules,如果有多个页面要操作可以把方法定义在这
  state,
  actions,
  mutations,
  getters,
  modules,
});
