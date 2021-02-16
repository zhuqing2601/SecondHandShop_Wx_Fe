
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
App({
  onLaunch: function () {
    this.globalData = {}
    this.userInfo = {}
  },
  request(url, method, data, header = {}) {
    const host = 'http://47.107.235.34:8081/swagger-ui.html#';
    wx.showLoading({
      title: '加载中',
    })
    return wx.request({
      url: host + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        console.log('666');
        wx.hideLoading();
        resolve(res.data)
        
      },
      fail: error => {
        console.log('555');
        wx.hideLoading();
        if (failFn) {
            failFn();
        } else {
            this.showToast("网络错误！请重试！");
        }

        // wx.hideLoading();
        // reject(error)
        
      },
      complete() {
        wx.hideLoading();
      },
    })
  },
  post(url,data){
    return this.request(url,'POST',data)
  }
})