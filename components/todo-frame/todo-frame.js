Component({
  data: {
    addItemValue: [],
    todoGroup: [{
      title: 'todo group 01',
      items: [{
        checked: false,
        content: 'todo item 01'
      }, {
        checked: false,
        content: 'todo item 02'
      }, {
        checked: false,
        content: 'todo item 03'
      }, {
        checked: false,
        content: 'todo item 04'
      }]
    }, {
      title: 'todo group 02',
      items: [{
        checked: true,
        content: 'todo item 01'
      }, {
        checked: false,
        content: 'todo item 02'
      }, {
        checked: false,
        content: 'todo item 03'
      }, {
        checked: false,
        content: 'todo item 04'
      }]
    }]
  },
  methods: {
    addItem(e) {
      const val = e.detail.value
      const { index } = e.target.dataset
      const { todoGroup, addItemValue } = this.data
      todoGroup[index].items.push({
        checked: false,
        content: val.trim()
      })
      addItemValue[index] = ''
      this.setData({ todoGroup, addItemValue })
    },
    editItem(e) {
      const { index, subindex } = e.target.dataset
      const { value } = e.target
      const { todoGroup } = this.data
      const item = todoGroup[index].items[subindex]
      if (value.trim() === '') {
        todoGroup[index].items.splice(subindex, 1)
      } else {
        item.content = value
      }
      this.setData({ todoGroup })
    },
    checkboxChange(e) {
      const { index, subindex } = e.target.dataset
      const { todoGroup } = this.data
      const item = todoGroup[index].items[subindex]
      item.checked = !item.checked
      this.setData({ todoGroup })
    },
    addGroup() {
      const { todoGroup } = this.data
      todoGroup.push({
        title: `new todo ${todoGroup.length + 1}`,
        items: []
      })
      this.setData({ todoGroup })
    }
  }
})
