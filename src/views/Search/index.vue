<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-show="options.keyword" @click="delKeyword">
              关键词: {{ options.keyword }}<i>x</i>
            </li>
            <li
              class="with-x"
              v-show="options.categoryName"
              @click="delCategory"
            >
              分类名称: {{ options.categoryName }}<i>x</i>
            </li>
            <li class="with-x" v-show="options.trademark" @click="delTrademark">
              品牌: {{ options.trademark.split(":")[1] }}<i>x</i>
            </li>
            <li
              class="with-x"
              v-for="(prop, index) in options.props"
              :key="prop"
              @click="delProp(index)"
            >
              {{ prop.split(":")[2] }}: {{ prop.split(":")[1] }}<i>×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector :addTrademark="addTrademark" @add-prop="addProp" />

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li
                  :class="{ active: options.order.indexOf('1') > -1 }"
                  @click="setOrder('1')"
                >
                  <a
                    >综合<i
                      :class="{
                        iconfont: true,
                        'icon-direction-down': isAllDown, // 降序图标
                        'icon-direction-up': !isAllDown, // 升序图标
                      }"
                    ></i
                  ></a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li
                  :class="{ active: options.order.indexOf('2') > -1 }"
                  @click="setOrder('2')"
                >
                  <a>
                    价格
                    <span>
                      <i
                        :class="{
                          iconfont: true,
                          'icon-direction-up': true,
                          deactive:
                            options.order.indexOf('2') > -1 && isPriceDown,
                        }"
                      ></i>
                      <i
                        :class="{
                          iconfont: true,
                          'icon-direction-down': true,
                          deactive:
                            options.order.indexOf('2') > -1 && !isPriceDown,
                        }"
                      ></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link :to="`/Detail/${goods.id}`"
                      ><img :src="goods.defaultImg"
                    /></router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>&nbsp;&nbsp;
                      <i>{{ goods.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <router-link
                      :to="`/Detail/${goods.id}`"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >{{ goods.title }}</router-link
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 分页器 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="options.pageNo"
            :pager-count="7"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="5"
            background
            layout="
              prev,
              pager, 
              next, 
              total, 
              sizes, 
              jumper"
            :total="productList.total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import TypeNav from "@comps/TypeNav";
import SearchSelector from "./SearchSelector/SearchSelector";
export default {
  name: "Search",
  data() {
    return {
      options: {
        category1Id: "", // 一级分类Id
        category2Id: "", // 二级分类id
        category3Id: "", // 三级分类id
        categoryName: "", // 分类名称
        keyword: "", // 搜索内容
        order: "", // 排序方式
        pageNo: 1, // 分页的页码
        pageSize: 5, // 分页的每页商品数量
        props: [], //商品属性
        trademark: "", //品牌
      },
      isAllDown: true,
    };
  },
  watch: {
    $route() {
      this.updateProductList();
    },
  },
  components: {
    SearchSelector,
    TypeNav,
  },
  computed: {
    ...mapState({
      productList: (state) => state.search.productList,
    }),
    ...mapGetters(["goodsList"]),
  },
  methods: {
    ...mapActions(["getProductList"]),
    // 更新商品列表
    updateProductList() {
      const { searchText: keyword } = this.$route.params;
      const {
        categoryName,
        category1Id,
        category2Id,
        category3Id,
      } = this.$route.query;
      const options = {
        ...this.options, // 携带上所有params参数
        keyword, // 以下参数会覆盖之前的参数
        categoryName,
        category1Id,
        category2Id,
        category3Id,
      };
      this.options = options;
      this.getProductList(options);
    },
    // 删除keyword关键字
    delKeyword() {
      this.options.keyword = "";
      // 触发清空关键字函数
      this.$bus.$emit("clearSearchText");
      this.$router.replace({
        name: "search",
        query: this.$route.query,
      });
    },
    // 删除category数据
    delCategory() {
      this.categoryName = "";
      this.category1Id = "";
      this.category2Id = "";
      this.category3Id = "";
      this.$router.replace({
        name: "search",
        params: this.$route.params,
      });
    },
    // 增加trademark数据
    addTrademark(trademark) {
      // 判断属性是否存在
      if (this.options.trademark === trademark) return;
      this.options.trademark = trademark;
      this.updateProductList();
    },
    // 删除trademark数据
    delTrademark() {
      this.options.trademark = "";
      this.updateProductList();
    },
    // 添加品牌属性
    addProp(prop) {
      // 判断属性是否存在
      if (this.options.props.includes(prop)) return;
      this.options.props.push(prop);
      this.updateProductList();
    },
    // 删除品牌属性
    delProp(index) {
      this.options.props.splice(index, 1);
      this.updateProductList();
    },
    // 设置排序方式  1:desc
    setOrder(order) {
      let [orderNum, orderType] = this.options.order.split(":");

      // 不相等点击的就是第一次：不改变图标
      // 相等点击的就是第二次：改变图标
      if (orderNum === order) {
        // 看order是1改综合排序
        // 看order是1改价格排序
        if (order === "1") {
          this.isAllDown = !this.isAllDown;
        } else {
          this.isPriceDown = !this.isPriceDown;
        }
        orderType = orderType === "desc" ? "asc" : "desc";
      } else {
        // 点击一次, 如果点击的是价格，应该初始化为升序
        if (order === "1") {
          orderType = this.isAllDown ? "desc" : "asc";
        } else {
          this.isPriceDown = false;
          orderType = "asc";
        }
      }

      this.options.order = `${order}:${orderType}`;
      this.updateProductList();
    },
    // 当每页条数发生变化触发
    handleSizeChange(pageSize) {
      // console.log("pageSize", pageSize);
      this.options.pageSize = pageSize;
      this.updateProductList();
    },
    // 当页码发生变化触发
    handleCurrentChange(pageNo) {
      // console.log("pageNo", pageNo);
      this.options.pageNo = pageNo;
      this.updateProductList(pageNo);
    },
  },
  mounted() {
    // 一上来发送请求要携带参数
    // 结构赋值提取 params 中 searchText 属性
    // 将 searchText 重命名为 keyword
    this.updateProductList();
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: flex;
                justify-content: space-around;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                  i {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>