import request from "@utils/request";
export function reqGetProductList(data) {
  return request.post("/list", data);
}
