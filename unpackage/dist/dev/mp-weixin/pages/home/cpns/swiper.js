"use strict";
const common_vendor = require("../../../common/vendor.js");
const globel_constant = require("../../../globel/constant.js");
const _sfc_main = {
  __name: "swiper",
  props: {
    bannerList: {
      type: Array,
      default: () => []
    }
  },
  emits: [globel_constant.HANDLE_SWIEPER_ITEM],
  setup(__props, { emit }) {
    function handleSwiperItem(item) {
      emit(globel_constant.HANDLE_SWIEPER_ITEM, item);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.bannerList, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => handleSwiperItem(item), item),
            c: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/xiangpini/Documents/HBuilderProjects/hello uniapp/pages/home/cpns/swiper.vue"]]);
wx.createComponent(Component);
