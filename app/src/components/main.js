import React, { Component } from 'react'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

export default class Todo extends Component {
  
  constructor(props) {
    super()
    // stateに持たせることで可変にさせる
    this.state = { tasks: props.tasks }
    // Cannot read property 'state' of undefinedを回避
    this.updateTodo = this.updateTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }
  updateTodo(value) {
    const updateTasks = this.state.tasks
    updateTasks.push(value)
    this.setState({ tasks: updateTasks })
  }
  removeTodo(value) {
    const updateTasks = this.state.tasks
    updateTasks.splice(updateTasks.indexOf(value), 1);
    this.setState({tasks: updateTasks})
  }
  render() {
    return (
      <div>
          <h1>Todo Example</h1>
          <AddTodo update={this.updateTodo} />
          <ListTodo remove={this.removeTodo} tasks={this.state.tasks} />
      </div>
    )
  }
}