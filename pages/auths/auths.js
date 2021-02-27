// pages/auths/auths.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: true,
    isHide: true,
    userInfo: {
      nickName: "未知昵称",
      gender: 1,
      language: "zh_CN",
      city: "Guangzhou",
      province: "Guangdong",
      country: "China",
      avatarUrl: "../../static/images/wx_logo.png"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    // wx.getUserInfo({
    //   lang: lang,
    // })

    //查看是否授权

    wx.getSetting({

      success: function (res) {
        if (res.authSetting['scope.userInfo']) {

          console.log("用户授权了");

        } else {

          //用户没有授权

          console.log("用户没有授权");

        }

      }

    });

  },

  bindGetUserInfo: function (res) {

    if (res.detail.userInfo) {
      this.setData({
        userInfo: res.detail.userInfo
      })

      var that = this;


      that.setData({

        isHide: false

      });
      wx.getLocation({
        type: 'wgs84', 
        success: function (res) {
          const newUser = {
            lat:res.latitude,
            lng:res.longitude,
          }
          app.user = Object.assign(app.user,newUser)
        }
      })

      wx.navigateTo({
        url: '/pages/login/login',
      })

    } else {

      //用户按了拒绝按钮

      wx.showModal({

        title: '警告',

        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',

        showCancel: false,

        confirmText: '返回授权',

        success: function (res) {

          // 用户没有授权成功，不需要改变 isHide 的值

          if (res.confirm) {

            console.log('用户点击了“返回授权”');

          }

        }

      });

    }

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})