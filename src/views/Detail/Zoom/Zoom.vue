<template>
  <div class="spec-preview">
    <img :src="Skuimage ? Skuimage : DefaultImg" />
    <div class="event" ref="event" @mousemove="handleMove"></div>
    <div class="big">
      <img :src="Skuimage ? Skuimage : DefaultImg" ref="bigImg" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      Skuimage: "",
      //mask 的定位
      ztop: 0,
      zleft: 0,
      // bigImg的定位
      tleft: 0,
      ttop: 0,
    };
  },
  props: {
    DefaultImg: String,
  },
  mounted() {
    // console.log(this.DefaultImg);
    // if (!this.Skuimage) {
    //   this.Skuimage = this.DefaultImg;
    // }
    this.$bus.$on("clickLittleimg", (src) => {
      // this.$refs.aaa.src = src;
      // this.$refs.bbb.src = src;
      this.Skuimage = src;
    });
    // 中图的宽度/2就是蒙版的宽度。
    this.maskWidth = this.$refs.event.clientWidth / 2;
    // console.log(this.maskWidth);
  },
  methods: {
    // // 放大镜模板 不动用dom的方法，但是需要在元素上加上style样式配合使用
    // // 中图:style="{ top: ttop + 'px', left: tleft + 'px' }"
    // // 蒙版:style="{ top: ztop + 'px', left: zleft + 'px' }"
    // handleMove(e) {
    //   const { offsetX, offsetY } = e; // 获取鼠标位置
    //   // mask的定位
    //   this.zleft = offsetX - 100;
    //   this.ztop = offsetY - 100;
    //   // 判断界限
    //   this.zleft = this.zleft < 0 ? 0 : this.zleft;
    //   this.zleft = this.zleft > 200 ? 200 : this.zleft;
    //   this.ztop = this.ztop < 0 ? 0 : this.ztop;
    //   this.ztop = this.ztop > 200 ? 200 : this.ztop;
    //   // bigImg 的定位
    //   this.ttop = -2 * this.ztop;
    //   this.tleft = -2 * this.zleft;
    // },

    // 老师的模板，动用DOM
    handleMove(e) {
      let left, top;
      const maskDiv = this.$refs.mask; //获取mask蒙版元素
      const bigImg = this.$refs.bigImg; // 获取bigImg大图元素
      const { offsetX, offsetY } = e; // 结构出鼠标的位置
      const maskWidth = this.maskWidth; // 上面已经获取了蒙版宽度，这里保存蒙版宽度
      // 计算left，top的位置,鼠标位置减去蒙版宽度的一半就是宽高
      left = offsetX - maskWidth / 2;
      top = offsetY - maskWidth / 2;
      // 判断蒙版的界限,蒙版范围应该在0--maskWidth（蒙版宽度）之间
      if (left < 0) {
        left = 0;
      } else if (left > maskWidth) {
        left = maskWidth;
      }
      if (top < 0) {
        top = 0;
      } else if (top > maskWidth) {
        top = maskWidth;
      }
      // 赋值位置
      maskDiv.style.left = left + "px";
      maskDiv.style.top = top + "px";
      bigImg.style.left = -2 * left + "px";
      bigImg.style.top = -2 * top + "px";
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>