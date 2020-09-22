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
      bindtap: 'index'
    },
    {
      title: '文本',
      name: 'text',
      color: 'purple',
      icon: 'font',
      bindtap: 'index'
    },
    {
      title: '图标 ',
      name: 'icon',
      color: 'mauve',
      icon: 'icon',
      bindtap: 'index'
    },
    {
      title: '按钮',
      name: 'button',
      color: 'pink',
      icon: 'btn',
      bindtap: 'index'
    },
    {
      title: '标签',
      name: 'tag',
      color: 'brown',
      icon: 'tagfill',
      bindtap: 'index'
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