import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Style.css';

export class Nav extends Component {
  render() {
    return (
      <nav className='navStyle'>
        <ul className='navLink'>
            <Link to='home'><li>Home</li></Link>
            <Link to='product'><li>Product</li></Link>
            <Link to='contact'><li>Contact Us</li></Link>
        </ul>
      </nav>
    )
  }
}

export default Nav
