// pages/index/index.js
var app = getApp();

var appMethods = require("../../app.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0,
    goods: [  ],
    value:''
  },

  methods: {

  },

  shop_commodity_detail(e) {
    console.log('e',e)
    wx.navigateTo({
      url: '../item/item',
    })
  },

  getData() {
    const that = this;
    wx.request({
      url: 'http://120.79.162.113:8003/getCommodityList',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      data: {
        userId: app.user.username || "visitor",
        lat: app.user.lat || 0,
        lng: app.user.lng || 0,
      },
      success(res) {
        console.log('首页', res.data)
        that.setData({
          goods: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getCity();    
    this.setData({
      value:''
    })
    this.getData();
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
    this.onLoad();
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

  },

})