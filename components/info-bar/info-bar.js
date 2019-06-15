Component({
  properties: {
    nick: {
      type: String,
      value: ''
    },
    cover: {
      type: String,
      value: ''
    }
  },
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  methods: {
    loginClick(e) {
      this.triggerEvent('updateUserInfo', e.detail.userInfo)
    },
    uploadClick() {
      console.log('upload!')
    }
  }
})
