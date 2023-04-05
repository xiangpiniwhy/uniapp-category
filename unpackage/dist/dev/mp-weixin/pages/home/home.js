"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home_home = require("../../store/home/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Math) {
  SwiperCpns();
}
const SwiperCpns = () => "./cpns/swiper.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home_home.userHomeStore();
    const { bannerList, recommendList } = common_vendor.storeToRefs(homeStore);
    common_vendor.onLoad(() => {
      homeStore.fetchHomeMultdata();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          bannerList: common_vendor.unref(bannerList)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/xiangpini/Documents/HBuilderProjects/hello uniapp/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
