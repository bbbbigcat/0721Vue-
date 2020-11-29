/**
 * 封装axios拦截器
 * 1.设置公共的请求地址前缀
 * 2.请求拦截器：添加公共参数
 * 3.响应拦截器：
 *   成功：返回成功的Promise.值为成功的数据
 *   失败：返回失败的Promise,值为失败的原因
 */
import axios from "axios";
import { Message } from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const instance = axios.create({
  baseURL: "/api", //公共的基础路径
  headers: {},
});

//设置请求拦截器
instance.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});
// 设置响应拦截器
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    // 判断响应的code是否为200
    if (response.data.code == 200) {
      // 返回成功的响应数据
      return response.data.data;
    }

    const message = response.data;

    Message.error(message);

    // 功能失败，返回失败的回调函数
    return Promise.reject(message);
  },
  // 功能失效：当响应状态码不是 2xx
  (error) => {
    NProgress.done();
    const message = error.message || "网络错误";
    // 提示错误
    Message.error(message);
    return Promise.reject(message);
  }
);

export default instance;
