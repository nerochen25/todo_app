import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper blue darken-3">
          <div className='container'>
            <a className='brand-logo'>Nero's Todo List</a>
            <ul className='right'>
                <li><a href="/"></a>Home</li>
                <li><a href="/about"></a>About</li>
                <li><a href="/contact"></a>Contact</li>
            </ul>
          </div>
      </nav>
    )
  }
}
