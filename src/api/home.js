import request from "@utils/request";

/**
 * 首页三级分类获取
 */

export const reqGetBaseCategoryList = () => {
  return request({
    methods: "GET",
    url: "/product/getBaseCategoryList",
  });
};
