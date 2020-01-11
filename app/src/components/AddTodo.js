import React, { Component } from 'react'

export default class AddTodo extends Component {
  
  constructor() {
    super()
    this.submitted = this.submitted.bind(this)
  }
  submitted(event) {
    event.preventDefault() // ページリロード回避
    const input = event.target.querySelector('input')
    const value = input.value
    input.value = ''
    this.props.updateTodo(value)
  }
  render() {
    return (
      <form onSubmit={this.submitted}>
        <input type="text" />
      </form>
    )
  }
}