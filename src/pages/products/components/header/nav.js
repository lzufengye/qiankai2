import React from 'react'
import Router from 'react-router'
import { Link } from 'react-router'

var Nav = React.createClass({

  render() {

    return (
      <nav className='appNav'>
          <ul className='appNav-list'>
            <li className='appNav-listItem'><Link className='appBtn' to='food' >Food</Link></li>
            <li className='appNav-listItem'><Link className='appBtn' to='fashion' >Fashion</Link></li>
          </ul>
      </nav>
    );
  }

});

export default Nav
