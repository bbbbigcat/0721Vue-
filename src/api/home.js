import request from "@utils/request";
import mockRequest from "@utils/mockRequest";
/**
 * 首页三级分类获取
 */

export const reqGetBaseCategoryList = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
/**
 * 首页首页轮播图数据
 */

export const reqGetBanners = () => {
  return mockRequest({
    method: "GET",
    url: "/banners",
  });
};
/**
 * 首页首页楼层数据
 */

export const reqGetFloors = () => {
  return mockRequest({
    method: "GET",
    url: "/floors",
  });
};
