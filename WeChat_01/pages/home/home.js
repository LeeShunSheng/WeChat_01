// pages/home/home.js
const my_icon = require('../static/js/icon.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0,
    key: '********',
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
  getCityCode(getWeather){
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
  getWeather(cityCode){
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo',
      data:{
        key: this.data.key,
        city: cityCode,
        extensions: 'base'
      },
      success:(res)=>{
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
  jumpToLunar(){
    wx.navigateTo({
      url: '/pages/lunar/lunar',
    })
  },
  jumpToAirC(){
    wx.navigateTo({
      url: '/pages/aqi/aqi',
    })
  },
  jumpToWorldTime(){
    wx.navigateTo({
      url: '/pages/worldtime/worldtime',
    })
  }
})
