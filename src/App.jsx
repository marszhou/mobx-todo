import React from 'react'
import Todo from './todo'
import DevTools from 'mobx-react-devtools'

export default () => {
  return (
    <div className='container'>
      <h1>Mobx todos</h1>
      <Todo/>
      <DevTools/>
    </div>
  )
}