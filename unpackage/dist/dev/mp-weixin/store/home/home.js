"use strict";
const common_vendor = require("../../common/vendor.js");
const service_home = require("../../service/home.js");
const userHomeStore = common_vendor.defineStore("home", {
  state: () => {
    return {
      bannerList: [],
      recommendList: []
    };
  },
  actions: {
    async fetchHomeMultdata() {
      var _a, _b, _c, _d;
      const res = await service_home.getHomeMultidata();
      this.bannerList = (_b = (_a = res.data) == null ? void 0 : _a.banner) == null ? void 0 : _b.list;
      this.recommendList = (_d = (_c = res.data) == null ? void 0 : _c.recommendList) == null ? void 0 : _d.list;
      console.log(res);
    }
  }
});
exports.userHomeStore = userHomeStore;
