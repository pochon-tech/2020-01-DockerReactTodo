import React, { Component } from 'react'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'
import Menu from './Menu'

export default class Todo extends Component {
  
  constructor(props) {
    super()
    // stateに持たせることで可変にさせる
    this.state = { tasks: props.tasks }
    // Cannot read property 'state' of undefinedを回避
    this.updateTodo = this.updateTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  updateLocalStorage(updateTasks) {
    // ※localstorageのデータはString
    localStorage.setItem('tasks', JSON.stringify(updateTasks))
  }
  updateTodo(value) {
    const updateTasks = this.state.tasks
    updateTasks.push(value)
    this.setState({ tasks: updateTasks })
    this.updateLocalStorage(updateTasks)
  }
  removeTodo(value) {
    const updateTasks = this.state.tasks
    updateTasks.splice(updateTasks.indexOf(value), 1);
    this.setState({tasks: updateTasks})
    this.updateLocalStorage(updateTasks)
  }
  render() {
    return (
      <div>
          <div class="menu">
            <Menu />
          </div>
          <h1>Todo Example</h1>
          <AddTodo update={this.updateTodo} />
          <ListTodo remove={this.removeTodo} tasks={this.state.tasks} />
      </div>
    )
  }
}