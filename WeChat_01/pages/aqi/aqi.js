Page({
  data: {
    key:'9066a2f1f1b79b328d7ad5e9d205a63e',
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
      url: 'https://api.tianapi.com/txapi/aqi/index',
      data:{
        key: this.data.key,
        area: msg
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