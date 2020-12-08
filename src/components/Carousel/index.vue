<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: "Carousel",
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    initSwiper() {
      if (this.swiper) return;
      this.$nextTick(() => {
        this.swiper = new Swiper(".swiper-container", {
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          // 如果需要分液器
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  },
  mounted() {
    if (!this.carouselList.length) return;
    this.initSwiper();
    console.log(this.carouselList);
  },
};
</script>
<style lang='less' rel='stylesheet/less' scoped>
</style>