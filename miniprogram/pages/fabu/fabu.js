// pages/fabu/fabu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    elements: [{
      title: '证件类',
      name: 'card',
      color: 'cyan',
      icon: 'newsfill',
      bindtap: 'card'
    },
    {
      title: '书本类',
      name: 'book',
      color: 'blue',
      icon: 'colorlens',
      bindtap: 'card'
    },
    {
      title: '数码类',
      name: 'digital',
      color: 'purple',
      icon: 'font',
      bindtap: 'card'
    },
     {
      title: '服饰类',
       name: 'Clothes',
        color: 'pink',
        icon: 'btn',
        bindtap: 'card'
      },
    {
      title: '生活用品 ',
      name: 'daily-user',
      color: 'mauve',
      icon: 'icon',
      bindtap: 'card'
    },
   
    {
      title: '其它',
      name: 'other',
      color: 'brown',
      icon: 'tagfill',
      bindtap: 'card'
    },
  
    ],
  },

  index(e) {
    wx.redirectTo({
      url: '../index/index',
    })
  },

  my(e) {
    wx.redirectTo({
      url: '../my/my',
    })
  },
  card(e) {
   wx.navigateTo({
     url: '../../pages/fabu/card/card',
   })
  },
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