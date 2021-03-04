Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {
        title:'观影分析',
        detail:'标记10部影片，开启观影分析',
        count:'0',
        icon:'icon-yingpian'
      },
      {
        title:'听歌分析',
        detail:'标记10首歌曲，开启听歌分析',
        count:'0',
        icon:'icon-yinle'
      },
      {
        title:'读书分析',
        detail:'标记10本书籍，开启观读书分析',
        count:'0' ,
        icon:'icon-shu' 
      }
    ]
  },

  begin(evt){
    console.log(evt);
    const item = evt.currentTarget.id;
    if(item == 'item-0'){
      console.log('item-0');
    } else if(item == 'item-1'){
      console.log('item-1');
    } else if(item == 'item-2'){
      console.log('item-2');
    } else{
      console.log('???');
    }
  },
  login_btn(){
    wx.navigateTo({
      url: '/pages/login/login'
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