// pages/add/add.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:[],
    tit:'',
    pri:'',
    des:'',
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

  },

  uploadImg(){
    wx.chooseImage({
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success : (res) => {
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          img:tempFilePaths
        })
      }
    })
  },

  getTit(ev){
    this.setData({
      tit:ev.detail.value
    })
  },
  getPri(ev){
    this.setData({
      pri:ev.detail.value
    })
  },
  getDes(ev){
    this.setData({
      des:ev.detail.value
    })
  },

  async send(){
    await app.post(
      'api/commodity/upLoad',
      {
        'commodityDetail': this.data.des ,
        'commodityName': this.data.tit ,
        'commodityOwner': app.userInfo.nickName ,
        'coverPicture' : this.data.img[0] ,
        'multipartFile' : this.data.img ,
        'shopId' : this.data.pri ,
      })
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})