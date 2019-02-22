import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper blue darken-3">
          <div className='container'>
            <a className='brand-logo'>Nero's Todo List</a>
            <ul className='right'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
      </nav>
    )
  }
}
