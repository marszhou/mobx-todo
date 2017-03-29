import {extendObservable} from 'mobx'

let idGenerator = 0

class Item {
  constructor(title) {
    extendObservable(this, {
      title: title,
      finished: false,
      id: ++idGenerator
    })
  }
}

export default Item