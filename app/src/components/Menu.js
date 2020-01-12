import React from 'react'

const Menu = () => {
  const menuLiStyle = {
    display: 'inline',
    width: '100px'
  }
  return (
    <div style={{ width: '500px', textAlign: 'center'}}>
      <ul style={{ display: 'flex' }}>
        <li style={menuLiStyle}>Home</li>
        <li style={menuLiStyle}>Todo</li>
      </ul>
    </div>
  )
}

export default Menu