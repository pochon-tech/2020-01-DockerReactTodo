import React, { Component } from 'react'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

export default class Todo extends Component {
  
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>
          <h1>Todo Example</h1>
          <AddTodo />
          <ListTodo tasks={this.props.tasks} />
      </div>
    )
  }
}