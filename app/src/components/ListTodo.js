import React, { Component } from 'react'

export default class ListTodo extends Component {
  
  constructor() {
    super();
  }

  render() {
    const items = this.props.tasks.map((item, index)=><li key={index}>{item}</li>)
    return (
       <ul>{items}</ul>
    )
  }
}