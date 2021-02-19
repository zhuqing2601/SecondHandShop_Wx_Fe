// pages/item/item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic:[
      '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
      '//ci.xiaohongshu.com/1262324e-e6e4-3838-a4fa-048233c13e29?imageView2/2/w/540/format/jpg',
      '//gw.alicdn.com/bao/uploaded/i1/2166281699/O1CN012qlRbK1OQBXqOP8WQ_!!0-item_pic.jpg_500x500q90.jpg_.webp'
    ],
    hidden:true,
    nocancel:false
  },
  cancel: function(){
    this.setData({
      hidden: true
    });
  },
  confirm: function(){
    this.setData({
      nocancel: !this.data.nocancel
    });
    console.log("clicked confirm");
  },

  write_comment: function () {
    this.setData({
      hidden: false
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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