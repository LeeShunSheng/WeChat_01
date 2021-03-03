Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  //微信登陆
  wechat_login(){
    console.log('调用微信登陆');
  },
  //豆瓣登陆
  douban_login(){
    console.log('调用豆瓣登陆');
  },
  //用户隐私协议
  userAgreement(){
    console.log('打开用户隐私协议');
    wx.navigateTo({
      url: '/pages/agreement/agreement',
      success:(result)=>{
        console.log(result);
      },
      fail:(result)=>{
        console.log(result);
      }
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