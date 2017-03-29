import React from 'react'
import Item from './item'
import {observer} from 'mobx-react'

export default observer(({items}) => {
  return (
    <div>
      {
        items.map(item => {
          return <Item item={item} key={item.id}/>
        })
      }
    </div>
  )
})