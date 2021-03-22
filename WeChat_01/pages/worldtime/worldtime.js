Page({
  data: {
    key:'********',
    city:'',
    result:'',
    err:''
  },
  formSubmit(res) {
    const msg = res.detail.value.city;
    this.setData({
      city: msg
    })
    wx.request({
      url: 'https://api.tianapi.com/txapi/worldtime/index',
      data:{
        key: this.data.key,
        city: msg
      },
      success:(res)=>{
        console.log(res);
        const inf = res.data.msg;
        if(inf == 'success'){
          this.setData({
          result: res.data.newslist[0],
          err:'',
        })
        }
        else{
          this.setData({
            err: res.data.msg,
            result:''
          })
        }
      }
    })
  }
})
