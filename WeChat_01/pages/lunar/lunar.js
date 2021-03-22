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
    update:'0',
    myOpenid:''
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
    return v_today;
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
    this.getEvent(msg,this.data.myOpenid);
  },
  onLoad: function (options) {
    this.getToday();
    this.getThings(this.data.today);
    this.getOpenId(this.getEvent);
  },
  //获取openid
  getOpenId(getEvent){
    var openid = '';
    wx.login({
      success:(res)=>{
        var code = res.code;
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data:{
            appid: 'wxd6a109dd8d046425',
            secret: '8c67db39372a496fbe6fa7dbc1db62b8',
            js_code: code,
            grant_type: 'authorization_code'
          },
          success:(res)=>{
            openid = res.data.openid;
            this.setData({
              myOpenid: openid
            })
            getEvent(this.getToday(), openid);
          }
        });
        }
      }) 
  },
  //获取当日事件
  getEvent(date, myOpenid){
    wx.request({
      url: 'http://localhost:8081/myData/event/select',
      data:{
        openid: myOpenid,
        date: date
      },
      success:(res)=>{
        if(res.data.length < 1){
          this.setData({
            myEvent: '',
          })
        }
        else{
          var event = res.data[0].event;
          this.setData({
            myEvent: '',
          })
          this.setData({
            myEvent: event
          })
        }
        
      }
    })
  },
  //删除事件
  delEvent(){
    var showday;
    if(this.data.today == '')
      showday = this.data.sday;
    else
      showday = this.data.today;
    wx.request({
      url: 'http://localhost:8081/myData/event/delete',
      data:{
        date:showday,
        openid: this.data.myOpenid
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
        date: showday,
        event: this.data.myEvent,
        openid: this.data.myOpenid
      }
    })
    this.setData({
      update: 0
    })
  },
  //保证输入时，下面显示是正常的
clearShow(){
  this.setData({
    showText:0,
  })
  var showday;
  if(this.data.today == '')
    showday = this.data.sday;
  else
    showday = this.data.today;
  this.getEvent(showday, this.data.myOpenid);
}
})
