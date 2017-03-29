import React from 'react'
import {Checkbox, Button} from 'react-bootstrap'
import todo from './todo-model'
import {observer} from 'mobx-react'
import {observable, action} from 'mobx'

// const Item = observer(({item}) => {
//   let style = {}
//   if (item.finished) {
//     style.textDecoration = 'line-through'
//   }

//   return (
//     <div>
//       <Checkbox
//         inline
//         checked={item.finished}
//         style={style}
//         onChange={() => todo.toggleItemFinished(item.id)}
//       >
//         {item.title}
//       </Checkbox>
//     </div>
//   )
// })

@observer class Item extends React.Component {
  @observable isEditing = false

  @action handleToggleEditing = (e) => {
    e.preventDefault()
    this.isEditing = !this.isEditing
  }

  render() {
    const {item} = this.props
    let ret = null

    if (!this.isEditing) {
      let style = {}
      if (item.finished) {
        style.textDecoration = 'line-through'
      }
      ret = (
        <div style={{padding: '5px 0', borderBottom: '1px solid gray'}}>
          <Button onClick={this.handleToggleEditing} bsSize="xsmall" bsStyle="info">编辑</Button>
          {' '}
          <Button onClick={() => todo.removeItem(item.id)} bsSize="xsmall" bsStyle="danger">删除</Button>
          {' '}
          <Checkbox
            inline
            checked={item.finished}
            style={style}
            onChange={() => todo.toggleItemFinished(item.id)}
          >
            {item.title}
          </Checkbox>
        </div>
      )
    } else {
      ret = (
        <div style={{padding: '5px 0', borderBottom: '1px solid gray'}}>
          <input
            ref='input'
            type='text'
            value={item.title}
            onChange={(e) => todo.changeItemTitle(item.id, e.target.value)}
            onKeyDown={(e) => {
              if(e.keyCode===13) this.handleToggleEditing(e)
            }}
            onBlur={this.handleToggleEditing}
            autoFocus
            style={{width: '100%'}}
          />
        </div>
      )
    }
    return ret
  }
}

export default Item