// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchInput:"",
    list:''
  },
  getPopularTopTen(){
    const that = this;
    wx.request({
      url: 'http://120.79.162.113:8011/commodity/deplay/getPopularTopTen',
      method: 'post',
      success(res) {
        console.log('list',res.data.resultData)
        that.setData({
          list:res.data.resultData,
        })
      }
    })
  },
  getSearchInput(e){
    this.setData({
      searchInput:e.detail.value,
    })
  },
  search(){
    const that = this;
    wx.request({
      url: 'http://120.79.162.113:8011/api/commodity/search',
      header: {
        'content-type': 'application/json'
      },
      method: 'post',
      data: {
        commodityName: that.data.searchInput,
      },
      success(res) {
        console.log('55555',res.data.data)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPopularTopTen();
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