// pages/add/add.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: [],
    tit: '',
    pri: '',
    des: '',
    id: '',
    imgIndex:0,
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

  uploadImg() {
    wx.chooseImage({
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          img: tempFilePaths
        })
      }
    })
  },

  getTit(ev) {
    this.setData({
      tit: ev.detail.value
    })
  },
  getPri(ev) {
    this.setData({
      pri: ev.detail.value
    })
  },
  getDes(ev) {
    this.setData({
      des: ev.detail.value
    })
  },
  send() {
    const that = this;
    wx.uploadFile({
      filePath: that.data.img[that.data.imgIndex],
      name: 'multipartFile',
      url: 'http://120.79.162.113:8011/api/commodity/upLoad',
      formData: {
        'commodityDetail': that.data.des,
        'commodityId': that.data.id,
        'commodityName': that.data.tit,
        'commodityOwner': app.user.username,
        'commodityPrice ': that.data.pri,
        'commodityTitle': that.data.tit,
        'tagList ': '闲置'
      },
      success: (res) => {
        if(that.data.imgIndex==0){
          that.setData({
            imgIndex:that.data.imgIndex+1,
            id:JSON.parse(res.data).resultData.commodityId,
          })
          that.send();
        }else if(that.data.imgIndex==that.data.img.length-1){
          that.setData({
                img: [],
                tit: '',
                pri: '',
                des: '',
                id: '',
              })
          wx.switchTab({
          url: '/pages/index/index',
        })
        }else {
          that.setData({
            imgIndex:that.data.imgIndex+1,
          })
          that.send();
        }
        
      },
      fail: (res) => {
        console.log(JSON.parse(res.data))
      }
    })
  }

})