import { reqGetDetail } from "@api/detail";

export default {
  // 定义存储数据对象
  state: {
    ProductDetailList: {
      categoryView: {},
      spuSaleAttrList: [],
      skuInfo: {},
    },
  },
  // 定义间接修改state数据对象
  actions: {
    async getProductDetail({ commit }, id) {
      const ProductDetailList = await reqGetDetail(id);
      commit("GET_PRODUCT_DETAIL", ProductDetailList);
    },
  },
  // 定义直接修改state数据对象
  mutations: {
    GET_PRODUCT_DETAIL(state, ProductDetailList) {
      state.ProductDetailList = ProductDetailList;
    },
  },
  // 定义计算属性的对象
  getters: {
    categoryView(state) {
      return state.ProductDetailList.categoryView;
    },
    spuSaleAttrList(state) {
      return state.ProductDetailList.spuSaleAttrList;
    },
    skuInfo(state) {
      return state.ProductDetailList.skuInfo;
    },
  },
};
