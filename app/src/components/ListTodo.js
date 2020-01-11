import React, { Component } from 'react'

export default class ListTodo extends Component {
  
  constructor() {
    super();
  }
  remove(elm) {
    const value = elm.target.parentNode.querySelector('span').innerText
    this.props.remove(value)
  }
  render() {
    const items = this.props.tasks.map((item, index)=><li key={index}><span>{item}</span><button onClick={this.props.remove}>delete</button></li>)
    return (
       <ul>{items}</ul>
    )
  }
}