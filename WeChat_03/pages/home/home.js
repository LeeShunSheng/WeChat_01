// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 40,
    longitude: 120,
    city:'渤海'
  },
  search(){
    console.log('调用搜索功能');
    wx.navigateTo({
      url: '/pages/search/search',
      success: (result) => {
        console.log('succed');
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCity();
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
    })
  },
  // 获取所在市信息
  getCity:function(){
    wx.getLocation({
      success:(res)=>{
        console.log(res);
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        wx.request({
          url: 'https://restapi.amap.com/v3/geocode/regeo',
          data:{
            key:'2ca8c96e40912c0e81a0a9ebe9e9ade2',
            location:this.data.longitude + ',' + this.data.latitude,
            radius:'1000'
          },
          success:(res)=>{
            let v_city = res.data.regeocode.addressComponent.city;
            v_city = v_city.substring(0,v_city.length-1);
            this.setData({
              city:v_city
            })
            console.log(this.data.city);
          },
          fail:(err)=>{
            console.log(err);
          }
        })
      },
      fail(){
        console.log('获取位置失败');
      }
    })
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