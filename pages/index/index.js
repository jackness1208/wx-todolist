// index.js
// 获取应用实例
// const app = getApp()

Page({
  data: {
    userInfo: {}
  },
  requestUserInfo() {
    const self = this
    wx.getSetting({
      fail(er) {
        wx.showModal({
          title: '获取信息失败',
          content: er.errMsg
        })
      },
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (iRes) => {
              self.setData({
                userInfo: iRes.userInfo
              })
            }
          })
        }
      }
    })
  },
  onUpdateUserInfo(e) {
    this.setData({
      userInfo: e.detail
    })
  },
  onLoad() {
    this.requestUserInfo()
  }
})
