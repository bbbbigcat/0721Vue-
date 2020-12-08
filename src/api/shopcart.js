import request from "@utils/request";

// 封装一个发送请求的功能函数获取购物车购物车列表
// 必传参数id要传进去
export const reqGetShopCart = () => {
  //将request的返回值返回出去
  // 外面可以接受到request返回值（promise对象），通过这个promise对象可以判断请求成功。失败
  return request({
    method: "GET",
    url: `/cart/cartList`,
  });
};
