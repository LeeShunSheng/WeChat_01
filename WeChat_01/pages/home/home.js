// pages/home/home.js
const my_icon = require('../static/js/icon.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0,
    key: '2ca8c96e40912c0e81a0a9ebe9e9ade2',
    weather:{
      city: "loading...",
      humidity: "loading...",
      reporttime: "loading...",
      temperature: "loading...",
      weather: "loading...",
      winddirection: "loading...",
      windpower: "loading...",
      s_icon: "icon-qing"
    }
  },
  // 获取城市编码
  getCityCode:function(getWeather){
    wx.getLocation({
      success:(res)=>{
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        wx.request({
          url: 'https://restapi.amap.com/v3/geocode/regeo',
          data: {
            key:this.data.key,
            location: this.data.longitude+','+this.data.latitude
          },
          success:(res)=>{
            let cityCode = res.data.regeocode.addressComponent.adcode;
            getWeather(cityCode);
          }
        })
      }
    })
  },

  //根据cityCode获得天气情况
  getWeather:function(cityCode){
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo',
      data:{
        key: this.data.key,
        city: cityCode,
        extensions: 'base'
      },
      success:(res)=>{
        console.log(res);
        this.setData({
          'weather.city': res.data.lives[0].city,
          'weather.humidity': res.data.lives[0].humidity,
          'weather.reporttime': res.data.lives[0].reporttime,
          'weather.temperature': res.data.lives[0].temperature,
          'weather.weather': res.data.lives[0].weather,
          'weather.winddirection': res.data.lives[0].winddirection,
          'weather.windpower': res.data.lives[0].windpower,
        })
        this.setData({
          'weather.s_icon': my_icon.w_icon[this.data.weather.weather]
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCityCode(this.getWeather);
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