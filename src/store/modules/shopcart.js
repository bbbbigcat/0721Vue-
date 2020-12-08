import { reqGetShopCartreqGetShopCart } from "@api/shopcart";

export default {
  state: {
    shopcartList: [],
  },
  getters: {
    shopcartList(state) {
      return state.shopcartList;
    },
  },
  actions: {
    async reqShowShopCart({ commit }) {
      const reqLookShopCart = await reqGetShopCart();
      commit("REQ_LOOK_SHOPCART", reqLookShopCart);
    },
  },
  mutations: {
    REQ_LOOK_SHOPCART(state, shopcartList) {
      state.shopcartList = shopcartList;
    },
  },
};
