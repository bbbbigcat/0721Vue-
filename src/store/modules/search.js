import { reqGetProductList } from "@api/search";

export default {
  // 定义存储数据对象
  state: {
    productList: {
      trademarkList: [], // 品牌数据
      attrsList: [], // 品牌属性数据
      goodsList: [], // 商品数据
    },
  },
  // 定义间接修改state数据对象
  actions: {
    async getProductList({ commit }, data = {}) {
      const productList = await reqGetProductList(data);
      console.log(productList);
      commit("GET_TRADEMARK_LIST", productList);
    },
  },
  // 定义直接修改state数据对象
  mutations: {
    GET_TRADEMARK_LIST(state, productList) {
      state.productList = productList;
    },
  },
  // 定义计算属性的对象
  getters: {
    trademarkList(state) {
      return state.productList.trademarkList;
    },
    attrsList(state) {
      return state.productList.attrsList;
    },
    goodsList(state) {
      return state.productList.goodsList;
    },
  },
};
