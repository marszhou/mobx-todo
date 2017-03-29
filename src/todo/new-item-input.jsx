import React from 'react'
// import {observer} from 'mobx-react'
// import {action} from 'mobx'
import todo from './todo-model'

class NewItemInput extends React.Component {
  render() {
    return (
      <div>
        <input
          type='text'
          style={{width: '100%'}}
          placeholder='Add Todo...'
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              todo.addItem(e.target.value)
              e.target.value = ''
            }
          }}
        />
      </div>
    )
  }
}

export default NewItemInput