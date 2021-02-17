
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')

App({
  onLaunch: function () {
    this.globalData = {}
    this.userInfo = {}
  },
  requesturl:'http://47.107.235.34:8011/',
  request(url, method, data, header = {}) {
    wx.showLoading({
      title: '加载中',
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.requesturl + url,
        method: method,
        data: data,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: res => {
          wx.hideLoading();
          resolve(res)      
        },
        fail: error => {
          wx.hideLoading();   
          reject(error)     
        },
        complete() {
          wx.hideLoading();
        },
      })
    })
  },
  post(url,data){
    return this.request(url,'POST',data)
  }
})