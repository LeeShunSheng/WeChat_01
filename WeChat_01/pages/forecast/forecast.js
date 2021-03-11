// pages/forecast/forecast.js

const my_icon = require('../static/js/icon.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0,
    key: '2ca8c96e40912c0e81a0a9ebe9e9ade2',
    reporttime:'loading',
    casts:[
      {
        date: "loading...",
        daypower: "loading...",
        daytemp: "loading...",
        dayweather: "loading...",
        daywind: "loading...",
        sd_icon:"icon-qing",
        nightpower: "loading...",
        nighttemp: "loading...",
        nightweather: "loading...",
        nightwind: "loading...",
        week: "loading...",
        sn_icon:"icon-qing",
      },
      {
        date: "loading...",
        daypower: "loading...",
        daytemp: "loading...",
        dayweather: "loading...",
        daywind: "loading...",
        sd_icon:"icon-qing",
        nightpower: "loading...",
        nighttemp: "loading...",
        nightweather: "loading...",
        nightwind: "loading...",
        week: "loading...",
        sn_icon:"icon-qing",
      },
      {
        date: "loading...",
        daypower: "loading...",
        daytemp: "loading...",
        dayweather: "loading...",
        daywind: "loading...",
        sd_icon:"icon-qing",
        nightpower: "loading...",
        nighttemp: "loading...",
        nightweather: "loading...",
        nightwind: "loading...",
        week: "loading...",
        sn_icon:"icon-qing",
      },
      {
        date: "loading...",
        daypower: "loading...",
        daytemp: "loading...",
        dayweather: "loading...",
        daywind: "loading...",
        sd_icon:"icon-qing",
        nightpower: "loading...",
        nighttemp: "loading...",
        nightweather: "loading...",
        nightwind: "loading...",
        week: "loading...",
        sn_icon:"icon-qing",
      },
    ]
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
        extensions: 'all'
      },
      success:(res)=>{
        console.log(res);
        this.setData({
          reporttime:res.data.forecasts[0].reporttime
        })
        for(var i = 0; i < 4; i++){
          let date = 'casts['+i+'].date';
          let daypower = 'casts['+i+'].daypower';
          let daytemp = 'casts['+i+'].daytemp';
          let dayweather = 'casts['+i+'].dayweather';
          let daywind = 'casts['+i+'].daywind';
          let nightpower = 'casts['+i+'].nightpower';
          let nighttemp = 'casts['+i+'].nighttemp';
          let nightweather = 'casts['+i+'].nightweather';
          let nightwind ='casts['+i+'].nightwind';
          let week = 'casts['+i+'].week';
          let sd_icon = 'casts['+i+'].sd_icon';
          let sn_icon = 'casts['+i+'].sn_icon';
          let ch_week = res.data.forecasts[0].casts[i].week;
          switch(ch_week){
            case '1':
              ch_week = '一';
              break;
            case '2':
              ch_week = '二';
              break;
            case '3':
              ch_week = '三';
              break;
            case '4':
              ch_week = '四';
              break;
            case '5':
              ch_week = '五';
              break;
            case '6':
              ch_week = '六';
              break;
            case '7':
              ch_week = '日';
              break;
            default :
              ch_week = '?';
          };
          this.setData({
            [date]: res.data.forecasts[0].casts[i].date,
            [daypower]: res.data.forecasts[0].casts[i].daypower,
            [daytemp]: res.data.forecasts[0].casts[i].daytemp,
            [dayweather]: res.data.forecasts[0].casts[i].dayweather,
            [daywind]: res.data.forecasts[0].casts[i].daywind,
            [nightpower]: res.data.forecasts[0].casts[i].nightpower,
            [nighttemp]: res.data.forecasts[0].casts[i].nighttemp,
            [nightweather]: res.data.forecasts[0].casts[i].nightweather,
            [nightwind]: res.data.forecasts[0].casts[i].nightwind,
            [week]: ch_week
          }),
          this.setData({
            [sd_icon]: my_icon.w_icon[this.data.casts[i].dayweather],
            [sn_icon]: my_icon.w_icon[this.data.casts[i].nightweather]
          })
        }
      }
    })
  },
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