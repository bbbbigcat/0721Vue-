import request from "@utils/request";

// 封装一个发送请求的功能函数获取商品详情数据
// 必传参数id要传进去
export const reqGetDetail = (id) => {
  //将request的返回值返回出去
  // 外面可以接受到request返回值（promise对象），通过这个promise对象可以判断请求成功。失败
  return request({
    method: "GET",
    url: `/item/${id}`,
  });
};
