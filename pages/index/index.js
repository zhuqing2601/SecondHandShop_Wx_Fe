// pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:0,
    longitude:0,
    goods: [
      {
        'commodityName': 'Adidas/阿迪达斯正品2020冬季新款健身训练运动休闲跑步鞋FV9141',
        'commodityPrice': 33.00,
        'commodityImg': [
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i2/2969981204/O1CN01GIGj7K1KlTW7ViHOO_!!0-item_pic.jpg_500x500q90.jpg_.webp',
        ],

      },
      {
        'commodityName': 'jeep吉普厚底老爹鞋女ins潮秋季2020新款休闲鞋智熏鞋超火运动鞋',
        'commodityPrice': 332.00,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
          '//gw.alicdn.com/bao/uploaded/i2/2969981204/O1CN01GIGj7K1KlTW7ViHOO_!!0-item_pic.jpg_500x500q90.jpg_.webp',
        ],

      },
      {
        'commodityName': '乔丹老爹鞋女2020冬季新款简约潮流复古休闲鞋时尚百搭厚底运动鞋',
        'commodityPrice': 7.99,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i2/2969981204/O1CN01GIGj7K1KlTW7ViHOO_!!0-item_pic.jpg_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
      {
        'commodityName': '【无假期的人】公司柜单/纯棉的/绑带蝴蝶结/百搭白色上衣女秋',
        'commodityPrice': 0.99,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i2/140456965/O1CN01zxk6bh21K1EeY7VTy_!!140456965.jpg_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
      {
        'commodityName': '飞跃2021春季老爹鞋女ins潮2020新款学生运动鞋子秋冬百搭休闲鞋',
        'commodityPrice': 332.03,
        'commodityImg': [
          '//ci.xiaohongshu.com/fb64acb5-0d34-3969-9a77-6c1f5bed69a5?imageView2/2/w/540/format/jpg/q/75',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
      {
        'commodityName': 'Duck小黄鸭运动鞋老爹鞋女2021春季新款秋冬休闲显脚跑步鞋学生',
        'commodityPrice': 33.39,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i1/3998713333/O1CN01NZzPrX1aUYhazEOjZ_!!3998713333-0-lubanu-s.jpg_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
      {
        'commodityName': '四季沐歌取暖器电暖风机家用电暖气小型太阳热风机办公室节能省电',
        'commodityPrice': 44.53,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i1/3998713333/O1CN01NZzPrX1aUYhazEOjZ_!!3998713333-0-lubanu-s.jpg_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i2/2969981204/O1CN01GIGj7K1KlTW7ViHOO_!!0-item_pic.jpg_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
      {
        'commodityName': 'Adidas/阿迪达斯正品2020冬季新款健身训练运动休闲跑步鞋FV9141',
        'commodityPrice': 33.00,
        'commodityImg': [
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i2/2969981204/O1CN01GIGj7K1KlTW7ViHOO_!!0-item_pic.jpg_500x500q90.jpg_.webp',
        ],

      },
      {
        'commodityName': 'jeep吉普厚底老爹鞋女ins潮秋季2020新款休闲鞋智熏鞋超火运动鞋',
        'commodityPrice': 332.00,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
          '//gw.alicdn.com/bao/uploaded/i2/2969981204/O1CN01GIGj7K1KlTW7ViHOO_!!0-item_pic.jpg_500x500q90.jpg_.webp',
        ],

      },
      {
        'commodityName': '乔丹老爹鞋女2020冬季新款简约潮流复古休闲鞋时尚百搭厚底运动鞋',
        'commodityPrice': 7.99,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i2/2969981204/O1CN01GIGj7K1KlTW7ViHOO_!!0-item_pic.jpg_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
      {
        'commodityName': '【无假期的人】公司柜单/纯棉的/绑带蝴蝶结/百搭白色上衣女秋',
        'commodityPrice': 0.99,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i2/140456965/O1CN01zxk6bh21K1EeY7VTy_!!140456965.jpg_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
      {
        'commodityName': 'jeep吉普厚底老爹鞋女ins潮秋季2020新款休闲鞋智熏鞋超火运动鞋',
        'commodityPrice': 332.00,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
          '//gw.alicdn.com/bao/uploaded/i2/2969981204/O1CN01GIGj7K1KlTW7ViHOO_!!0-item_pic.jpg_500x500q90.jpg_.webp',
        ],

      },
      {
        'commodityName': '乔丹老爹鞋女2020冬季新款简约潮流复古休闲鞋时尚百搭厚底运动鞋',
        'commodityPrice': 7.99,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i2/2969981204/O1CN01GIGj7K1KlTW7ViHOO_!!0-item_pic.jpg_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
      {
        'commodityName': '【无假期的人】公司柜单/纯棉的/绑带蝴蝶结/百搭白色上衣女秋',
        'commodityPrice': 0.99,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i2/140456965/O1CN01zxk6bh21K1EeY7VTy_!!140456965.jpg_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
      {
        'commodityName': '飞跃2021春季老爹鞋女ins潮2020新款学生运动鞋子秋冬百搭休闲鞋',
        'commodityPrice': 332.03,
        'commodityImg': [
          '//ci.xiaohongshu.com/fb64acb5-0d34-3969-9a77-6c1f5bed69a5?imageView2/2/w/540/format/jpg/q/75',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
      {
        'commodityName': 'Duck小黄鸭运动鞋老爹鞋女2021春季新款秋冬休闲显脚跑步鞋学生',
        'commodityPrice': 33.39,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i1/3998713333/O1CN01NZzPrX1aUYhazEOjZ_!!3998713333-0-lubanu-s.jpg_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i4/3982001123/O1CN01wIamTh1KANR9XgR6Y_!!2-item_pic.png_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
      {
        'commodityName': '四季沐歌取暖器电暖风机家用电暖气小型太阳热风机办公室节能省电',
        'commodityPrice': 44.53,
        'commodityImg': [
          '//gw.alicdn.com/bao/uploaded/i1/3998713333/O1CN01NZzPrX1aUYhazEOjZ_!!3998713333-0-lubanu-s.jpg_500x500q90.jpg_.webp',
          '//gw.alicdn.com/bao/uploaded/i2/2969981204/O1CN01GIGj7K1KlTW7ViHOO_!!0-item_pic.jpg_500x500q90.jpg_.webp',
          '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/162791/1/2425/280348/5ffeb576E42da7df8/09247ac9e7737ac6.jpg!q70.dpg.webp',
        ],

      },
    ]
  },

  methods: {

  },
  getCity() {
    const that = this;
    wx.getLocation({
      type: 'wgs84', 
      success: function (res) {
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude,
        })
      }
    })    
  },
  
  async getData() {
    this.getCity();
    const data = await app.post(
                            'recommandCommodityOfNewUser',
                            {latitude:this.data.latitude,longitude:this.data.longitude})
    console.log(data);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCity();
    console.log('this.data.latitude',this.data.latitude);
    
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