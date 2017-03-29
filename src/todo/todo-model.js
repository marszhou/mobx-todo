import {observable, action, computed} from 'mobx'
import ItemModel from './item-model'

class TodoModel {
  @observable status = 'all'
  @observable items = []

  @computed get itemCount() {
    return this.availibleItems.length
  }

  @computed get totalCount() {
    return this.items.length
  }

  @computed get unfinishedItemCount() {
    return this.items.filter(item => !item.finished).length
  }

  @computed get availibleItems() {
    switch(this.status) {
      case 'all':
        return this.items
      case 'finished':
        return this.items.filter(item => item.finished)
      case 'unfinished':
        return this.items.filter(item => !item.finished)
      default:
        break
    }
  }

  @action('change view status')
  changeStatus(status) {
    this.status = status
  }

  @action
  addItem(title) {
    this.items.push(new ItemModel(title))
  }

  @action
  removeItem(id) {
    let index = this.items.findIndex(item => id === item.id)
    if (index > -1) {
      this.items.splice(index, 1)
    }
  }

  @action
  toggleItemFinished(id) {
    let item = this.items.find(item => id === item.id)
    item.finished = !item.finished
  }

  @action
  changeItemTitle(id, title) {
    let item = this.items.find(item => id === item.id)
    item.title = title
  }

  checkAllItems = action('checkAllItems', () => {
    this.items.filter(item => !item.finished).forEach(item => {
      item.finished = true
    })
  })
}

let todo = new TodoModel()
todo.addItem('My way')
todo.addItem('Your way')
export default todo