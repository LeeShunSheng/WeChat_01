// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 40,
    longitude: 120
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
    wx.getLocation({
      success:(res)=>{
        console.log(res);
        this.setData({
          latitude: res.latitude,
          longtitude: res.longitude
        })
        console.log('经度: '+this.data.latitude +' 纬度: '+this.data.longtitude)
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