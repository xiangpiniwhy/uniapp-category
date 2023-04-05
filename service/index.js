const BASE_URL = "http://123.207.32.32:7888/api/hy66"
const TIME_OUT = 10000

class HYRequest {
  request(url, method, params) {
	  console.log('接口',BASE_URL + url);
    return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + url,
				timeout: TIME_OUT,
				method: method,
				data: params,
				success: res => {
					resolve(res.data)
				},
				fail: reject
			})
    })
  }

  get(url, params) {
    return this.request(url, "GET", params)
  }

  post(url, data) {
    return this.request(url, "POST", data)
  }
}

export default new HYRequest()
