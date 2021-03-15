const app = getApp();
var indexMethods = require('../index/index.js');
Page({

  data: {
    username: '',
    password: '',
    lat: 0,
    lng: 0,
  },

  // 获取输入账号
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    var self = this;
    if (self.data.username.length == 0 || self.data.password.length == 0) {
      wx.showToast({
        title: '用户名\密码为空',
        icon: 'loading',
        duration: 1000
      })
    } else {
      const username = {
        username : self.data.username,
      }
      app.user = Object.assign(app.user,username)
      //TODO 需要先使用wx.getUserInfo Api来注册用户信息到数据库，目前还没完成注册逻辑
      wx.request({
        url: 'http://47.107.235.34:8010/api/user/login',
        header: {
          'content-type': 'application/json'
        },
        method: 'post',
        data: {
          username: self.data.username,
          passowrd: self.data.password,
          lat: app.user.lat,
          lng: app.user.lng,
        },
        success(result) {
          if (result.data.code == 200) {
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 1000
            })
            app.userInfo.username = self.data.username
            wx.switchTab({
              url: '/pages/index/index?callGetData=true',
            })
            indexMethods.getData;
          }else if(result.data.code == 500){
            wx.showToast({
              title: '登录信息错误',
              icon: 'none',
              duration: 1000
            })
          } else {
            //TODO 需要设计请求失败的用户反馈
            console.log("请求超时了，请稍后再试!");
          }
        }
      })
    }
  },
  //注册
  register: function () {
    const self = this;
    if (self.data.username.length == 0 || self.data.password.length == 0) {
      wx.showToast({
        title: '用户名\密码为空',
        icon: 'loading',
        duration: 1000
      })
    } else {
      const username = {
        username : self.data.username,
      }
      app.user = Object.assign(app.user,username)
      
      //TODO 需要先使用wx.getUserInfo Api来注册用户信息到数据库，目前还没完成注册逻辑
      wx.request({
        url: 'http://47.107.235.34:8010/api/user/register',
        header: {
          'content-type': 'application/json'
        },
        method: 'post',
        data: {
          username: self.data.username,
          password: self.data.password,
          userLat: app.user.lat,
          userLong: app.user.lng,
        },
        success(result) {
          if (result.data.code == 200) {
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 1000
            })
            wx.switchTab({
              url: '/pages/index/index',
            })

          }else if(result.data.code == 500){
            wx.showToast({
              title: '用户名已存在',
              icon: 'none',
              duration: 1000
            })
          } else {
            //TODO 需要设计请求失败的用户反馈
            console.log("请求超时了，请稍后再试!");
          }
        }
      })
    }

  },


  visitor: function () {

    console.log("now is visitor");
    app.userInfo.username="visitor"
    wx.switchTab({
      url: '/pages/index/index',
    })
  }





})