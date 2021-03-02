Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'magic',
    userInfo:{},
  },
  handleParent(){
    console.log("parent");
  },
  handleChild(){
    console.log("child");
  },
  //跳转至logs
  toLogs(){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  // 获取用户信息(首次登陆)
  handleGetUserInfo(res){
    console.log(res);
    if(res.detail.userInfo){
      this.setData({
        userInfo: res.detail.userInfo
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //保证刷新后也能获得用户信息
    wx.getUserInfo({
      success:(res)=>{
        console.log(res);
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail: (err) => {
        console.log(err);
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