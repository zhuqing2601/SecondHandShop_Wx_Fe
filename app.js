
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
App({
  onLaunch: function () {
    this.globalData = {}
    this.userInfo = {}
  },
  requesturl:'http://47.107.235.34:8081/swagger-ui.html/',
  request(url, method, data, header = {}) {
    console.log('url',url);
    console.log('data',data)
    wx.showLoading({
      title: '加载中',
    })
    return wx.request({
      url: this.requesturl + url,
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
        reject(error)
        
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