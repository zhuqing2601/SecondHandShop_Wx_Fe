var app = getApp()
Page({
  data: {
    username: '',
    password:''
  },

// 获取输入账号
  usernameInput :function (e) {
    this.setData({
      username:e.detail.value
    })
  },

// 获取输入密码
  passwordInput :function (e) {
    this.setData({
      password:e.detail.value
    })
  },

// 登录
  login: function () {
    var self = this;
    if(this.data.username.length == 0 || this.data.password.length == 0){
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    }

    else {
    //TODO 需要先使用wx.getUserInfo Api来注册用户信息到数据库，目前还没完成注册逻辑
      wx.request({
      url:'http://47.107.235.34:8010/apu/user/login',
      header: {'content-type': 'application/x-www-form-urlencoded' },
      data:{
      username:self.username,
      password:self.password
      },
      success(result){
        if(result.data.code = 200){
         wx.showToast({
             title: '登录成功',
             icon: 'success',
             duration: 2000
         })
           //给全局变量赋值以便在其他组件可以直接引用
         App.userInfo.username=result.data.date.userName;
         App.userInfo.openId=result.data.date.openId;
         App.userInfo.lat=result.data.date.lat;
         App.userInfo.lng=result.data.date.lng;
         App.userInfo.id=result.data.date.id;
         App.userInfo.mobile=result.data.date.mobile;
         App.userInfo.nickname=result.data.date.nickname;


             wx.navigateTo({
                 url: '../index/index',
         })

        }else{
            //TODO 需要设计请求失败的用户反馈

            console.log("请求超时了，请稍后再试!");

        }
        }
       }
      }


      })


  }
})