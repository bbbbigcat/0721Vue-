import { reqGetRegister } from "@api/user";

export default {
  state: {
    phone: "",
    password: "",
    code: "",
    repassword: "",
  },
  getters: {},
  actions: {
    async ReqgetRegister({ commit }, { phone, password }) {
      await reqGetRegister();
      commit("GET_SET_REGISTER", { phone, password });
    },
  },
  mutations: {
    GET_SET_REGISTER(state, { phone, password }) {
      state.phone = phone;
      state.password = password;
    },
  },
};
