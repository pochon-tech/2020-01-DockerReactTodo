import React, { Component } from 'react'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

export default class Todo extends Component {
  
  constructor(props) {
    super()
    // stateに持たせることで可変にさせる
    this.state = { tasks: props.tasks }
    this.updateTodo = this.updateTodo.bind(this)
  }
  updateTodo(value) {
    const updateTasks = this.state.tasks
    updateTasks.push(value)
    this.setState({ tasks: updateTasks })
  }
  render() {
    return (
      <div>
          <h1>Todo Example</h1>
          <AddTodo updateTodo={this.updateTodo} />
          <ListTodo tasks={this.state.tasks} />
      </div>
    )
  }
}