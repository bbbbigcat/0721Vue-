<template>
  <div>
    <!-- 公司及服务介绍 -->
    <div class="Company">
      <div class="service">
        <ul>
          <li><a href="##" class="servicelink1">上门自提</a></li>
          <li><a href="##">211限时达</a></li>
          <li><a href="##">配送服务查询</a></li>
          <li><a href="##">配送费收取标准</a></li>
          <li><a href="##">海外配送</a></li>
          <li><a href="##">支付方式</a></li>
        </ul>
        <ul>
          <li><a href="##" class="servicelink1">货到付款</a></li>
          <li><a href="##">在线支付款</a></li>
          <li><a href="##">分期付款</a></li>
          <li><a href="##">邮局汇款</a></li>
          <li><a href="##">公司转帐</a></li>
          <li><a href="##">售后服务</a></li>
        </ul>
        <ul>
          <li><a href="##" class="servicelink1">售后政策</a></li>
          <li><a href="##">价格保护</a></li>
          <li><a href="##">退款说明</a></li>
          <li><a href="##">返修/退换货</a></li>
          <li><a href="##">取消订单</a></li>
          <li><a href="##"> 特色服务</a></li>
        </ul>
        <ul>
          <li><a href="##" class="servicelink1"> 夺宝岛</a></li>
          <li><a href="##">DIY装机</a></li>
          <li><a href="##">延时服务</a></li>
          <li><a href="##">尚品汇E卡</a></li>
          <li><a href="##">尚品汇通信</a></li>
          <li><a href="##">配送方式</a></li>
        </ul>
        <ul>
          <li><a href="##" class="servicelink1">购物指南</a></li>
          <li><a href="##">常见问题</a></li>
          <li><a href="##">生活旅行/团购</a></li>
          <li><a href="##">会员介绍</a></li>
          <li><a href="##">购物流程</a></li>
          <li><a href="##">购物指南</a></li>
        </ul>
        <ul>
          <li><a href="##" class="servicelink1">帮助中心</a></li>

          <li><img src="../../assets/images/wx_cz.jpg" /></li>
        </ul>
      </div>
      <div class="about">
        <ul class="clearFix">
          <li class="about-li1"><a href="##">关于我们</a></li>
          <li><a href="##">联系我们</a></li>
          <li><a href="##">关于我们</a></li>
          <li><a href="##">商家入驻</a></li>
          <li><a href="##">营销中心</a></li>
          <li><a href="##">友情链接</a></li>
          <li><a href="##">关于我们</a></li>
          <li><a href="##">营销中心</a></li>
          <li><a href="##">友情链接</a></li>
          <li><a href="##">关于我们</a></li>
        </ul>
        <span> 地扯：北京市昌平区宏富科技园综合楼6层 </span>
        <span> 京ICP备19006430号 </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
/* 公司及服务介绍 */
.Company {
  height: 319px;
  padding-top: 23px;
  background: #eaeaea;
  border-top: 1px solid #e4e1e1;
}
.service {
  width: 1200px;
  height: 180px;
  margin: 0 auto;

  border-bottom: 1px solid #e4e1e1;
}
.Company .service ul {
  float: left;
  width: 190px;
  height: 102px;
}
.Company .service ul li {
  line-height: 18px;
  color: #333333;
  padding-left: 39px;
  font-size: 12px;
}
.Company .service li .servicelink1 {
  font-weight: 700;
}
.Company .about {
  width: 730px;
  height: 115px;
  margin: 0 auto;
  padding-top: 19px;
  text-align: center;
}
.Company .about li {
  float: left;
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  padding: 0 14px 0 10px;
  color: #333333;
  border-left: 1px solid #666666;
}
.Company .about ul {
  margin-bottom: 12px;
}
.Company .about .about-li1 {
  border: none;
}
.Company .about span {
  display: block;
  margin-bottom: 15px;
}
</style>