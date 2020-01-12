import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"

const topPage = () => <div><h1>Top Page</h1></div>
const pageOne = () => <div><h1>Page One</h1></div>
const page404 = () => <div><h1>Page 404</h1></div>

const Menu = () => {
  const menuLiStyle = {
    display: 'inline',
    width: '100px'
  }
  return (
    <Router>
      <div style={{ width: '500px', textAlign: 'center'}}>
        <ul style={{ display: 'flex' }}>
          <li style={menuLiStyle}><Link to='/'>top</Link></li>
          <li style={menuLiStyle}><Link to='/page1'>page1</Link></li>
        </ul>
      </div>
      <div style={{marginLeft: '50px'}}>
        <Switch>
          <Route path='/' exact component={topPage}/>
          <Route path='/page1' exact component={pageOne}/>
          <Route exact component={page404}/>
        </Switch>
      </div>
    </Router>
  )
}

export default Menu