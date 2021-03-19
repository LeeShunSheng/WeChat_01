Page({
  data: {
    key:'9066a2f1f1b79b328d7ad5e9d205a63e',
    fitness: '',
    taboo: '',
    today:'',
    sday:'',
    err:'',
    myEvent:'',
    showText:'0',
    update:'0'
  },
  getToday(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const v_today = year + '-' + month + '-' + day;
    this.setData({
      today: v_today
    })
  },
  getEvent(day){
    wx.request({
      url: 'http://localhost:8081/myData/event/select',
      success:(res)=>{
        this.setData({
          myEvent: ''
        })
        var event;
        for(var i in res.data){
          if(res.data[i].date == day){
            event = res.data[i].even;
            break;
          }
        }
        this.setData({
          myEvent: event
        })
      }
    })
  },
  getThings(iday){
    wx.request({
      url: 'https://api.tianapi.com/txapi/lunar/index',
      data:{
        key: this.data.key,
        date: iday
      },
      success:(res)=>{
        const msg = res.data.msg;
        if(msg == 'success'){
           this.setData({
            taboo: res.data.newslist[0].taboo,
            fitness: res.data.newslist[0].fitness,
            err:''
          })
        }
        else{
          this.setData({
            err:'日期格式错误',
            taboo:'',
            fitness:''
          })
        }
      }
    })
  },
  formSubmit(res) {
    const msg = res.detail.value.message;
    this.setData({
      sday: msg,
      today: ''
    })
    this.getThings(msg);
    console.log(msg);
    this.getEvent(msg);
  },
  onLoad: function (options) {
    this.getToday();
    this.getThings(this.data.today);
    this.getEvent(this.data.today);
    
  },
  delEvent(){
    var showday;
    if(this.data.today == '')
      showday = this.data.sday;
    else
      showday = this.data.today;
    wx.request({
      url: 'http://localhost:8081/myData/event/delete',
      data:{
        date:showday
      },
      success:(res)=>{
        this.setData({
          myEvent:''
        })
      }
    })
  },
  //更新当前事件
  updEvent(){
    this.setData({
      myEvent:'',
      showText: 1,
      update:'1'
    })
  },
  //创建新的事件
  creEvent(){
    this.setData({
      showText: 1
    })
  },
  // 事件提交
  textSubmit(res){
    const msg = res.detail.value.even;
    this.setData({
      myEvent: msg,
      showText: 0
    })
    //确定日子
    var showday;
    if(this.data.today == '')
      showday = this.data.sday;
    else
      showday = this.data.today;
    //确定是否为更新
    var v_url;
    if(this.data.update == 0)
      v_url = 'http://localhost:8081/myData/event/create';
    else
      v_url = 'http://localhost:8081/myData/event/update';
    wx.request({
      url: v_url,
      data:{
        Date: showday,
        Even: this.data.myEvent
      }
    })
    this.setData({
      update: 0
    })
  }
})