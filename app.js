
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')

App({
    userInfo:{username:"",openId:"",nickName:"",lat:"",lng:"",mobile:"",id:""}

  onLaunch: function () {
    this.globalData = {}
    this.userInfo = {}
  },
  requesturl:'http://120.79.162.113:8011/',
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