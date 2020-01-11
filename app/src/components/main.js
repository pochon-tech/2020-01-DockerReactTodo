import React, { Component } from 'react'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

export default class Todo extends Component {
  
  constructor(props) {
    super()
    // stateに持たせることで可変にさせる
    this.state = { tasks: props.tasks }
  }
  
  render() {
    return (
      <div>
          <h1>Todo Example</h1>
          <AddTodo />
          <ListTodo tasks={this.state.tasks} />
      </div>
    )
  }
}