import React from 'react'
import Footer from './footer'
import Items from './items'
import NewItemInput from './new-item-input'
import {Grid, Row} from 'react-bootstrap'
// import {observable} from 'mobx'
import {observer} from "mobx-react"
import todo from './todo-model'

@observer class Todo extends React.Component {

  handleStatusChange = (status) => {
    todo.changeStatus(status)
  }

  render() {
    return (<Grid>
      <Row>
        <NewItemInput/>
      </Row>
      <Row>
        <Items items={todo.availibleItems}/>
      </Row>
      <Row>
        <Footer
          status={todo.status}
          total={todo.totalCount}
          unfinished={todo.unfinishedItemCount}
          onStatusChange={this.handleStatusChange}
          onCheckAllClick={todo.checkAllItems}/>
      </Row>
      <Row>
      <button onClick={() => todo.addItem(new Date().toString())}>Add Test Todo Item</button>
      </Row>
    </Grid>)
  }
}

export default Todo